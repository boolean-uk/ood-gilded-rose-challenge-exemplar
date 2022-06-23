class ConjuredRule {
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
        item.quality -= 4
      } else {
        item.quality -= 2
      }
      if (item.quality < 0) {
        item.quality = 0
      }
    })
  }
}

module.exports = ConjuredRule
