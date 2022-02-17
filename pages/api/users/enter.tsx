import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
import mail from '@sendgrid/mail';
import client from '../../../libs/server/client';
import withHandler, { ResponseType } from '../../../libs/server/withHandler';

mail.setApiKey(process.env.SENDGRID_API_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(10000 + Math.random() * 90000) + '';

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: { ...user },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.TWILIO_PHONE!,
      body: `Your login token is ${payload}`,
    });
    console.log(message); */
  } else if (email) {
    /* const email = await mail.send({
      from: 'alsghk9701@naver.com',
      to: 'alsghk9701@naver.com',
      subject: 'Your LiveCommerce Verification Email',
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    });
    console.log(email); */
  }

  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
