import React from "react";
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ShopCheckout from "../components/sections/ShopCheckout";

function PageShopCheckout() {
    return (
        <>
          <Layout HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Shop Checkout" />
            <ShopCheckout />
          </Layout>
        </>
    );
}
export default PageShopCheckout