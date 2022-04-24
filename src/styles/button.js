import styled from "styled-components";
import './colors.css';

export const ButtonStyled = styled.button`
    border: none;
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    font-weight: 700;
    background: ${ 
                    ({ styled }) => styled === 'dark' ? '#343a40': 
                                    styled === 'success' ? '#28a745': 
                                    styled === 'warning' ? '#ffc107': 
                                    styled === 'danger' ? '#dc3545': '#3730a3'
                };
    color: var(--slate);
    letter-spacing: 1px;
    cursor: pointer;
`;