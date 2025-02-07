import { ImageSourcePropType } from "react-native";

export default class Product {
    _id: number;
    _image?: ImageSourcePropType;
    _name: string;
    _category: string;
    _price: string;
    _description?: string;
    _storedQuantity?: number;

    constructor(id: number, image: ImageSourcePropType,
        name: string, category: string,
        price: string, description: string,
        storedQuantity: number) {
        this._id = id;
        this._image = image;
        this._name = name;
        this._category = category;
        this._price = price;
        this._description = description;
        this._storedQuantity = storedQuantity;
    }

    public setImage?(image: ImageSourcePropType) {
        this._image = image;
    }

    public getImage?() {
        return this._image;
    }

    public setName?(name: string) {
        this._name = name;
    }

    public getName?() {
        return this._name;
    }

    public setCategory?(category: string) {
        this._category = category;
    }

    public getCategory?() {
        return this._category;
    }

    public setPrice?(price: string) {
        this._price = price;
    }

    public getPrice?() {
        return this._price;
    }
    public setDescription?(description: string) {
        this._description = description;
    }

    public getDescription?() {
        return this._description;
    }
    public setStoredQuantity?(storedQuantity: number) {
        this._storedQuantity = storedQuantity;
    }

    public getStoredQuantity?() {
        return this._storedQuantity;
    }
}