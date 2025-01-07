import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>  
      <div> Navbar</div>
     <div><Carousel/></div>
     <div>className='m-3'</div>
      <Card />
      <Card />
      <Card />
      <Card />
      <div>
        <Footer />{" "}
      </div>
    </div>
  );
}
