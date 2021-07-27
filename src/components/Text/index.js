import classNames from "classnames";

import "./Text.css";

const Text = ({ size, body, icon }) => {
  return (
    <div
      className={classNames("text-container", {
        "text--small": size === "small",
      })}
    >
      {icon && <span className="text-icon">{icon}</span>}
      <span className="text-content">{body}</span>
    </div>
  );
};

export default Text;
