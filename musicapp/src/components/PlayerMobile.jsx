import * as Icon from "react-bootstrap-icons";

function PlayerMobile() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#242424",
        position: "fixed",
        bottom: "0",
      }}
    >
      <Icon.MusicNoteBeamed style={{ color: "gray" }} />
    </div>
  );
}

export default PlayerMobile;
