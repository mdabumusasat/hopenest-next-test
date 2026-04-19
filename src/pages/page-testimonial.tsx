import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import Testimonial from "../components/sections/Testimonial";

function TestimonialPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Testimonials" />
                <Testimonial />
            </Layout>
        </>
    )
}
export default TestimonialPage