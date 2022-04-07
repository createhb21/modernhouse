import type { NextPage } from 'next';
import Item from '@components/Item';
import Layout from '@components/Layout';
import ProductList from '@components/ProductList';

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 divide-y  pb-10">
        <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;
