import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ShopProduct from "../components/sections/ShopProduct";

function PageShopProduct() {

    return (
        <>
        <Layout HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Shop" />
            <ShopProduct />
        </Layout>
        </>
    )
}
export default PageShopProduct