import Account from "./account";
import PurchaseItem from "./purchase_item";

export default class Purchase {
    _id: number;
    _totalPurchase: number;
    _purchaseDate: Date;
    _status: boolean = false;
    _accountId: number;
    _account?: Account;
    _items: PurchaseItem[];

    constructor(
        id: number,
        totalPurchase: number,
        purchaseDate: Date,
        status: boolean,
        accountId: number,
        account: Account,
        items: PurchaseItem[]
    ) {
        this._id = id;
        this._totalPurchase = totalPurchase;
        this._purchaseDate = purchaseDate;
        this._status = status;
        this._accountId = accountId;
        this._account = account;
        this._items = items;
    }
}