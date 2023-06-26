import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'


class CollectionsService {
  async getCollection(userId) {
    const collection = await dbContext.Collection.find({ userId })
    return collection
  }

  async addToCollection(collectionData) {
    const collection = await dbContext.Collection.create(collectionData)
    return collection
  }
}

export const collectionsService = new CollectionsService()