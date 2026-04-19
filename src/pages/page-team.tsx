import React from 'react';
import Layout from "../layouts/MainLayout";
import TeamGrid from "../components/sections/TeamGrid";
import PageTitle from "../components/sections/PageTitle";

function TeamPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Team" />
                <TeamGrid />
            </Layout>
        </>
    )
}
export default TeamPage