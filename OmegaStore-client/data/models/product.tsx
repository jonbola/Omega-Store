import { ImageSourcePropType } from "react-native";
import Category from "./category";
import Manufacturer from "./manufacturer";

export default class Product {
    _id: number;
    _name: string;
    _price: number;
    _image?: string;
    _description?: string;
    _stock?: number;
    _warrantyPeriod?: number;
    _createdDate: string;
    _sale: number = 0;
    _categoryId: number;
    _category?: Category;
    _manufacturerId: number;
    _manufacturer?: Manufacturer

    constructor(
        id: number,
        name: string,
        price: number,
        image: string,
        description: string,
        stock: number,
        warrantyPeriod: number,
        createdDate: string,
        sale: number,
        categoryId: number,
        category: Category,
        manufacturerId: number,
        manufacturer: Manufacturer
    ) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._image = image;
        this._description = description;
        this._stock = stock;
        this._warrantyPeriod = warrantyPeriod;
        this._createdDate = createdDate;
        this._sale = sale;
        this._categoryId = categoryId;
        this._category = category;
        this._manufacturerId = manufacturerId;
        this._manufacturer = manufacturer;
    }
}