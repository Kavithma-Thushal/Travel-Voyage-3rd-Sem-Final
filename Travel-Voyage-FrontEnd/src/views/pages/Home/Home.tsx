import {useState, useEffect} from 'react';
import {Product} from "../../components/Product/Product";

export function Home() {

    const [data, setData] = useState<any[]>([]);    // manage state

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('./product-data.json');  // handle side effects
                let jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Fetching Data Error : ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <div className="flex flex-wrap">
                {data.map((product: any) => (
                    <Product key={product.id} data={product}/>
                ))}
            </div>
        </div>
    );
}