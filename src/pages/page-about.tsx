import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import About from "../components/sections/Home1/About";
import Feature from "../components/sections/Home1/Feature";
import Service from "../components/sections/Home2/Service";
import Faq from "../components/sections/Home1/Faq";

function AboutPage() {
    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="About Us" /> 
                <About />
                <Feature />
                <Service />
                <Faq />
            </Layout>
        </>
    );
}
export default AboutPage