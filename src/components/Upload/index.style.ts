import { styled } from "styled-components";

export const UploadWidget = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    input[type=file] {
        border: 1px solid ${props => props.theme.colors.border_shade};
        border-radius: 5px;
        padding: 1rem;
        font: inherit;
    }

    input[type=file]::file-selector-button {
        background-color: ${props => props.theme.colors.secondary};
        font: inherit;
        color: ${props => props.theme.colors.text_light};
        font-weight: 500;
        border: none;
        border-radius: 3px;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
            background-color: ${props => props.theme.colors.primary};
        }
    }

    label {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border: 2px dashed ${props => props.theme.colors.secondary}99;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
            background-color: ${props => props.theme.colors.border_shade};
        }

        .title {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
        }
    }

`;