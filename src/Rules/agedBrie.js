class AgedBrieRule {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  update() {
    this.items.forEach((item) => {
      item.sellIn -= 1
      if (item.sellIn < 0) {
        item.quality += 2
      } else {
        item.quality += 1
      }
      if (item.quality > 50) {
        item.quality = 50
      }
    })
  }
}

module.exports = AgedBrieRule
