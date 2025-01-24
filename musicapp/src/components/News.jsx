import * as Icon from "react-bootstrap-icons";

function News() {
  return (
    <>
      <div className="container mt-3">
        <div>
          <div>
            <p className="h1 text-white">Novità</p>
            <hr className="text-white" />
          </div>

          <div className="container-fluid text-white">
            <div className="row">
              <div className="col-6">
                <p style={{ fontSize: "10px" }}>NUOVA STAZIONE RADIO</p>
                <p style={{ fontSize: "12px", minHeight: "44px" }}>
                  Rilassati, al resto pensiamo noi. Ascolta Apple Muisc Chill
                </p>
                <img
                  src="../../public/assets/img/1a.png"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6">
                <p style={{ fontSize: "10px" }}>NUOVA STAZIONE RADIO</p>
                <p style={{ fontSize: "12px", minHeight: "44px" }}>
                  Ecco la nuova casa della musica latina
                </p>
                <img
                  src="../../public/assets/img/1b.png"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white mt-3">
          <div>
            <p>
              Nuovi episodi radio
              <Icon.ArrowRight className="ms-2" />
            </p>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4"></div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
