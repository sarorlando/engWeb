//Lib imports
import styled from "styled-components"

export const DashboardStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
    Oxygen, Ubuntu, Cantarell,   sans-serif;
    
    h1 {
      font-size: var(--fs-300);
      display: block;
      margin: 20px;
  }

   div {
        display: flex;
        flex-direction:column;
    }

  .loginContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    align-items: center;

    /* label, input{
        display: block;
        align-items: center;
        justify-content: center;
    } */

    form {
        display: flex;
        flex-direction: column;
        
    }
    label {
        font-size: var(--fs-350);
        font-weight: bold;
        margin-bottom: 5px;
    }
    input {
        margin-bottom: 40px;
    }
     input {
        width: 320px;
        min-height: 30px;
        border: none;
        padding: 5px 10px;
        background: var(--secondary);
        font-size: var(--fs-200);
        font-family: "Montserrat", "Open Sans", "Helvetica Neue",  Roboto,  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
        Oxygen, Ubuntu, Cantarell,   sans-serif;
    }

    input[type=text]:focus, [type=password]:focus{
        color: white;
    }


    button {
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        background: var(--satib-sheen-gold);
        border-radius: 0.3em;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover{
        background: var(--dark-goldenrod);
    }
  }

    @media (max-height: 920px){
        max-height: 100vh;
        h2 {
            font-size: var(--fs-200);
        }

    }

    
`