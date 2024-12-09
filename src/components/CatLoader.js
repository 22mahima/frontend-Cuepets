import React from "react";
import "../css files/CatSilhouette.css";



const CatSilhouette = () => {
  return (
    <div className="cat-container">
      <div className="cat">
        <div className="head">
          <div className="ear ear-left"></div>
          <div className="ear ear-right"></div>
        </div>
        <div className="body"></div>
        <div className="paw"></div>
        <div className="tail"></div>
      </div>
    </div>
  );
};

export default CatSilhouette;
