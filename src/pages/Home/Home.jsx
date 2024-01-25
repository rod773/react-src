import React from "react";
import styled from "styled-components";

const Home = () => {
  const HomePage = styled.div`
    background-color: red;

    height: 200vh;
  `;

  return (
    <HomePage className="container-fluid">
      <h1>Home</h1>
    </HomePage>
  );
};

export default Home;
