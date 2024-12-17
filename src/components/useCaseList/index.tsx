import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { useGlobalContext } from '../../context/globalContext';
import UseCase from '../useCase/type1';
import UseCase2 from '../useCase/type2';

const Content = styled.div<{ $isMobile: boolean }>`
    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: ${({ $isMobile }) => ($isMobile ? '64px' : '120px')};

    padding: ${({ $isMobile }) => ($isMobile ? '88px 0' : '120px 0')};
`;

const UseCaseList = () => {
    const { isMobile } = useGlobalContext();
    const { t } = useTranslation('UseCase');

    const type1Ex = t('type1Example') as unknown as any[];
    const type2Ex = t('type2Example') as unknown as any[];

    return (
        <Content $isMobile={isMobile}>
            {type1Ex.map((data, index) => (
                <UseCase data={data} key={`usecase-type1-${index}`} />
            ))}

            {type2Ex.map((data, index) => (
                <UseCase2 data={data} key={`usecase-type2-${index}`} />
            ))}
        </Content>
    );
};

export default UseCaseList;
