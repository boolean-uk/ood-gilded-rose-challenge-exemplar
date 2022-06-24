class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    return this.items.map(item => {
      item.updateSellInAndQuality()
      return item
    })
  }
}

module.exports = Shop
