import React from "react";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `New Day Naz`;
    },
    [name]
  );

  return (
    <>
      <Element name={"Home"} id="home">
        <NavBar />
        <Hero />
      </Element>
      <main>
        <AboutUs />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
