const update = require('../src/standardUpdater.js');
const Item = require('../src/Item.js');

describe("Standard Items", function() {

  it("quality decreases by 1", function() {
    const standardItem = new Item("+5 Dexterity Vest", 10, 20)
    update(standardItem)

    expect(standardItem.sellIn).toEqual(9)
    expect(standardItem.quality).toEqual(19)
  })

  it("quality decreases by 2", function() {
    const standardItem = new Item("+5 Dexterity Vest", 0, 5)
    update(standardItem);

    expect(standardItem.sellIn).toEqual(-1)
    expect(standardItem.quality).toEqual(3)
  })

  it("quality min 0", function() {
    const standardItem = new Item("+5 Dexterity Vest", 0, 0)
    update(standardItem);

    expect(standardItem.sellIn).toEqual(-1)
    expect(standardItem.quality).toEqual(0)
  })
})
