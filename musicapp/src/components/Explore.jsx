function Explore() {
  return (
    <div className="container">
      <h2 className="text-white">Altro da esplorare</h2>
      <div className="row row-cols-lg-4">
        <div className="col">
          <div
            style={{
              backgroundColor: "#2A2A2A",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            <div className="d-flex justify-content-between w-100">
              <p className="text-danger m-0" style={{ fontSize: "20px" }}>
                Esplora per genere&nbsp;&nbsp;&nbsp;
              </p>
              <p className="text-danger m-0" style={{ fontSize: "20px" }}>
                {">"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
