import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import MyNavbar from "./components/MyNavbar";
import MyNavbarLg from "./components/MyNavbarLg";
import News from "./components/News";

function App() {
  return (
    <>
      <div className="d-flex">
        <div>
          <MyNavbar />
          <MyNavbarLg />
        </div>
        <div>
          <News />
        </div>
      </div>
    </>
  );
}

export default App;
