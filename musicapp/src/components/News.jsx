function News() {
  return (
    <div>
      <div className="container mt-3">
        <div>
          <p className="h1 text-white">Novità</p>
          <hr className="text-white" />
        </div>

        <div className="container-fluid text-white">
          <div className="row">
            <div className="col-6">
              <p style={{ fontSize: "10px" }}>NUOVA STAZIONE RADIO</p>
              <p style={{ fontSize: "12px" }}>
                Rilassati, al resto pensiamo noi. <br /> Ascolta Apple Muisc
                Chill
              </p>
              <img
                src="../../public/assets/img/1a.png"
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="col-6">
              <p style={{ fontSize: "10px" }}>NUOVA STAZIONE RADIO</p>
              <p style={{ fontSize: "12px" }}>
                Ecco la nuova casa della musica latina
                <br />
                &nbsp;
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
    </div>
  );
}

export default News;
