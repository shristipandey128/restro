import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/front.jpeg";
import "../styles/HomeStyles.css";


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>The Taste Of India</h1>
          <p>Love From India</p>
          <Link to="/menu">
            <button>Try It</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
