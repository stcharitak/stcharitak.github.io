import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function SkillList(props) {
  return (
    <div className="skills-info skills-first-style">
      {props.items.map((item) => {
        return (
          <div key={uuidv4()} className="clearfix">
            <h4>{item}</h4>{" "}
          </div>
        );
      })}
    </div>
  );
}
