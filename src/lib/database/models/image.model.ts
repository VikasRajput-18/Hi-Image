import { Document, Schema, Model, model, models } from "mongoose";

export interface IImage {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

interface IImageDocument extends IImage, Document {}
interface IImageModel extends Model<IImageDocument> {}

const ImageSchema = new Schema<IImageDocument>({
  title: {
    type: String,
    requried: true,
  },
  transformationType: {
    type: String,
    requried: true,
  },
  publicId: {
    type: String,
    requried: true,
  },
  secureUrl: {
    type: URL,
    requried: true,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: URL,
  },
  aspectRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image =
  (models?.Image as IImageModel) ||
  model<IImageDocument, IImageModel>("Image", ImageSchema);
export default Image;
