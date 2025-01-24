/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

function Song(props) {
  return (
    <>
      <Col>
        <img
          src={props.song.album.cover}
          style={{ borderRadius: "10px", width: "100%" }}
        />
        <div className="text-white">
          <p>{props.song.title}</p>
          <p>{props.song.artist.name}</p>
        </div>
      </Col>
    </>
  );
}

export default Song;
