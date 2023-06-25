import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Account.js"

class ProfilesService {
  async editProfile(profileData) {
    profileData.profileId = AppState.account.id
    // logger.log('ProfilesService.editProfile.profileData', profileData)
    const res = await api.put(`api/profiles/${profileData.profileId}`, profileData)
    // logger.log('ProfilesService.editProfile.res.data', res.data)
    AppState.activeProfile = new Profile(res.data)
  }

  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    AppState.activeProfile = new Profile(res.data)
    logger.log(AppState.activeProfile)
  }
}

export const profilesService = new ProfilesService()