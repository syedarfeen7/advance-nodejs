import { Schema, model, Types } from "mongoose";

export interface ISession {
  userId: Types.ObjectId;
  userAgent?: string;
  isValid: boolean;
  createdAt: Date;
}

const sessionSchema = new Schema<ISession>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    userAgent: { type: String },
    isValid: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const SessionModel = model<ISession>("Session", sessionSchema);
