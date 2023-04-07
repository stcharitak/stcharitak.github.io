import React from "react";
import { v4 as uuidv4 } from "uuid";
import TimelineItem from "./TimelineItem";
import classnames from "classnames";

export default function Timeline(props) {
  return (
    <div className={classnames("timeline", props.columns)}>
      {props.items.map((item) => (
        <TimelineItem key={uuidv4()} item={item} />
      ))}
    </div>
  );
}
