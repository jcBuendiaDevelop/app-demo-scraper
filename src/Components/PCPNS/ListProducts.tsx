import * as React from "react";

class ListProducts extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public TeamMemberCard = (data) => {
           return <div className="cardProduct">
                     <div className="cardHeader">
                        <img className="impProduct" src={data.imagen} />
                          <div>
                              <h1 className="headerName" >{data.tienda}</h1>
                              <h2>{data.nombre}</h2>
                              <h3>{data.precio}</h3>
                          </div>
                      </div>
                  </div>;
             }

    public render() {

        return (
            <div onClick={this.props.onProductClick}>
                    {this.TeamMemberCard(this.props.data)}
            </div>
        );
    }
}

export default ListProducts;
