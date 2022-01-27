const UPDATERS = {
  'Aged Brie': require('./agedBrieUpdater'),
  'Backstage passes to a TAFKAL80ETC concert': require('./backstagePassUpdater'),

}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') { UPDATERS['Aged Brie'](this.items[i]) }
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') { UPDATERS['Backstage passes to a TAFKAL80ETC concert'](this.items[i]) }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].sellIn < 0) {
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = Shop
