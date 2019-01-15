import * as React from "react";

class CarouseelPcpn extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public renderImage  = (imgs) => {
        const type = imgs.type;

        return  imgs.imgs.map ((data , index)  => (
        <img key={index} src={data.img} alt={type} style={{display: "block", width: "50%"}} />
            ),
          );
        }
    public render() {
        return (this.renderImage(this.props.imgs));
    }
}

export default CarouseelPcpn;
