import * as Icon from "react-bootstrap-icons";

function PlayerMobile() {
  return (
    <div
      className="container d-block d-lg-none"
      style={{
        backgroundColor: "#242424",
        position: "fixed",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "500px",
      }}
    >
      <Icon.MusicNoteBeamed style={{ color: "gray" }} />
    </div>
  );
}

export default PlayerMobile;
