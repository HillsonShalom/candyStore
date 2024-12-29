import { Document, model, Schema } from "mongoose";

export interface IManufacturer {
    name: string;
    country: string;
    logo: string;
    contact: {
        email: string;
        phone: string;
    };
    established: number;
}

export interface IManufacturerDocument extends IManufacturer, Document {}

const manufacturerSchema = new Schema<IManufacturerDocument>({
    name: String,
    country: String,
    logo: String,
    contact: {
        email: String,
        phone: String
    },
    established: Number
})

const Manufacture = model<IManufacturerDocument>("Manufacturer", manufacturerSchema);

export default Manufacture