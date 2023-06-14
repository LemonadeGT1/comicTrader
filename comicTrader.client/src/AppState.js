import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Profile} */
  activeProfile: {},
  /** @type {import('./models/Comic.js').Comic[]} */
  comics: [],
  /** @type {import('./models/Comic.js').Comic} */
  activeComic: {},

  // For Pagination
  offset: 0,
  limit: 50,
  comicTotal: 0
})
