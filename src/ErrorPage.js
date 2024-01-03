

import { NavLink } from "react-router-dom";
import styled from "styled-components";


const ErrorPage = () => {
  return (

    <>

    <Wrapper>
      <div className="container">
        <div>
          <h2>404 Error</h2>
          <h3>UH OH! You're lost.</h3>
          

          <NavLink to="/">
            <button>Go Back to Home</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 1rem 0;
    text-align: center;
    background-color:#add8e6;
    height:20rem;
    margin-top:5rem;

    

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 3.2rem;
      margin-top:1rem;
    }

    button{
      margin-top:2rem;

    }

  }
`;

export default ErrorPage;