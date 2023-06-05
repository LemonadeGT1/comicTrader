import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ComicSchema = new Schema(
  {
    id: { type: Number, required: true },
    issueNumber: { type: Number, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    creators: {},
    dates: {},
    description: {},
    pageCount: {}

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ComicSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})