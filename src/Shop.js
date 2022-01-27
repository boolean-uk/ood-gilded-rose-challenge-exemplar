const UPDATERS = {
  'Aged Brie': require('./agedBrieUpdater'),
  'Backstage passes to a TAFKAL80ETC concert': require('./backstagePassUpdater'),
  'Sulfuras, Hand of Ragnaros': require('./sulfurasUpdater'),
  'Conjured Mana Cake': require('./conjuredUpdater'),
  'Standard': require('./standardUpdater')
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') { UPDATERS['Aged Brie'](this.items[i]) }
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') { UPDATERS['Backstage passes to a TAFKAL80ETC concert'](this.items[i]) }
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') { UPDATERS['Sulfuras, Hand of Ragnaros'](this.items[i]) }
      if (this.items[i].name === 'Conjured Mana Cake') { UPDATERS['Conjured Mana Cake'](this.items[i]) }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Conjured Mana Cake') {
        UPDATERS['Standard'](this.items[i])
      }
    }

    return this.items;
  }
}

module.exports = Shop
