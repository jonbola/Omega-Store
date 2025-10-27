import { ImageSourcePropType } from "react-native";
import Account from "./account";

export default class AccountInfo {
    _id: number;
    _firstName?: string;
    _lastName?: string;
    _avatarImage?: ImageSourcePropType;
    _email: string;
    _phoneNumber?: string;
    _gender?: string;
    _nation?: string;
    _birthDate?: string;
    _accountId: number;
    _account?: Account;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        avatarImage: ImageSourcePropType,
        email: string,
        phoneNumber: string,
        gender: string,
        nation: string,
        birthDate: string,
        accountId: number,
        account: Account
    ) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._avatarImage = avatarImage;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._gender = gender;
        this._nation = nation;
        this._birthDate = birthDate;
        this._accountId = accountId;
        this._account = account;
    }
}