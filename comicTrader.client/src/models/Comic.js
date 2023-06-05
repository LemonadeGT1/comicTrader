
export class Comic {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.issueNumber = data.issueNumber
    this.thumbnail = data.thumbnail
    this.creators = data.creators
    this.dates = data.dates
    this.description = data.description
    this.pageCount = data.pageCount
  }
}