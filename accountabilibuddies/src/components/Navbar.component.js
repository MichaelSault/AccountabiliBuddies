import React from "react";
import MenuDrawer from "./MenuDrawer.component";

function Navbar() {
    return (
    <nav className="navbar bg-dark container">
        <MenuDrawer/>
        <h4>AccountabliBuddies</h4>
    </nav>
    );
}
export default Navbar;