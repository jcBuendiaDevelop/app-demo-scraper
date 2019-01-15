import * as React from "react";
import Props from "../interfaces/Userinterface";

class UserProfile extends React.Component<Props , {} > {
    public render() {
        const { urlImage } = this.props;
        const { nameUser } = this.props;
        return (
            <div className="UserProfile">
                <div className="User">
                    <div className="name">{nameUser}</div>
                     <div className="image">
                         <img src={urlImage} alt="UserImage"/>
                     </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
