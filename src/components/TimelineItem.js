import React from "react";
import { v4 as uuidv4 } from "uuid";
import classnames from "classnames";

export default function TimelineItem(props) {
  return (
    <div className={classnames("timeline-item", props.item.columns)}>
      <h5 className="item-period current">
        {props.item.from} - {props.item.to}
      </h5>
      <span className="item-company">
        <a
          rel="noreferrer"
          style={{ color: "#aaa" }}
          href={props.item.organization_url}
          target="_blank"
        >
          {props.item.organization}
        </a>
      </span>
      <h4 className="item-title">{props.item.title}</h4>
      {props.item.description ? <p>{props.item.description}</p> : null}
      <ul>
        {props.item.options.map((option) => (
          <li key={uuidv4()} dangerouslySetInnerHTML={option} />
        ))}
      </ul>
    </div>
  );
}
