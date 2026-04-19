import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import NewsGrid from "../components/sections/NewsGrid";

function PageBlogGrid() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="News Grid" />
                <NewsGrid />
            </Layout>
        </>
    )
}
export default PageBlogGrid