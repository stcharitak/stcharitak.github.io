import React from "react";
import ModalImage from "react-modal-image";

export default function ProfilePhoto(props) {
  return (
    <>
      <div className="home-photo">
        <div className="hp-inner">
          <ModalImage
            large={props.url}
            small={props.url}
            alt="Stavros Charitakis"
          />
        </div>
      </div>
    </>
  );
}
