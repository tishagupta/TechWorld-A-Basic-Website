import React from "react";
import pic from "../assets/photo1.jpg"



const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechWorld</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={pic} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            this is the ultimate platform for all the tech lovers.Whether you're a tech enthusiast, a casual user, or a professional, our website is your go-to destination for staying informed, exploring new trends, and discovering innovative solutions.

At our tech website, we strive to provide a comprehensive and engaging platform that caters to all levels of tech knowledge. Our mission is to empower our readers with up-to-date information, practical guides, insightful reviews, and thought-provoking articles that cover a wide range of technological topics.
          </p>
        </div>
      </div>


    </>
  );
};

export default Home;
