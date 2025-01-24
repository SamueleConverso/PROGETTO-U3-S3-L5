import * as Icon from "react-bootstrap-icons";

function PlayerDesktop() {
  return (
    <div
      className="container-fluid d-none d-lg-block"
      style={{
        backgroundColor: "#2C2C2C",
        position: "fixed",
        top: "0",
        padding: "4px",
        width: "calc(100vw - 200px)",
      }}
    >
      <div className="row">
        <div className="col-4 d-flex justify-content-center gap-2">
          <Icon.Shuffle
            className="align-self-center"
            style={{ color: "gray", fontSize: "12px" }}
          />
          <Icon.SkipBackwardFill style={{ color: "gray", fontSize: "22px" }} />
          <Icon.PlayFill style={{ color: "gray", fontSize: "22px" }} />
          <Icon.FastForwardFill style={{ color: "gray", fontSize: "22px" }} />
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
          <input />
        </div>
      </div>
    </div>
  );
}

export default PlayerDesktop;
