import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 22px;
    align-items: center;
`;

const Loader = () => (
    <Container>
        <span role="img" aria-label="Loading">
            Loading...🕐
        </span>
    </Container>
)

export default Loader;