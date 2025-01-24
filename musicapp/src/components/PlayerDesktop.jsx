import * as Icon from "react-bootstrap-icons";

function PlayerDesktop() {
  return (
    <div
      className="container-fluid d-none d-lg-block"
      style={{ backgroundColor: "#2C2C2C", position: "fixed", top: "0" }}
    >
      <div className="row">
        <div className="col-4 d-flex gap-2">
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
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default PlayerDesktop;
