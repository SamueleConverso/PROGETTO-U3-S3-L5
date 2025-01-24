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
              <p style={{ fontSize: "12px" }}>NUOVA STAZIONE RADIO</p>
              <p style={{ fontSize: "12px" }}>
                Rilassati, al resto pensiamo noi. <br /> Ascolta Apple Muisc
                Chill
              </p>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
