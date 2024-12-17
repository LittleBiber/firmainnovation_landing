import styled from 'styled-components';

export const SectionTitle = styled.div<{ $lang: string }>`
    font-size: 22px;
    font-style: normal;
    font-weight: ${({ $lang }) => ($lang === 'ko' ? 800 : 900)};
    line-height: 30px;

    white-space: pre-line;
    text-align: center;
`;
