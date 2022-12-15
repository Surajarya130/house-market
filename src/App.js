import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TestAxios from "./pages/TestAxios";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TestAxios />} />
          {/* <Route path="/" element={<Explore />} /> */}
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>

        {/* <Navbar /> */}
      </Router>
    </>
  );
}

export default App;
