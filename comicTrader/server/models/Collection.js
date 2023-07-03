import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CollectionSchema = new Schema(
  {
    userId: { type: String, required: true },
    id: { type: Number, required: true },
    issueNumber: { type: Number, required: true },
    title: { type: String, required: true },
    thumbnail: { type: Object, required: true },
    creators: {},
    dates: {},
    description: {},
    pageCount: {},
    forTrade: { type: Boolean, default: false }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

CollectionSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})