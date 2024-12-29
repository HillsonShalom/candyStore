import { Document, model, Schema } from "mongoose";
import { ICandyDocument } from "./candy";

export interface IUser {
    username: string;
    email: string;
    password: string;
    favoriteIds: string[] | ICandyDocument[];
    role: "USER" | "ADMIN";
}

export interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUserDocument>({
    username: String,
    email: String,
    password: String,
    favoriteIds: { type: [Schema.Types.ObjectId], ref: "Candy", default: [] },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }
})

const User = model<IUserDocument>("User", userSchema);

export default User