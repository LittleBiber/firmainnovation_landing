import styled from 'styled-components';

const P = styled.p`
    margin: 0;
    padding: 0;
`;

const T1 = styled(P)`
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const T2 = styled(P)`
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const H1 = styled(P)`
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const Typography = {
    T1,
    T2,
    H1
};

export default Typography;
