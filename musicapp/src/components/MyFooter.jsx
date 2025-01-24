function MyFooter() {
  return (
    <div
      className="container-fluid text-white mt-3"
      style={{ backgroundColor: "#323232" }}
    >
      <div className="d-flex gap-3 mb-3 pt-3">
        <p className="m-0">Italia</p>
        <p className="m-0">|</p>
        <p className="m-0">English (UK)</p>
      </div>

      <p className="m-0 mb-3">
        Copyright &copy; 2024 Apple Inc. Tutti i diritti riservati.
      </p>

      <div className="d-flex gap-1">
        <p>Condizioni dei servizi internet |</p>
        <p>Apple Music e privacy |</p>
        <p>Avviso sui cookie |</p>
        <p>Supporto |</p>
        <p>Feedback</p>
      </div>
    </div>
  );
}

export default MyFooter;
