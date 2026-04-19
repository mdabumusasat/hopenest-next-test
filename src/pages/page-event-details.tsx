import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ProjectDetails from "../components/sections/EventsDetails";

function ProjectDetailsPage() {
    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Events" />
                <ProjectDetails />
            </Layout>
        </>
    )
}
export default ProjectDetailsPage