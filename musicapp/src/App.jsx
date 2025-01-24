import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import MyNavbar from "./components/MyNavbar";
import MyNavbarLg from "./components/MyNavbarLg";
import News from "./components/News";
import Releases from "./components/Releases";
import Explore from "./components/Explore";
import MyFooter from "./components/MyFooter";
import PlayerMobile from "./components/PlayerMobile";
import PlayerDesktop from "./components/PlayerDesktop";

var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
document.body.appendChild(scrollDiv);

// Get the scrollbar width
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
console.warn(scrollbarWidth);

// Delete the div
document.body.removeChild(scrollDiv);

function App() {
  return (
    <>
      <div className="d-lg-flex">
        <div>
          <MyNavbar />
          <MyNavbarLg />
        </div>
        <div id="wrapper">
          <News />
          <Releases />
          <Explore />
          <MyFooter />
          <PlayerDesktop />
        </div>
      </div>
      <PlayerMobile id="playerMobile" />
    </>
  );
}

export default App;
