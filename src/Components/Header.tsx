import * as React from "react";
import {ABCPROVEEDOR, ADDPRODUCT, CONSULTPRODUCT, LOGO_USER, SOLICITUDMUESTRA} from "../Const/Constants";
import headerInterface from "../interfaces/headerInterface";
import ButtonsNav from "./buttonsNav";
import LogoTronico from "./logoTronico";
import UserProfile from "./UserProfile";

const labels = [ADDPRODUCT, ABCPROVEEDOR, SOLICITUDMUESTRA, CONSULTPRODUCT];

class Header extends React.Component<headerInterface, any > {

    constructor(props: headerInterface) {
        super(props);

        this.state = {
            sideNav: "mySidenav",
        };
    }

    public closeNav = () => {
        this.setState ({
            sideNav: "mySidenavClose",
        });
        this.props.onCategoryStyle();
    }

    public openNav = () => {
        this.setState ({
            sideNav: "mySidenav",
        });
        this.props.onCategoryStyle();
    }


    public render() {
        return (
            <div>
            <header>
            <UserProfile urlImage={LOGO_USER} nameUser={`Usuario 1`} />
            <h2 className="login-form-title">{this.props.rol}</h2>
            <span className="spanOpen" onClick={this.openNav}>&#9776;</span>
            </header>
            </div>
        );
    }
}

export default Header;
