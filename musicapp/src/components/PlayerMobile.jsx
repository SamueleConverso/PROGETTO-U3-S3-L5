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
        borderRadius: "10px",
        padding: "6px",
        border: "1px solid black",
      }}
    >
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
  );
}

export default PlayerMobile;
