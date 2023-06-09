import { Collection } from "../models/Collection.js"
import { Comic } from "../models/Comic.js"
import { api } from './AxiosService'
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"

class CollectionsService {
  async getCollection() {
    try {
      const res = await api.get(`api/collection/${AppState.account.id}`)
      AppState.offset = 0
      // logger.log('CollectionsService getCollection', res.data)
      AppState.collection = res.data.map(c => new Comic(c))
      AppState.collection = AppState.collection.sort((a, b) => {
        const nameA = a.title.toUpperCase()
        const nameB = b.title.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
      logger.log(AppState.collection)
    } catch (err) {
      logger.error('Something went wrong retrieving collections', err)
    }
  }

  async addToCollection(comic) {
    try {
      const collection = comic
      collection.userId = AppState.account.id
      logger.log('CollectionsService addToCollection')
      const res = await api.post('api/collection/', collection)
      logger.log('CollectionsService addToCollection res.data', res.data)
      return res
    } catch (error) {
      logger.error('Something went wrong adding this comic to your collection', error)
    }
  }

  async changePage(num) {
    logger.log('CollectionsService changePage', num)
    AppState.offset += num
    if (AppState.offset < 0) { AppState.offset = 0 }
    try {
      const res = await api.get(`/collections?offset=${AppState.offset}&limit=${AppState.limit}`)
      logger.log(res.data)
      AppState.collections = res.data.data.results.map(c => new Collection(c))
      logger.log(AppState.collections)
    } catch (err) {
      logger.error('Something went wrong retrieving collections', err)
    }
  }

  async addToForTrade(comic) {
    logger.log('ComicsService addToForTrade ', comic)
  }

  async removeFromForTrade(comic) {
    logger.log('ComicsService removeFromForTrade ', comic)
  }
}

export const collectionsService = new CollectionsService()