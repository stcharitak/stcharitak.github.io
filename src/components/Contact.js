import React from "react";
import BlockTitle from "./BlockTitle";
import Clearfix from "./Clearfix";
import InfoBlock from "./InfoBlock";
import SubTitleBlock from "./SubTitleBlock";

export default function Contact() {
  return (
    <div
      id="contact"
      className="page-title"
      style={{ padding: "15px 70px", marginBottom: 0 }}
    >
      <BlockTitle title="Contact" />
      <SubTitleBlock subtitle="Get in Touch" />

      <Clearfix />

      <div className="row">
        <InfoBlock
          columns="col-4"
          icon="linecons-phone"
          text="+49 177 7057164"
        />
        <InfoBlock
          columns="col-4"
          icon="linecons-mail"
          text="st.charitak[at]gmail.com"
        />
        <InfoBlock
          columns="col-4"
          icon="linecons-location"
          text="10999, Berlin"
        />
      </div>
    </div>
  );
}
