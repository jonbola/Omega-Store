import Product from "./product";

export default class Category {
    _id: number;
    _name: string;
    _products: Product[];

    constructor(id: number, name: string, products: Product[]) {
        this._id = id;
        this._name = name;
        this._products = products;
    }

    public setName?(name: string) {
        this._name = name;
    }

    public getName?() {
        return this._name;
    }

    public setProducts?(products: Product[]) {
        this._products = products;
    }

    public getProducts?() {
        return this._products;
    }
}