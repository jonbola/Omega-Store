import Product from "./product";

export default class Category {
    _id: number;
    _name: string;
    _description?: string;
    _products?: Product[];

    constructor(
        id: number,
        name: string,
        description: string,
        products: Product[]
    ) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._products = products;
    }
}