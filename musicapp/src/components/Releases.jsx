import * as Icon from "react-bootstrap-icons";
import Song from "./Song";

function Releases() {
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
          <Song />
        </div>
      </div>
    </div>
  );
}

export default Releases;
