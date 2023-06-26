import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ComicSchema } from "../models/Comic.js";
import { CollectionSchema } from "../models/Collection.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Comic = mongoose.model('Comic', ComicSchema);
  Collection = mongoose.model('Collection', CollectionSchema);
}

export const dbContext = new DbContext()
