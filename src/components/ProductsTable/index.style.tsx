import styled from "styled-components";

export const TableContainer = styled.table`
    
    margin: 2rem auto;

    thead {
        background-color: ${props => props.theme.colors.border_shade};
    }

    tbody {
        background-color: ${props => props.theme.colors.text_light};
        font: inherit;
        font-size: 0.9rem;
        color: ${props => props.theme.colors.text_shade_1};

        th {
            font-weight: 400;
        }
    }

    th {
        padding: 0.3rem;
        border: 1px solid ${props => props.theme.colors.border_shade};
        border-radius: 3px;
    }

    .success {
        color: ${props => props.theme.colors.primary};
        font-size: 1rem;
    }

    .erro {
        color: ${props => props.theme.colors.erro};
    }

`;