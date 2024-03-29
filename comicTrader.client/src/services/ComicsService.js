import { Comic } from "../models/Comic.js"
import { marvelApi } from './AxiosService'
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { collectionsService } from "./CollectionsService.js"

class ComicsService {
  async getComics() {
    try {
      const res = await marvelApi.get(`/comics?orderBy=-modified&limit=${AppState.limit}`)
      AppState.offset = 0
      logger.log(res.data)
      AppState.comics = res.data.data.results.map(c => new Comic(c))
      AppState.comicTotal = res.data.data.total
      logger.log(AppState.comics)
    } catch (err) {
      logger.error('Something went wrong retrieving comics', err)
    }
  }
  async changePage(num) {
    logger.log('ComicsService changePage', num)
    AppState.offset += num
    if (AppState.offset < 0) { AppState.offset = 0 }
    try {
      const res = await marvelApi.get(`/comics?orderBy=-modified&offset=${AppState.offset}&limit=${AppState.limit}`)
      logger.log(res.data)
      AppState.comics = res.data.data.results.map(c => new Comic(c))
      logger.log(AppState.comics)
    } catch (err) {
      logger.error('Something went wrong retrieving comics', err)
    }
  }

  async addToCollection(comic) {
    const collection = await collectionsService.addToCollection(comic)
    return collection
  }
}

export const comicsService = new ComicsService()