import Product from "./product";

export default class Manufacturer {
    _id: number;
    _name: string;
    _address?: string;
    _products?: Product[];

    constructor(
        id: number,
        name: string,
        address: string,
        products: Product[]
    ) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._products = products;
    }
}