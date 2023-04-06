import React from "react";
import classnames from "classnames";

export default function InfoBlock(props) {
  return (
    <div className={classnames("info-block-w-icon", props.columns)}>
      <div className="ci-icon">
        <i className={classnames("linecons", props.icon)}></i>
      </div>
      <div className="ci-text">
        {props.description ? (
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
        ) : null}
        {props.text ? <h4>{props.text}</h4> : null}
      </div>
    </div>
  );
}
