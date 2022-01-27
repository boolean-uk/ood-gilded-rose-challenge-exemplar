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
    for (let i = 0; i < this.items.length; i++) {
      let update = UPDATERS[this.items[i].name]
      if (update === undefined) {
        update = UPDATERS.Standard
      }
      update(this.items[i])
    }

    return this.items
  }
}

module.exports = Shop
