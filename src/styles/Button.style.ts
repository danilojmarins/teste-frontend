import { styled } from "styled-components";

export const Button = styled.button`

    padding: 0.5rem;
    font: inherit;
    font-weight: 500;
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text_light};
    border: none;
    border-radius: 3px;
    transition: all 0.25s ease;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }

    &:disabled {
        background-color: ${props => props.theme.colors.primary}99;
        cursor: not-allowed;
    }

`;