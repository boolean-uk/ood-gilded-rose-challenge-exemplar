class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

const ItemTypes = {
  ItemType_Normal: 'normal',
  ItemType_Sulfuras: 'Sulfuras',
  ItemType_BackstagePass: 'Backstage passes',
  ItemType_Conjured: 'Conjured',
  ItemType_AgedBrie: 'Aged Brie'
}

class Shop {
  constructor (items = []) {
    this.items = items
    // {itemType: [Items]}

    this.itemTypes = {}
    items.forEach((item) => {
      this.setItemType(item)
    })
  }

  updateQualityOriginal () {
    for (let i = 0; i < this.items.length; i++) {
      // for each item
      if (this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
        // item is not aged brie, or backstage
        // decrease quality if quality is > 0
        if (this.items[i].quality > 0) {
          if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name !== 'Aged Brie') {
          if (this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items
  }

  updateQuality () {
    this.updateQualityOfItemTypes(ItemTypes.ItemType_Normal)
    this.updateQualityOfItemTypes(ItemTypes.ItemType_Sulfuras)
    this.updateQualityOfItemTypes(ItemTypes.ItemType_BackstagePass)
    this.updateQualityOfItemTypes(ItemTypes.ItemType_Conjured)
    this.updateQualityOfItemTypes(ItemTypes.ItemType_AgedBrie)
    return this.items
  }

  updateQualityOfItemTypes (itemType) {
    const itemsOfType = this.itemTypes[itemType]
    if (itemsOfType !== undefined) {
      for (let i = 0; i < itemsOfType.length; i++) {
        const newSellInDate = this.computeNewSellInDate(itemType, itemsOfType[i].sellIn)
        const newQuality = this.computeItemQualityChange(itemType, itemsOfType[i].sellIn, itemsOfType[i].quality)

        itemsOfType[i].quality = newQuality
        itemsOfType[i].sellIn = newSellInDate
      }
    }
  }

  computeNewSellInDate (itemType, currentSellIn) {
    if (itemType === ItemTypes.ItemType_Sulfuras) {
      return currentSellIn
    } else {
      return currentSellIn - 1
    }
  }

  computeItemQualityChange (itemType, currentSellIn, currentQuality) {
    let newQuality = currentQuality
    const newSellIn = currentSellIn - 1
    const degradeModifier = (newSellIn < 0) ? 2 : 1
    if (itemType === ItemTypes.ItemType_Normal) {
      newQuality -= 1 * degradeModifier
    }
    if (itemType === ItemTypes.ItemType_Conjured) {
      newQuality -= 2 * degradeModifier
    }
    if (itemType === ItemTypes.ItemType_AgedBrie) {
      newQuality += 1
    }
    if (itemType === ItemTypes.ItemType_BackstagePass) {
      if (newSellIn < 0) {
        newQuality = 0
      } else if (newSellIn < 5) {
        newQuality += 3
      } else if (newSellIn < 10) {
        newQuality += 2
      } else {
        newQuality += 1
      }
    }
    if (newQuality < 0) {
      newQuality = 0
    }
    if (newQuality > 50) {
      newQuality = 50
    }
    if (itemType === ItemTypes.ItemType_Sulfuras) {
      newQuality = currentQuality
    }
    return newQuality
  }

  addItem (item) {
    if (item !== null) {
      this.items.push(item)
      this.setItemType(item)
    }
  }

  setItemType (item) {
    if (item.name.startsWith('Aged Brie')) {
      this.indexItemByType(item, ItemTypes.ItemType_AgedBrie)
    } else if (item.name.startsWith('Sulfuras')) {
      this.indexItemByType(item, ItemTypes.ItemType_Sulfuras)
    } else if (item.name.startsWith('Backstage passes')) {
      this.indexItemByType(item, ItemTypes.ItemType_BackstagePass)
    } else if (item.name.startsWith('Conjured')) {
      this.indexItemByType(item, ItemTypes.ItemType_Conjured)
    } else {
      this.indexItemByType(item, ItemTypes.ItemType_Normal)
    }
  }

  indexItemByType (item, itemType) {
    if (itemType in this.itemTypes) {
      this.itemTypes[itemType].push(item)
    } else {
      this.itemTypes[itemType] = [item]
    }
  }
}
module.exports = {
  Item,
  ItemTypes,
  Shop
}
