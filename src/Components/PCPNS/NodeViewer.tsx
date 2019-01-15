import * as React from "react";
import ListProducts from "./ListProducts";

class NodeViewer extends React.Component<any> {
constructor(props) {
 super(props);

    }

public renderListItems(children) {

        if (!Array.isArray(children)) {
            children = [children];
        }

        return children.map((value, index) => (
                <ListProducts
                     key={index}
                     data={...value}
                     onProductClick={() => this.handleProductClick(value)}
                />
            ),
        );
      }

public renderProgress() {
        return <h2>Cargando lista de productos...</h2>;
    }

public handleProductClick(children) {
         this.props.DetailProduct(children);
    }

public render() {
        const  styleViwer = "baseViwer";

        return (<div className={!this.props.styleViwer ? styleViwer : this.props.styleViwer}>
             <h2 className="producTitle"> {this.props.selectedProduct.name}</h2>
             {
                 this.props.selectedProduct.children ? <div className="CardContainer">
             {
                 this.renderListItems(this.props.selectedProduct.children)
             }
               </div> : this.renderProgress()
             }
           </div>
        );
    }
}

export default NodeViewer;
