import { Auth0Provider } from "@bcwdev/auth0provider";
import { collectionsService } from "../services/CollectionsService.js";
import BaseController from "../utils/BaseController.js";

export class CollectionsController extends BaseController {
  constructor() {
    super('api/collection')
    this.router
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getCollection)
      .post('', this.addToCollection)
  }

  async getCollection(req, res, next) {
    try {
      let userId = req.params.id
      const collection = await collectionsService.getCollection(userId)
      res.send(collection)
    } catch (error) {
      next(error)
    }
  }

  async addToCollection(req, res, next) {
    try {
      const collectionData = req.body
      const collection = await collectionsService.addToCollection(collectionData)
      res.send(collection)
    } catch (error) {
      next(error)
    }
  }
}