import { Document, Schema, Model, model, models } from "mongoose";

export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  planId?: number;
  creditBalance?: number;
  firstName?: string;
  lastName?: string;
}

interface IUserDocument extends IUser, Document {}
interface IUserModel extends Model<IUserDocument> {}

const UserSchema = new Schema<IUserDocument>({
  clerkId: {
    type: String,
    requried: true,
    unique: true,
  },
  email: {
    type: String,
    requried: true,
    unique: true,
  },
  username: {
    type: String,
    requried: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },

});

const User =
  (models?.User as IUserModel) ||
  model<IUserDocument, IUserModel>("User", UserSchema);
export default User;
