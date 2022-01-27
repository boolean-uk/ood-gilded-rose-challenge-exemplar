const update = require('../src/agedBrieUpdater.js');
const Item = require('../src/item.js');

describe("Aged Brie", function() {
  it("quality increase by 1", function() {
    const agedBrie = new Item("Aged Brie", 4, 5)
    update(agedBrie)

    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(6)
  })

  it("quality increases by 2", function() {
    const agedBrie = new Item("Aged Brie", 0, 5)
    update(agedBrie)

    expect(agedBrie.sellIn).toEqual(-1)
    expect(agedBrie.quality).toEqual(7)
  })

  it("quality stops at 50", function() {
    const agedBrie = new Item("Aged Brie", 4, 50)
    update(agedBrie)

    expect(agedBrie.sellIn).toEqual(3)
    expect(agedBrie.quality).toEqual(50)
  })
})
