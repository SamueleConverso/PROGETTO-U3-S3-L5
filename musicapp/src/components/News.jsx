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
            <div>
              <div className="row">
                <div className="col">
                  <img
                    src="../../public/assets/img/2a.png"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Pròlogo con Abuelo</p>
                    <Icon.ExplicitFill className=" align-self-center" />
                  </div>
                </div>
                <div className="col">
                  <img
                    src="../../public/assets/img/2b.png"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="d-flex justify-content-between">
                    <p className="m-0">The Wanderer</p>
                  </div>
                </div>
                <div className="col">
                  <img
                    src="../../public/assets/img/2c.png"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Michael Bublé & Carly Pearce</p>
                  </div>
                </div>
                <div className="col d-none d-lg-block">
                  <img
                    src="../../public/assets/img/2d.png"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="d-flex justify-content-between">
                    <p className="m-0">
                      Stefan Moccio: The Zane Lowe Interview
                    </p>
                  </div>
                </div>
                <div className="col d-none d-lg-block">
                  <img
                    src="../../public/assets/img/2e.png"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Chart Spotlight: Julia Michaels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
