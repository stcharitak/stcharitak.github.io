import React from "react";

export default function CertificateItem(props) {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="certificate-item clearfix">
        <div className="certi-logo">
          <img src={props.item.image} alt="logo" />
        </div>

        <div className="certi-content">
          <div className="certi-title">
            <h4>{props.item.title}</h4>
          </div>

          <div className="certi-id">
            <span>{props.item.id}</span>
          </div>
          <div className="certi-date">
            <span></span>
          </div>

          <div className="certi-company">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
