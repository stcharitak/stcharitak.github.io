import React from "react";
import ModalImage from "react-modal-image";

export default function ResumePageTitle() {
  return (
    <div className="page-title">
      <h1>Resume</h1>
      <div className="page-subtitle">
        <div className="resume_photo">
          <ModalImage
            large="./img/2stavros-3.jpg"
            small="./img/str_2.png"
            alt="Stavros Charitakis"
          />
        </div>
        <h4>Life is short but bigger than a CV</h4>
      </div>
    </div>
  );
}
