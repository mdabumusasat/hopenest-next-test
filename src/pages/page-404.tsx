import React from 'react';
import Layout from "../layouts/MainLayout";
import Page404 from "../components/sections/Page404";

function ErrorPage() {

    return (
        <>
            <Layout HeaderStyle="error" FooterStyle="error">
                <Page404 />
            </Layout>
        </>
    )
}
export default ErrorPage