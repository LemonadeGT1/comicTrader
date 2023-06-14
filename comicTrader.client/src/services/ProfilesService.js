import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Account.js"

class ProfilesService {
  async editProfile(profileData) {
    // logger.log('ProfilesService.editProfile', profileData)
    const res = await api.put('api/profiles/', profileData)
    logger.log('editProfile', res.data)
    AppState.activeProfile = new Profile(res.data)
  }

  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    AppState.activeProfile = new Profile(res.data)
    logger.log(AppState.activeProfile)
  }
}

export const profilesService = new ProfilesService()