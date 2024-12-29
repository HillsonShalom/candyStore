import { Document, model, Schema } from "mongoose";
import { IManufacturerDocument } from "./manufacturer";
import { ICategoryDocument } from "./category";
import { IKosherTypeDocument } from "./kosherType";

export interface ICandy {
    name: string;
    manufacturerId: string | IManufacturerDocument;
    description: string;
    price: number;
    categoryIds: string[] | ICategoryDocument[];
    kosherTypeIds: string[] | IKosherTypeDocument[];
    ingredients: string[];
    nutritionFacts: {
        servingSize: string;
        calories: number;
        fat: number;
        carbs: number;
        protein: number;
    };
    inStock: number;
    averageRating: number;
    manufactureDate: Date;
    allergens: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
}

export interface ICandyDocument extends ICandy, Document {}

const candySchema = new Schema<ICandyDocument>({
    name: String,
    manufacturerId: { type: Schema.Types.ObjectId, ref: "Manufacturer" },
    description: String,
    price: Number,
    categoryIds: { type: [Schema.Types.ObjectId], ref: "Category", default: [] },
    kosherTypeIds: { type: [Schema.Types.ObjectId], ref: "KosherType", default: [] },
    ingredients: [String],
    nutritionFacts: {
        servingSize: String,
        calories: Number,
        fat: Number,
        carbs: Number,
        protein: Number
    },
    inStock: Number,
    averageRating: Number,
    manufactureDate: Date,
    allergens: [String],
    isGlutenFree: Boolean,
    isVegan: Boolean
})

const Candy = model<ICandyDocument>("Candy", candySchema);

export default Candy