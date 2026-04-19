import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from '../components/sections/PageTitle';
import Contact from '../components/sections/ContactUs/Contact';

function ContactPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Contact Us" />   
                <Contact />
            </Layout>
        </>
    )
}
export default ContactPage