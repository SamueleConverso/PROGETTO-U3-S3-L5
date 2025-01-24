import * as Icon from "react-bootstrap-icons";

function PlayerDesktop() {
  return (
    <div
      className="container-fluid d-none d-lg-block"
      style={{ backgroundColor: "#2C2C2C", position: "fixed", top: "0" }}
    >
      <div className="row">
        <div className="col-4">
          <Icon.PlayFill style={{ color: "gray", fontSize: "22px" }} />
          <Icon.FastForwardFill style={{ color: "gray", fontSize: "22px" }} />
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default PlayerDesktop;
