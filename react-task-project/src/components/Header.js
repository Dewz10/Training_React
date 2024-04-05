import "./Header.css";
import { CiCloudSun } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa6";

export default function Header(props) {
    const {theme, setTheme} = props;
    function ToggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span className="icon" onClick={ToggleTheme}>{theme === "light" ? <CiCloudSun/> : <FaCloudMoon/>}</span>
            </div>
        </header>
    );
}