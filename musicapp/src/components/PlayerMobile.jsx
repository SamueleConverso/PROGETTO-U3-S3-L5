import * as Icon from "react-bootstrap-icons";

function PlayerMobile() {
  return (
    <div
      className="container d-block d-lg-none mb-2"
      style={{
        backgroundColor: "#242424",
        position: "fixed",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "500px",
        borderRadius: "10px",
        padding: "6px",
        border: "2px solid black",
      }}
    >
      <div className="d-flex justify-content-between">
        <div>
          <Icon.MusicNoteBeamed
            style={{
              color: "gray",
              fontSize: "40px",
              backgroundColor: "#323232",
              padding: "6px",
              borderRadius: "6px",
            }}
          />
        </div>
        <div className="align-content-center">
          <Icon.PlayFill style={{ color: "gray", fontSize: "22px" }} />
          <Icon.FastForwardFill
            style={{ color: "gray", marginLeft: "10px", fontSize: "22px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerMobile;
