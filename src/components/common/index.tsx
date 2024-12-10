import styled from 'styled-components';

export const SectionTitle = styled.div<{ $lang: string }>`
    font-size: 32px;
    font-style: normal;
    font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
    line-height: 44px;

    white-space: pre-wrap;
    text-align: center;
`;
