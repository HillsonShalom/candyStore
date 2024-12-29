import { Document, model, Schema } from "mongoose";

export interface IKosherType {
    name: string;
    symbol: string;
    description: string;
}

export interface IKosherTypeDocument extends IKosherType, Document {}

const kosherTypeSchema = new Schema<IKosherTypeDocument>({
    name: String,
    symbol: String,
    description: String
})

const KosherType = model<IKosherTypeDocument>("KosherType", kosherTypeSchema);

export default KosherType