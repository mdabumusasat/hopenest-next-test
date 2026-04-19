import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import CausesGrid from "../components/sections/CausesGrid";

function ServicesGridPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Causes" />
                <CausesGrid />
            </Layout>
        </>
    )
}
export default ServicesGridPage