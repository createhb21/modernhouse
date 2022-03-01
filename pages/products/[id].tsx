import type { NextPage } from 'next';
import Button from '@components/Button';
import Layout from '@components/Layout';

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4  py-4">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex cursor-pointer items-center space-x-3 border-t border-b py-3">
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              i5-2500 부르스타 커스텀 pc 팝니다
            </h1>
            <span className="mt-3 block text-2xl text-gray-900">$2400</span>
            <p className=" my-6 text-gray-700">
              cpu: i5-2500 mb: ecc h61 ram: 8g ssd: WD green 120g hd: 2.5인치
              500g
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button large text="Talk to seller" />
              <button className="flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            이 글과 함께 봤어요
          </h2>
          <div className=" mt-6 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="mb-4 h-56 w-full bg-slate-300" />
                <h3 className="-mb-1 text-gray-700">메리다 자전거</h3>
                <span className="text-sm font-medium text-gray-900">$6700</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
