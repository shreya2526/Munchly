import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaAngleUp } from "react-icons/fa";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  // State to track scroll position
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <ExploreMenu
        category={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <FoodDisplay category={selectedCategory} />
      <AppDownload />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaAngleUp size={28} />
        </button>
      )}
    </div>
  );
};

export default Home;
