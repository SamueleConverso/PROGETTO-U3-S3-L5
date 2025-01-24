/* eslint-disable react-hooks/exhaustive-deps */
import * as Icon from "react-bootstrap-icons";
import Song from "./Song";
import { useEffect, useState } from "react";

function Releases() {
  const [songs, setSongs] = useState();
  const [songsToDisplay, setSongsToDisplay] = useState();

  const URL =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=lady%20gaga";

  //window.addEventListener("resize", updateSongs);

  function updateSongs() {
    if (songs) {
      const isScreenTooLarge = window.innerWidth >= 992;
      const slicedSongs = isScreenTooLarge
        ? songs.slice(0, 10)
        : songs.slice(0, 6);
      console.log(slicedSongs);
      setSongsToDisplay(slicedSongs);
    }
  }

  const getSongs = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSongs(data.data);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  useEffect(() => {
    console.log("sonoqui");
    updateSongs();
    window.addEventListener("resize", updateSongs);
    return () => window.removeEventListener("resize", updateSongs);
  }, [songs]);

  return (
    <div className="container">
      <div className="text-white mt-3">
        <p>
          Nuove uscite
          <Icon.ArrowRight className="ms-2" />
        </p>
      </div>

      <div className="container-fluid">
        <div className="row row-cols-3 row-cols-lg-5">
          {songsToDisplay &&
            songsToDisplay.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Releases;
