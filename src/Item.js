const { maxQuality } = require('./utils/vars')

const items = require('./data/items')

class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  getName () {
    return this.name
  }

  getSellIn () {
    return this.sellIn
  }

  getQuality () {
    return this.quality
  }

  setName (name) {
    this.name = name
  }

  setSellIn (sellIn) {
    this.sellIn = sellIn
  }

  setQuality (quality) {
    this.quality = quality
  }

  updateSellInAndQuality () {
    this.sellIn--
    const sellInDaysForItem = Object.keys(items[this.name])
    for (let i = 0; i < sellInDaysForItem.length; i++) {
      if (this.sellIn <= Number(sellInDaysForItem[i])) {
        const thisItem = items[this.name]
        const thisItemQuality = thisItem[sellInDaysForItem[i]]
        if (/^=/.test(thisItemQuality)) {
          this.quality = Number(thisItemQuality.substring(1))
        } else {
          this.quality += Number(thisItemQuality)
          if (this.quality > maxQuality) this.quality = maxQuality
          if (this.quality <= 0) this.quality = 0
        }

        break
      }
    }
  }
}

module.exports = Item
