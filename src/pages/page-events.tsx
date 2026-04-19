import React from 'react';
import Layout from "../layouts/MainLayout";
import EventGrid from "../components/sections/EventGrid";
import PageTitle from "../components/sections/PageTitle";

function projectPage() {
    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Events" />
                <EventGrid />
            </Layout>
        </>
    )
}
export default projectPage