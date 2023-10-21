import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WhoWeAre from "./components/WhoWeAre";
import Featured from "./components/Featured";
import More from "./components/More";
import MakeYourSelf from "./components/MakeYourSelf";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
         <WhoWeAre />
        <Featured />
      <More />
       <MakeYourSelf />
      <Footer />
    </>
  );
};

export default App;
