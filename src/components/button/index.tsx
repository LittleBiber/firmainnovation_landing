import styled from 'styled-components';

const ButtonBase = styled.button<{ disabled?: boolean }>`
    background: transparent;
    margin: 0;
    padding: 0;
    border: unset;

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default ButtonBase;
