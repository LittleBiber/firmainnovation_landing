import { useGlobalContext } from '../../context/globalContext';
import Desktop from './desktop';
import Mobile from './mobile';

const WhoWeAre = () => {
    const { breakPoint } = useGlobalContext();
    const isMobile = breakPoint.toLowerCase().includes('mobile');

    if (isMobile) return <Mobile />;
    else return <Desktop />;
};

export default WhoWeAre;
