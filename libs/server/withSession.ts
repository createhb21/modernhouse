import { withIronSessionApiRoute } from 'iron-session/next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'livecommerce',
  password: process.env.COOKIE_SECRET!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
