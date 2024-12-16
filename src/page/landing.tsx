import Intro from '../components/intro';
import Layout from '../components/layout';
import Recruitment from '../components/recruitment';
import Tech from '../components/tech';
import WhoWeAre from '../components/whoWeAre';

const Landing = () => {
    return (
        <Layout>
            <Intro />
            <WhoWeAre />
            <Tech />

            <Recruitment />
        </Layout>
    );
};

export default Landing;
