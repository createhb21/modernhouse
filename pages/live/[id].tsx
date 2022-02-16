import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Message from '@components/Message';

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 py-10  px-4">
        <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">나이키에어맥스95</h1>
          <span className="mt-3 block text-2xl text-gray-900">$650</span>
          <p className=" my-6 text-gray-700">
            거의 새것 나이키 공식홈에서 구매 나이키 에어맥스 95 에센셜
            트리플화이트 착용 5회 미만 사이즈미스로 불편해서 가지고 있다가
            올립니다! 사이즈 230
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            채팅으로 거래하기
          </h2>
          <div className="h-[50vh] space-y-4 overflow-y-scroll py-10  px-4 pb-16">
            <Message message="지나가다 알려드리고 싶어서, 씨레기 아니고 실외기 입니당 🌝" />
            <Message message="ㅋㅋㅋㅋㅋㅋㅋ" reversed />
            <Message message="감사합니다 ㅋ" />
          </div>
          <div className="fixed inset-x-0 bottom-0  bg-white py-2">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
