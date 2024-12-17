import { useGlobalContext } from '../../context/globalContext';
import Desktop from './desktop';
import Mobile from './mobile';

const Intro = () => {
    const { isMobile } = useGlobalContext();

    if (isMobile) return <Mobile />;
    else return <Desktop />;
};

export default Intro;
