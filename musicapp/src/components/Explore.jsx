function Explore() {
  return (
    <div className="container">
      <h2 className="text-white">Altro da esplorare</h2>
      <div
        style={{
          backgroundColor: "#2A2A2A",
          width: "fit-content",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div className="d-flex">
          <p className="text-danger m-0">
            Esplora per genere&nbsp;&nbsp;&nbsp;
          </p>
          <p className="text-danger m-0">{">"}</p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
