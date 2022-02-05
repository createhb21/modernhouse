import Layout from '../../components/layout';

export type chatsProps = {};

function chats({}: chatsProps) {
  return (
    <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px] ">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center space-x-3 px-4 py-3"
          >
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">의정부 삐삐</p>
              <p className="text-sm  text-gray-500">
                아직 판매중인 상품일까요??
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default chats;
