const updater = (item) => {
  item.sellIn--
  if (item.quality > 0) { item.quality-- }
  if (item.sellIn < 0 && item.quality > 0) { item.quality-- }
}

module.exports = updater
