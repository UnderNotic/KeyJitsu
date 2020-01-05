import React from "react";
import styles from "./footer.module.scss";

export default function() {
  return (
    <div className={`${styles["footer"]} text-muted`}>
      <div>
        Check out on
        <a
          href="https://github.com/UnderNotic/KeyJitsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          github
        </a>
      </div>
      <div>
        Created by undernotic@
        <a
          href="https://deaddesk.top"
          target="_blank"
          rel="noopener noreferrer"
        >
          deaddesk.top
        </a>
      </div>
    </div>
  );
}
