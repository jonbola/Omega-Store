import Product from "./product";

export default class Cart {
    _id: number;
    _products: Product[];
    _productQuantities: number[];
    _totalCost: number;
    _customerID: number;

    constructor(id: number, products: Product[],
        productQuantites: number[], totalCost: number,
        customerID: number) {
        this._id = id;
        this._products = products;
        this._productQuantities = productQuantites;
        this._totalCost = totalCost;
        this._customerID = customerID;
    }

    public setProducts?(products: Product[]) {
        this._products = products;
    }

    public getProducts?() {
        return this._products;
    }
    public setProductQuantites?(productQuantites: number[]) {
        this._productQuantities = productQuantites;
    }

    public getProductQuantites?() {
        return this._productQuantities;
    }
    public setTotalCost?() {
    }

    public getTotalCost?() {
        return this._totalCost;
    }
    public setCustomerID?(customerID: number) {
        this._customerID = customerID;
    }

    public getCustomerID?() {
        return this._customerID;
    }
}