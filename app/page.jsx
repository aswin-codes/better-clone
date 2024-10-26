"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import MenuModal from "./components/MenuModal";
import HomeSection from "./components/HomeSection";
import ReviewSection from "./components/ReviewSection";
import QASection from "./components/QASection";
import Footer from "./components/Footer";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSection1, setIsSection1] = useState(true);

  
  const homeSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection1(entry.isIntersecting);
      },
      { threshold: 0 } 
    );

    if (homeSectionRef.current) {
      observer.observe(homeSectionRef.current);
    }

    return () => {
      if (homeSectionRef.current) observer.unobserve(homeSectionRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalVisible ? "hidden" : "";
  }, [isModalVisible]);

  return (
    <div className="h-[100dvh]">
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out opacity-100"></div>
      )}

      <MenuModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <div className="min-h-[100dvh] font-poppins">
        <Navbar
          toggleModal={() => setIsModalVisible(true)}
          isSection1={isSection1}
        />
        <div ref={homeSectionRef}>
          <HomeSection />
        </div>
        <ReviewSection />
        <QASection />
        <hr/>
        <Footer/>
      </div>
    </div>
  );
}
