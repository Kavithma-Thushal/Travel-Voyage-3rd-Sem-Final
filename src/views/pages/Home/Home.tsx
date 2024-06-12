import {Component} from "react";
import {Product} from "../../components/Product/Product";

export class Home extends Component {

    constructor(props: {}) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            let response = await fetch('./product-data.json');
            let jsonData = await response.json();
            this.setState({data: jsonData});
        } catch (error) {
            console.error('Fetching Data Error : ', error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div className="flex">
                <div className="flex flex-wrap">
                    {data.map((product: any) => (<Product key={product.id} data={product}/>))}
                </div>
            </div>
        );
    }
}