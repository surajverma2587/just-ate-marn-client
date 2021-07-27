import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Text.css";

const Text = ({ size, body, icon }) => {
  return (
    <div
      className={classNames("text-container", {
        "text--small": size === "small",
      })}
    >
      {icon && icon.length && (
        <span className="text-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span className="text-content">{body}</span>
    </div>
  );
};

export default Text;
