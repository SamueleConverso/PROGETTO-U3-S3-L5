import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import MyNavbar from "./components/MyNavbar";
import MyNavbarLg from "./components/MyNavbarLg";

function App() {
  return (
    <>
      <MyNavbar />
      <MyNavbarLg />
    </>
  );
}

export default App;
