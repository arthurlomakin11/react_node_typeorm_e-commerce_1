import { Product } from '../../../data/entities/Product';
class ProductsService
{
    static async getAllProducts()
    {
        return await fetch("/api/products").then(res => res.json()) as Product[]
    }
}

export default ProductsService