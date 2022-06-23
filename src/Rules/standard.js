class StandardRule {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  update(times = 1) {
    while (times-- > 0) {
      this.items.forEach((item) => {
        item.sellIn -= 1
        if (item.sellIn < 0) {
          item.quality -= 2
        } else {
          item.quality -= 1
        }
        if (item.quality < 0) {
          item.quality = 0
        }
      })
    }
  }
}

module.exports = StandardRule
