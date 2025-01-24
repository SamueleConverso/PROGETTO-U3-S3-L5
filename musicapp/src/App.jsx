import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import MyNavbar from "./components/MyNavbar";
import MyNavbarLg from "./components/MyNavbarLg";
import News from "./components/News";
import Releases from "./components/Releases";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <div className="d-lg-flex">
        <div>
          <MyNavbar />
          <MyNavbarLg />
        </div>
        <div>
          <News />
          <Releases />
          <Explore />
        </div>
      </div>
    </>
  );
}

export default App;
