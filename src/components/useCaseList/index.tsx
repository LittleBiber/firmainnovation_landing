import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import UseCase from '../useCase';
import UseCase2 from '../useCase/variant';

const Content = styled.div`
    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 120px;

    padding: 120px 0;
`;

const UseCaseList = () => {
    const { t } = useTranslation('UseCase');

    const type1Ex = t('type1Example') as unknown as any[];
    const type2Ex = t('type2Example') as unknown as any[];

    return (
        <Content>
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
