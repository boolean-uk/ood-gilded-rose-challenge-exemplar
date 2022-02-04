const UPDATERS = {
  'Aged Brie': require('./agedBrieUpdater'),
  'Backstage passes to a TAFKAL80ETC concert': require('./backstagePassUpdater'),
  'Sulfuras, Hand of Ragnaros': require('./sulfurasUpdater'),
  'Conjured Mana Cake': require('./conjuredUpdater'),
  Standard: require('./standardUpdater')
}

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    return this.items.map(item => {
      (UPDATERS[item.name] || UPDATERS.Standard)(item)
      return item
    })
  }
}

module.exports = Shop
