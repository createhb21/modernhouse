import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Message from '@components/Message';

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className="space-y-4 py-10 px-4 pb-16">
        <Message message="차 없으면 오기힘드심" />
        <Message message="회사가 근처면 와 주심 좋긴한데영" reversed />
        <Message message="퇴사했어여" />
        <form className="fixed inset-x-0 bottom-0  bg-white py-2">
          <div className="relative mx-auto flex w-full  max-w-md items-center">
            <input
              type="text"
              className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <button className="flex items-center rounded-full bg-indigo-500 px-3 text-sm text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
