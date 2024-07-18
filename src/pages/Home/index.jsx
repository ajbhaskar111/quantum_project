import React from "react";
import { HomeSlider } from "../../component/HomeSlider";
import { TextVideoSection } from "../../container/TextVideoSection";
import SectionTitle from "../../component/sectionTitle";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <TextVideoSection />
      <SectionTitle
        column={2}
        title="Trusted Globally"
        titledetail="Quantum Projectinfra Pvt Ltd (Quantum) is a Real Estate Advisor and Manager for End to End Asset Management. Quantum provides services on PAN India basis through its local office presence in all major cities."
        buttonText="view ALl"
        url="https://www.google.com"
      />
    </>
  );
};

export default Home;
