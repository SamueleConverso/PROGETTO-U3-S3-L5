import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

function PlayerDesktop() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    // Calcola la larghezza della scrollbar
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;
    console.log(scrollWidth);
    setScrollbarWidth(scrollWidth);
  }, []);

  return (
    <div
      className="container-fluid d-none d-lg-block"
      style={{
        backgroundColor: "#2C2C2C",
        position: "fixed",
        top: "0",
        padding: "4px",
        width: `calc(100vw - ${200 + scrollbarWidth}px)`,
      }}
    >
      <div className="row">
        <div className="col-4 d-flex justify-content-center gap-2">
          <Icon.Shuffle
            className="align-self-center"
            style={{ color: "gray", fontSize: "12px" }}
          />
          <Icon.SkipBackwardFill
            className="align-self-center"
            style={{ color: "gray", fontSize: "22px" }}
          />
          <Icon.PlayFill
            className="align-self-center"
            style={{ color: "gray", fontSize: "22px" }}
          />
          <Icon.FastForwardFill
            className="align-self-center"
            style={{ color: "gray", fontSize: "22px" }}
          />
          <Icon.Repeat
            className="align-self-center"
            style={{ color: "gray", fontSize: "12px" }}
          />
        </div>
        <div
          className="col-4 d-flex justify-content-center"
          style={{ backgroundColor: "#4D4D4D" }}
        >
          <img src="../../public/assets/img/apple.svg" />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <input type="range" />
        </div>
      </div>
    </div>
  );
}

export default PlayerDesktop;
