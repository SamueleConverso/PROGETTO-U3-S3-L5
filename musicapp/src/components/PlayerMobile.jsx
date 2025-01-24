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
