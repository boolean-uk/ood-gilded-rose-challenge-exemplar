class BackstagePassRule {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  update() {
    this.items.forEach((item) => {
      item.sellIn -= 1

      item.quality++
      if (item.sellIn < 11) item.quality++
      if (item.sellIn < 6) item.quality++

      if (item.sellIn < 0) {
        item.quality = 0
      }

      if (item.quality > 50) item.quality = 50
    })
  }
}

module.exports = BackstagePassRule
