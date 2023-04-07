import React from "react";

export default function Testimonial(props) {
  return (
    <div className="testimonial-item">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <p>{props.text}</p>
        </div>

        <div className="testimonial-author-info">
          <h5 className="testimonial-author">{props.author}</h5>
        </div>

        <div className="testimonial-icon">
          <i className="fa fa-quote-left"></i>
        </div>

        <div className="testimonial-icon-big">
          <i className="fa fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
}
