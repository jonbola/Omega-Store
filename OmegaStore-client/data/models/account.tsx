import AccountInfo from "./account_info";
import Purchase from "./purchase";

export default class Account {
    _id: number;
    _accountName: string;
    _password: string;
    _role: boolean;
    _purchases?: Purchase[]
    _accountInfo: AccountInfo;

    constructor(
        id: number,
        accountName: string,
        password: string,
        role: boolean,
        purchases: Purchase[],
        accountInfo: AccountInfo
    ) {
        this._id = id;
        this._accountName = accountName;
        this._password = password;
        this._role = role;
        this._purchases = purchases;
        this._accountInfo = accountInfo;
    }
}