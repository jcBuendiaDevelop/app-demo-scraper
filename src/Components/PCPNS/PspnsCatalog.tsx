import * as  React from "react";
import {decorators , Treebeard} from "react-treebeard";
import * as filters from "../../Const/filter";
import Categorystyle from "../../interfaces/Categorystyle";
import data from "./../../Mocks/pcpnsCategory";
import NodeViewer from "./NodeViewer";

decorators.Header = ({style, node}) => {
    const iconType = node.children ? "folder" : "file-text";
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: "5px"};
    if (!node.children) {
            return null;
       } else {
    return (
        <div style={style.base}>
            <div style={style.title}>
                <i className={iconClass} style={iconStyle}/>

                {node.name}
            </div>
        </div>
    );
   }
};

class PspnsCatalog extends React.Component<Categorystyle, any> {

    constructor(props: Categorystyle) {
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }

    public ValidateChildren = (node) => {

        if (node.children.id) {
            this.props.selectedProduct(node);

        } else {

            const typeChil = node.children[0].id ? "false" : "";

            if (typeChil !== "false") { return false ; } else {

                this.props.selectedProduct(node);

                return true ;
            }
        }

    }

    public onToggle(node, toggled) {

        if (this.state.cursor) {this.state.cursor.active = false; }

        node.active = true;

        if (node.children) { node.toggled = toggled; }

        this.setState({ cursor: node });

        this.ValidateChildren(node);
    }

    public onFilterMouseUp(e) {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        let filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }

    public render() {
        const {data: stateData} = this.state;

        return (
            <div className={this.props.styleCategory}>
                <div className="inputSearch">
                    <span className="textSearch">
                        <i className="fa fa-search"/>
                    </span>
                    <input
                        className="formControl"
                        // tslint:disable-next-line:jsx-no-lambda
                        onKeyUp={() => this.onFilterMouseUp.bind(this)}
                        placeholder="Busqueda Rapida..."
                        type="text"
                    />
                 </div>
                    <Treebeard data={stateData} onToggle={this.onToggle}/>
             </div>

        );
    }
}

export default PspnsCatalog;
