const update = require('../src/conjuredUpdater.js');
const Item = require('../src/Item.js');

describe("Conjured Items", function() {
  it("quality decreases by 2", function() {
    const conjuredItem = new Item("Conjured Mana Cake", 3, 6)
    update(conjuredItem)

    expect(conjuredItem.sellIn).toEqual(2)
    expect(conjuredItem.quality).toEqual(4)
  })

  it("quality decreases by 4", function() {
    const conjuredItem = new Item("Conjured Mana Cake", 0, 5)
    update(conjuredItem)

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(1)
  })

  it("quality min 0", function() {
    const conjuredItem = new Item("Conjured Mana Cake", 0, 3)
    update(conjuredItem)

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(0)
  })
})
