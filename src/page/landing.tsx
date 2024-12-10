import Layout from '../components/layout';
import Recruitment from '../components/recruitment';
import Tech from '../components/tech';
import WhoWeAre from '../components/whoWeAre';

const Landing = () => {
    return (
        <Layout>
            <WhoWeAre />
            <Tech />

            <Recruitment />
        </Layout>
    );
};

export default Landing;
