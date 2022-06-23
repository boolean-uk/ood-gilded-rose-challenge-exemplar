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
        console.log('typeCheck:', nameTypeCheck)
      } else {
        return this.updateNormalItem(item)
      }
    })
    return this.items
  }

  updateNormalItem(item) {
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
}
module.exports = {
  Shop
}
