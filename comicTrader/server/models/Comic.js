import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ComicSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 1, maxLength: 256 },
    author: { type: String, required: true, minLength: 2, maxLength: 256 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ComicSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})