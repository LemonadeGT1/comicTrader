import { Comic } from "../models/Comic.js"
import { marvelApi } from './AxiosService'
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"

class ComicsService {
  async getComics() {
    try {
      const res = await marvelApi.get('/comics')
      logger.log(res.data)
      AppState.comics = res.data.data.results.map(c => new Comic(c))
      logger.log(AppState.comics)
    } catch (err) {
      logger.error('Something went wrong retrieving comics', err)
    }
  }
}

export const comicsService = new ComicsService()