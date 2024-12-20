import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventIntro from "./component/EventIntro";
import RegistrationForm from "./component/RegistrationForm";
import Home from "./Page/Home";
import QRCode from "./component/QRCode";
import QRCodeScanner from "./component/QRcodeScanner";
import QR from "./component/QR";
import UserProfile from "./component/profile";


export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/qrcode" element={<QR/>} />
          <Route path="/profile" element={<UserProfile />} />
          
        </Routes>
      </div>
    </Router>
  );
}
