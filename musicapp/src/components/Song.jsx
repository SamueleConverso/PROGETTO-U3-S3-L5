/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

function Song(props) {
  return (
    <>
      <Col className="mb-3">
        <img
          src={props.song.album.cover}
          style={{ borderRadius: "10px", width: "100%" }}
        />
        <div className="text-white">
          <p style={{ minHeight: "50px" }}>{props.song.title}</p>
          <p>{props.song.artist.name}</p>
        </div>
      </Col>
    </>
  );
}

export default Song;
