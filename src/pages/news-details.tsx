import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import BlogDetails from "../components/sections/BlogDetails";

function PageBlogDetails() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Blog Details" />
                <BlogDetails />
            </Layout>
        </>
    )
}
export default PageBlogDetails