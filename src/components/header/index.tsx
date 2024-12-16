import { useGlobalContext } from '../../context/globalContext';
import Desktop from './desktop';
import Mobile from './mobile';

const Header = () => {
    const { isMobile } = useGlobalContext();

    if (isMobile) return <Mobile />;
    else return <Desktop />;
};

export default Header;
