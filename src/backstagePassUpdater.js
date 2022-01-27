const updater = (item) => {
  item.sellIn--
  if (item.quality < 50) { item.quality++ }
  if (item.sellIn < 11 && item.quality < 50) { item.quality++ }
  if (item.sellIn < 6 && item.quality < 50) { item.quality++ }
  if (item.sellIn < 0) { item.quality = 0 }
}

module.exports = updater
