import { Document, model, Schema } from "mongoose";
import { ICandyDocument } from "./candy";
import { IUserDocument } from "./user";

export interface IReview {
    candyId: string | ICandyDocument;
    userId: string | IUserDocument;
    rating: number;
    content: string;
    date: Date;
    likes: number;
}

export interface IReviewDocument extends IReview, Document {}

const reviewSchema = new Schema<IReviewDocument>({
    candyId: { type: Schema.Types.ObjectId, ref: "Candy" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    rating: Number,
    content: String,
    date: Date,
    likes: Number
})

const Review = model<IReviewDocument>("Review", reviewSchema);

export default Review