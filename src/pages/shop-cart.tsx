import React from "react";
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ShopCart from "../components/sections/ShopCart";

function PageShopCart() {
  return (
    <>
      <Layout HeaderStyle="two" FooterStyle="two">
        <PageTitle pageName="Shop Cart" />
        <ShopCart />
      </Layout>
    </>
  );
}
export default PageShopCart