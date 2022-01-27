const ItemTypes = require('./ItemTypes')

class Shop {
  constructor (items = []) {
    this.items = items

    // index items by type -> {itemType: [Items]}
    this.itemsByType = {}
    items.forEach((item) => {
      this.indexItemByType(item)
    })
  }

  addItem (item) {
    if (item !== null) {
      this.items.push(item)
      this.indexItemByType(item)
    }
  }

  updateQuality () {
    this.updateQualityOfItemsByType(ItemTypes.ItemType_Normal)
    this.updateQualityOfItemsByType(ItemTypes.ItemType_Sulfuras)
    this.updateQualityOfItemsByType(ItemTypes.ItemType_BackstagePass)
    this.updateQualityOfItemsByType(ItemTypes.ItemType_Conjured)
    this.updateQualityOfItemsByType(ItemTypes.ItemType_AgedBrie)
    return this.items
  }

  updateQualityOfItemsByType (itemType) {
    const itemsOfType = this.itemsByType[itemType]
    if (itemsOfType !== undefined) {
      for (let i = 0; i < itemsOfType.length; i++) {
        // compute the new quality and sell in date for item
        const newSellInDate = this.computeNewSellInDate(itemType, itemsOfType[i].sellIn)
        const newQuality = this.computeItemQualityChange(itemType, itemsOfType[i].sellIn, itemsOfType[i].quality)
        // update item with new quality and sell in date
        itemsOfType[i].quality = newQuality
        itemsOfType[i].sellIn = newSellInDate
      }
    }
  }

  computeNewSellInDate (itemType, currentSellIn) {
    // compute the new sell in date
    if (itemType === ItemTypes.ItemType_Sulfuras) {
      return currentSellIn
    } else {
      return currentSellIn - 1
    }
  }

  computeItemQualityChange (itemType, currentSellIn, currentQuality) {
    // compute the amount by which this item changes in quality
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
    // items cannot have negative quality
    if (newQuality < 0) {
      newQuality = 0
    }
    // items cannot have quality > 50
    if (newQuality > 50) {
      newQuality = 50
    }
    // Sulfuras items never loose quality
    if (itemType === ItemTypes.ItemType_Sulfuras) {
      newQuality = currentQuality
    }
    return newQuality
  }

  indexItemByType (item) {
    let itemType = ItemTypes.ItemType_Normal
    if (item.name.startsWith('Aged Brie')) {
      itemType = ItemTypes.ItemType_AgedBrie
    } else if (item.name.startsWith('Sulfuras')) {
      itemType = ItemTypes.ItemType_Sulfuras
    } else if (item.name.startsWith('Backstage passes')) {
      itemType = ItemTypes.ItemType_BackstagePass
    } else if (item.name.startsWith('Conjured')) {
      itemType = ItemTypes.ItemType_Conjured
    } else {
      itemType = ItemTypes.ItemType_Normal
    }
    // index the item
    if (itemType in this.itemsByType) {
      this.itemsByType[itemType].push(item)
    } else {
      this.itemsByType[itemType] = [item]
    }
  }
}
module.exports = Shop
