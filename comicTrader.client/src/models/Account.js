export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg ? data.coverImg : "https://www.colorhexa.com/008291.png"
    this.bio = data.bio ? data.bio : "User biography"
    this.theme = data.theme
  }
}

export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}
