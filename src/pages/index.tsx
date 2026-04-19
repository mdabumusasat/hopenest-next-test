import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home1/Banner";
import Brand from "../components/sections/Home1/Brand";
import Feature from "../components/sections/Home1/Feature";
import About from "../components/sections/Home1/About";
import Donation from "../components/sections/Home1/Donation";
import Volunteer from "../components/sections/Home1/Volunteer";
import Counter from "../components/sections/Home1/Counter";
import Testimonial from "../components/sections/Home1/Testimonial";
import Event from "../components/sections/Home1/Event";
import Donation2 from "../components/sections/Home1/Donation2";
import Faq from "../components/sections/Home1/Faq";
import News from "../components/sections/Home1/News";
import Gallery from "../components/sections/Home1/Gallery";

function Home1() {

    return (
        <>
        <Layout>
            <Banner />
            <Brand />
            <Feature />
            <About />
            <Donation />
            <Volunteer />
            <Counter />
            <Testimonial />
            <Event />
            <Donation2 />
            <Faq />
            <News />
            <Gallery />
        </Layout>
        </>
    );
}
export default Home1