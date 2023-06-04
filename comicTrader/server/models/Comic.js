import strictTransportSecurity from "helmet/dist/types/middlewares/strict-transport-security/index.js"
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ComicSchema = new Schema(
  {
    id: { type: Number, required: true },
    issueNumber: { type: Number, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    author: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ComicSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})