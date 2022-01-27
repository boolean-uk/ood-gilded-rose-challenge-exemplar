const updater = (item) => {
  item.sellIn--
  item.quality--
  item.quality--
  if (item.sellIn < 0) {
    item.quality--
    item.quality--
  }
  if (item.quality < 0) { item.quality = 0 }
}

module.exports = updater
