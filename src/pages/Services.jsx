import React from "react";
import Navbar from "../components/NavBar";
import { BackgroundLinesDemo } from "../components/Heading";
import { FocusCards } from "../components/ui/FocusCards";
import Footer from '../components/Footer';
import image1 from '../assets/service/image1.jpg';
import image2 from '../assets/service/image2.jpg';
import image3 from '../assets/service/image3.jpg';
import image4 from '../assets/service/image4.jpg';
import image5 from '../assets/service/image5.jpg';
import image6 from '../assets/service/image6.jpg';

const serviceCards = [
  { src: image1, title: "Weight management" },
  { src: image2, title: "Strength and cardio training" },
  { src: image3, title: "Crossfit training" },
  { src: image4, title: "Zumba &Aerobics" },
  { src: image5, title: "Personal training & Rehabiltation program" },
  { src: image6, title: "Yoga" },
];

function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        <BackgroundLinesDemo heading={'SERVICES'} />
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <FocusCards cards={serviceCards} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Services;