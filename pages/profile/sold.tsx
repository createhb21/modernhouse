import type { NextPage } from 'next';
import Layout from '@components/Layout';
import ProductList from '@components/ProductList';

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 divide-y  pb-10">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
