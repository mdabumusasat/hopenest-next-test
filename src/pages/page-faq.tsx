import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import FaqInner from "../components/sections/FaqInner";

function FaqPage() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="FAQ" />
                <FaqInner />
            </Layout>
        </>
    )
}
export default FaqPage