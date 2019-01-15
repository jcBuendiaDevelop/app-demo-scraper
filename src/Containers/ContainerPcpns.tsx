import * as React from "react";
import * as JsonTable from 'ts-react-json-table';
import ComHeader from "../Components/Header";
import ListProducts from "../Components/PCPNS/ListProducts";

import "../scss/main.scss";
import { string } from "prop-types";

class ContainerPcpn extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
                styleCategory: "CategoryPcpn", selectedProduct: {
                styleViwer: "baseViwer" ,
                name: "Select A Node To See Itxs Data Structure Here...",
                children: [],
        },
                idProduct:  null,
                search: "",
                ListaProductos: [],
                cargando: false

        };
        }


    public handleStyleCategory() {
        if (this.state.styleCategory === "CategoryPcpnClose") {
              this.setState({ styleCategory: "CategoryPcpn",  styleViwer: "baseViwer",
             });
            } else {
            this.setState({
            styleCategory: "CategoryPcpnClose",
            styleViwer: "baseViwerClose",
            detailViwer: "StyleDetail",
            });
            }
    }
    public handleSelectProduct = (listProduct)  => {
        this.setState({
        selectedProduct: listProduct,
        });
        }

    public handleDetailProduct =  (idProduct) =>  {
        this.setState ({ idProduct});
        }
    
    public handleForm = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
            console.log(this.state.search);
        };

        
public renderProgress() {
    return <h2>Cargando lista de productos...</h2>;
}
        
    public handleClick = async ()  =>{
            let ListaProductos = [];
            this.setState({cargando : true})
              await   fetch(`http://localhost:3002/api/mercado/${this.state.search}`)
               .then(function(response) {
                 return response.json();
               })
               .then(function(myJson) {
                 ListaProductos.push(myJson.MercadoLibre)
               });

               await fetch(`http://localhost:3002/api/best/${this.state.search}`)
               .then(function(response) {
                 return response.json();
               })
               .then(function(myJson) {
                 ListaProductos.push(myJson.bestBuy)
               });

               await fetch(`http://localhost:3002/api/elektra/${this.state.search}`)
               .then(function(response) {
                 return response.json();
               })
               .then(function(myJson) {
                 ListaProductos.push(myJson.Elektra)
               });

               await console.log(ListaProductos);
               await this.setState({
                ListaProductos,
                cargando: false
               })
     
    } 
    public renderListItems(children) {

        if (!Array.isArray(children)) {
            children = [children];
        }

        return children.map((value, index) => (
                <ListProducts
                     key={index}
                     data={...value}
                />
            ),
        );
      }
        
    public  render() {
        const {search, ListaProductos, cargando} = this.state;
  
        return (
    <div>
         <div>
                <ComHeader rol={`PCPN's`} killsession={false} onCategoryStyle={this.handleStyleCategory} />
        </div>
        <div>
            <input type="search" 
                   id="mySearch" 
                   placeholder="Buscar Producto.." 
                   style={{ padding: "10px"}}
                   name="search"
                   onChange={event => this.handleForm(event)}
                   value={search}>
            </input>
                <button style={{color: 'red', marginTop: 10, padding: 10}} onClick={this.handleClick} >Buscar</button>
        </div> {
                !cargando && 
            <div className="CardContainer">
             {
                 this.renderListItems(ListaProductos)
             }
               </div> || this.renderProgress()
             }
    </div>
        );
    }
}

export default ContainerPcpn;
