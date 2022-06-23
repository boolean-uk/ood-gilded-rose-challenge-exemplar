const Rules = require('./Rules/rules')

class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items

    this.rules = new Rules()

    for (let i = 0; i < this.items.length; i++) {
      this.rules.add(this.items[i])
    }
  }

  updateQuality() {
    this.rules.update()

    return this.items
  }
}
module.exports = {
  Item,
  Shop
}
