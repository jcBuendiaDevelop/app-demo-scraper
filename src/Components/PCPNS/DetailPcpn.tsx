import * as  React from "react";
import datos from "../../Mocks/pcpnDetail";
import CarouseelPcpn from "./carouseelPcpn";

class DetailPcpn extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {detailData: datos };
     }

    public componentDidMount() {
        this.setState({
            detailData: datos,
        });
    //     this.updateData(this.props.idProduct)
      }

    //  componentWillReceiveProps(nextProps) {
    //      if(nextProps.idProduct !== this.props.idProduct){
    //        this.setState({
    //         detailData: null
    //        })
    //          this.updateData(nextProps.idProduct)
    //      }

    //  }

    public renderProgress() {
        return <h2>cargando el producto....</h2>;

    }

    //  updateData = (idProduct) => {

    //    const url = `http://192.168.14.254:4567/pcpn/findById?id=${idProduct}`
    //    console.log(url);
    //    fetch(url).then(response => (response.json())
    //      ).then(data => {
    //          console.log(data);
    //          const detailData = data
    //          this.setState({
    //             detailData: detailData
    //          })
    //      })
    //  }

    public render() {

         const  detailViwer =  !this.props.detailViwer ? "StyleDetail"  : this.props.detailViwer ;

         const detailData  = this.state.detailData;

         const {idProduct} = this.props;

         return (
         <div className={detailViwer}>
            <CarouseelPcpn imgs={detailData} idProduct={idProduct} />
        </div>
        );
    }
}

export default DetailPcpn;
