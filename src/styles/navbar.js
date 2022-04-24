import styled from "styled-components";
import '../styles/colors.css';

export const ContainerNavBar = styled.div`
    background: var(--primary);
   .title h2{
        font-family: 'Roboto', sans-serif;
        color: var(--slate);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        letter-spacing: 1px;
        margin-top: 10px;
   } 

   nav{
    display: flex;
    flex-direction: column;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
   }

   nav a{
    color: var(--slate);
    text-decoration: none;
    margin-top: 10px;
   }

   nav a:hover{
       background: var(--indigo);
   }

   .profile p{
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        padding: 10px;
        color: var(--slate);
   }

   .profile span{
       font-weight: 700;
   }
`;