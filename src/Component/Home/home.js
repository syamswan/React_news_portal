import React, { useEffect, useState } from "react";
import Sliders from "../Slider/slider";

const Home = () => {
  const [slider, sliderData] = useState([]);

  let sliderList = JSON.parse(JSON.stringify(slider));

  function FetchCaruselData() {
    fetch("https://jsonplaceholder.org/posts")
      .then((res) => res.json())
      .then((json) => {
        sliderData(json);
      });
  }

  useEffect(() => {
    FetchCaruselData();
  }, []);

  return (
    <>
      <Sliders sliderListData={sliderList} />
      <h1> I am for India</h1>
    </>
  );
};

export default Home;
