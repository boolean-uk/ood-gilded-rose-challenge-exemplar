const Types = require('./types_of_item')
const Item = require('../src/item_class.js')

class Shop {
  constructor(items = []) {
    this.items = items
  }

  addItem(item) {
    this.items.push(item)
  }

  updateQuality() {
    this.items.map((item) => {
      const nameTypeCheck = item.name.substring(0, item.name.indexOf(' '))
      if (nameTypeCheck !== '') {
        if (nameTypeCheck === 'Aged') {
          return this.agedItem(item)
        }
      } else {
        return this.normalItem(item)
      }
    })
    return this.items
  }

  normalItem(item) {
    if (item.sellIn <= 0) {
      return [
        (item.sellIn = item.sellIn - 1),
        (item.quality = item.quality > 0 ? item.quality - 2 : 0)
      ]
    }
    return [
      (item.sellIn = item.sellIn - 1),
      (item.quality = item.quality > 0 ? item.quality - 1 : 0)
    ]
  }

  agedItem(item) {
    return [(item.sellIn = item.sellIn - 1), (item.quality = item.quality + 1)]
  }
}
module.exports = {
  Shop
}
