import React from "react";
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ShopDetails from "../components/sections/ShopDetails";

function PageShopDetails() {
    return (
        <>
          <Layout HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Shop Details" />
            <ShopDetails />
          </Layout>
        </>
    );
}
export default PageShopDetails