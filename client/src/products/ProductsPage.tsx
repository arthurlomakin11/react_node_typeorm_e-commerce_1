import { useEffect, useState } from 'react'
import './products.css'
import { Product } from '../../../data/entities/Product'
import ProductsService from './ProductsService'

function ProductsPage(){
    let [data, setData] = useState<Product[] | null>(null)

    useEffect(() => {
        ProductsService.getAllProducts().then(list => setData(list))
    }, [])

    let dataList = !data ? [] : data
    let dataListElements = dataList.map(p => 
        <div className="products__product" key={p.id}>
            <div className="products__product__name">{p.Name}</div>
            <div className="products__product__description">{p.Description}</div>
            <button className="products__product__add-to-cart-button">Додати у кошик</button>
        </div>
    )
    return (
        <section className="products">
            { !data ? "Loading" : dataListElements }
        </section>
    )
}

export default ProductsPage