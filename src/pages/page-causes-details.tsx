import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import CausesDetails from "../components/sections/CausesDetails";

function CausesDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Causes Details" />
                <CausesDetails />
            </Layout>
        </>
    )
}
export default CausesDetailsPage