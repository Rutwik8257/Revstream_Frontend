import React from "react";
import Style from "./Background.module.css";

const Background = ({ data, heading_data }) => {
  return (
    <section className={Style.outerPart}>
      <article className={Style.innerPart}>
        <div className="address-header">
          <h2>{heading_data}</h2>
        </div>
        <aside className={Style.smallPart}>
          <div className={Style.data}>{data()}</div>
        </aside>
      </article>
    </section>
  );
};

export default Background;
