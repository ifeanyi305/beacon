import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slot from "./pages/Slot";
import LiveCasino from "./pages/LiveCasino";
import { useState } from "react";
import Vip from "./pages/Vip";
import Lottery from "./pages/Lottery";
import Affiliate from "./pages/Affiliate";
import Tickets from "./pages/Tickets";
import History from "./pages//History";
import FooterPage from "./pages/FooterPage";
import Recommend from "./pages/Recommend";
import CrashPoint from "./pages/CrashPoint";
import BetHistory from "./pages/BetHistory";
import Promotion from "./pages/Promotion";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BCD from "./pages/BCD";
import TaskHup from "./pages/TaskHub";
import Crash from "./pages/Crash";
import ShitCode from "./pages/ShitCode";
import TaskHub from "./pages/TaskHub";
import Popup from "./pages/Popup";
import Support1 from "./pages/Support1";
import Support2 from "./pages/Support2";
import Support3 from "./pages/Support3";
import Support from "./pages/Support";
import Data from "./Data.json";
import ChatBox from "./pages/ChatBox";
import UsersNotification from "./pages/UsersNotification";
import Testing from "./pages/Testing";

// import Data from "./Data"

function App() {
  const [destopView, setDestopView] = useState("BetArena-destop");

  function getStyle(data) {
    setDestopView(data);
  }

  return (
    <div className="App">
      <div className="bet-arena-full-display">
        <Navbar
          style={getStyle}
          placeholder="Game name | Provider | Category Tag"
          Data={Data}
        />
        <div className={destopView}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/slots" element={<Slot />}></Route>
            <Route path="/crash" element={<Crash />}></Route>
            <Route path="/affiliate" element={<Affiliate />}></Route>
            <Route path="/promotion" element={<Promotion />}></Route>
            <Route path="/BCD" element={<BCD />}></Route>
            <Route path="/TaskHup" element={<TaskHup />}></Route>
            <Route path="/lottery" element={<Lottery />}>
              <Route index element={<Tickets />} />
              <Route path="tickets" element={<Tickets />} />
              <Route path="history" element={<History />} />
            </Route>

            <Route path="BetHistory" element={<BetHistory />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/FooterPage" element={<FooterPage />}></Route>
            <Route path="Recommend" element={<Recommend />}></Route>
            <Route path="CrashPoint" element={<CrashPoint />}></Route>

            <Route path="/slots" element={<Slot />}></Route>
            <Route path="/Support" element={<Support />}></Route>
            <Route path="/Support1" element={<Support1 />}></Route>
            <Route path="/Support2" element={<Support2 />}></Route>
            <Route path="/Support3" element={<Support3 />}></Route>
            <Route path="/Popup" element={<Popup />}></Route>
            <Route path="/live-casino" element={<LiveCasino />}></Route>
            <Route path="/vip" element={<Vip />}></Route>
            <Route path="/ChatBox" element={<ChatBox />}></Route>
            <Route
              path="UsersNotification"
              element={<UsersNotification />}
            ></Route>

            <Route path="/ShitCode" element={<ShitCode />}></Route>
            <Route path="/TaskHub" element={<TaskHub />}></Route>
            <Route path="/Testing" element={<Testing />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
