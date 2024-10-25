"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import MenuModal from "./components/MenuModal";
import HomeSection from "./components/HomeSection";
import ReviewSection from "./components/ReviewSection";
import QASection from "./components/QASection";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSection1, setIsSection1] = useState(true);

  // Create a ref to observe the HomeSection
  const homeSectionRef = useRef(null);

  // Use Intersection Observer to toggle isSection1
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSection1(entry.isIntersecting);
      },
      { threshold: 0} // Adjust threshold as needed
    );

    if (homeSectionRef.current) {
      observer.observe(homeSectionRef.current);
    }

    return () => {
      if (homeSectionRef.current) observer.unobserve(homeSectionRef.current);
    };
  }, []);

  // Prevent background scrolling when the modal is open
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
        <QASection/>
      </div>
    </div>
  );
}
