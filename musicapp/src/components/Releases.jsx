import * as Icon from "react-bootstrap-icons";
import Song from "./Song";
import { useEffect, useState } from "react";

function Releases() {
  const [songs, setSongs] = useState();

  const URL =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=lady%20gaga";

  window.addEventListener("resize", updateSongs);

  function updateSongs() {
    if (songs) {
      const isScreenTooLarge = window.innerWidth >= 992;
      console.log(isScreenTooLarge);
    }
  }

  const getSongs = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSongs(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="container">
      <div className="text-white mt-3">
        <p>
          Nuove uscite
          <Icon.ArrowRight className="ms-2" />
        </p>
      </div>

      <div className="container-fluid">
        <div className="row">
          {songs &&
            songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Releases;
