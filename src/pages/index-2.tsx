import React from 'react';
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home2/Banner";
import HeroSection from "../components/sections/Home2/HeroSection";
import About from "../components/sections/Home2/About";
import Service from "../components/sections/Home2/Service";
import ChooseUs from "../components/sections/Home2/ChooseUs";
import Donation from "../components/sections/Home2/Donation";
import Volunteer from "../components/sections/Home2/Volunteer";
import Testimonial from "../components/sections/Home2/Testimonial";
import Brand from "../components/sections/Home2/Brand";
import Project from "../components/sections/Home2/Project";
import Help from "../components/sections/Home2/Help";
import Faq from "../components/sections/Home2/Faq";
import News from "../components/sections/Home2/News";

function Home2() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <Banner />
                <HeroSection />
                <About />
                <Service />
                <ChooseUs />
                <Donation />
                <Volunteer />
                <Testimonial />
                <Brand />
                <Project />
                <Help />
                <Faq />
                <News />
            </Layout>
        </>
    );
}
export default Home2