import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Game from "./pages/game";
import Leaderboard from "./pages/leaderboard";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={"/"} />
                <Route element={<Login />} path={"/login"} />
                <Route element={<SignUp />} path={"/signup"} />
                <Route element={<Game />} path={"/game"} />
                <Route element={<Leaderboard />} path={"/leaderboard"} />
            </Routes>
        </BrowserRouter>
    );
}