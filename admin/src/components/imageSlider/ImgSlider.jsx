import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import ImgCard from './ImgCard';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./imgSlider.css";

const ImgSlider = ({ }) => {
  return (
    <div>
      <div style={{  maxWidth: "90%" , margin: "0 auto"}} className="recently-added">
        <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {/* Rendering multiple ImgCard components */}
          {Array.from({ length: 10 }, (_, index) => (
            <ImgCard key={index} />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <KeyboardArrowLeftIcon
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      style={{
        cursor: "pointer",
      }}
    >
      
    </KeyboardArrowLeftIcon>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <KeyboardArrowRightIcon
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      style={{
        cursor: "pointer",
      }}
    >
      Right
    </KeyboardArrowRightIcon>
  );
}

export default ImgSlider