import { Document, model, Schema } from "mongoose";

export interface ICategory {
    name: string;
    description: string
    icon: string;
}

export interface ICategoryDocument extends ICategory, Document {}

const categorySchema = new Schema<ICategoryDocument>({
    name: String,
    description: String,
    icon: String
})

const Category = model<ICategoryDocument>("Category", categorySchema);

export default Category