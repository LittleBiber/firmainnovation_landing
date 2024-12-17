import { useGlobalContext } from '../../context/globalContext';
import Desktop from './desktop';
import Mobile from './mobile';

const Tech = () => {
    const { breakPoint } = useGlobalContext();

    if (breakPoint.toLowerCase().includes('mobile')) return <Mobile />;
    else return <Desktop />;
};

export default Tech;
