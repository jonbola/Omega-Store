import { ImageSourcePropType } from "react-native";

export default class Customer {
    _id: number;
    _accountName: string;
    _password: string;
    _avatarImage?: ImageSourcePropType;
    _firstName?: string;
    _lastName?: string;
    _email: string;
    _phoneNumber?: string;
    _gender?: string;
    _nation?: string;

    constructor(id: number, accountName: string,
        password: string, avatarImage: ImageSourcePropType,
        firstName: string, lastName: string,
        email: string, phoneNumber: string,
        gender: string, nation: string) {
        this._id = id;
        this._accountName = accountName;
        this._password = password;
        this._avatarImage = avatarImage;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._gender = gender;
        this._nation = nation;
    }

    public getFullName?(): string {
        return `${this._firstName ?? ""} ${this._lastName ?? ""}`.trim() || "";
    }

    public getAccountName?() {
        return this._accountName;
    }

    public getPassword?() {
        return this._password;
    }

    public setAvatarImage?(avatarImage: ImageSourcePropType) {
        this._avatarImage = avatarImage;
    }

    public getAvatarImage?() {
        return this._avatarImage;
    }

    public setFirstName?(firstName: string) {
        this._firstName = firstName;
    }

    public getFirstName?() {
        return this._firstName;
    }

    public setLastName?(lastName: string) {
        this._lastName = lastName;
    }

    public getLastName?() {
        return this._lastName;
    }

    public setEmail?(email: string) {
        this._email = email;
    }

    public getEmail?() {
        return this._email;
    }

    public setPhoneNumber?(phoneNumber: string) {
        this._phoneNumber = phoneNumber
    }

    public getPhoneNumber?() {
        return this._phoneNumber;
    }

    public setGender?(gender: string) {
        this._gender = gender;
    }

    public getGender?() {
        return this._gender;
    }

    public setNation?(nation: string) {
        this._nation = nation;
    }

    public getNation?() {
        return this._nation;
    }
}