import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ShopSidebar from "../components/sections/ShopSidebar";

function PageShopSidebar() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Shop Sidebar" />
                <ShopSidebar />
            </Layout>
        </>
    )
}
export default PageShopSidebar