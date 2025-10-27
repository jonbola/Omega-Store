import Product from "./product";
import Purchase from "./purchase";

export default class PurchaseItem {
    _id: number;
    _quantity: number;
    _purchaseId: number;
    _purchase?: Purchase;
    _productId: number;
    _product?: Product;

    constructor(
        id: number,
        quantity: number,
        purchaseId: number,
        purchase: Purchase,
        productId: number,
        product: Product
    ) {
        this._id = id;
        this._quantity = quantity;
        this._purchaseId = purchaseId;
        this._purchase = purchase;
        this._productId = productId;
        this._product = product;
    }
}