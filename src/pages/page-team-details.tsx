import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import TeamDetails from "../components/sections/TeamDetails";

function TeamDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Team Details" />
                <TeamDetails />
            </Layout>
        </>
    )
}
export default TeamDetailsPage