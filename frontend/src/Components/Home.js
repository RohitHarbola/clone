import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";
import Fotter from "./Footer"

function Home() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
    };
    fetchdata();
  }, []);

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./desktop_banner.jpg" alt="Desktop Banner" />
        <img src="./mobile_banner.jpg" alt="Mobile Banner" />
      </Banner>

      <Main>
        {products &&
          products?.data.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
      </Main>
     <footer>
     <Fotter/>
     </footer>


    </Container>

  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    display: block;

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
      }
    }
  }

  @media only screen and (min-width: 767px) {
    position: relative;

    img:nth-child(1) {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0.95),
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0)
      );
      mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0.95),
        rgba(0, 0, 0, 0.85),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0)
      );
    }

    img:nth-child(2) {
      mask-image: none;
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home;
