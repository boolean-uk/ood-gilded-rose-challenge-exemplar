const update = require('../src/sulfurasUpdater.js');
const Item = require('../src/Item.js');

describe("Sulfuras", function() {
  it("quality and sell in do not decrease", function() {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    update(sulfuras)

    expect(sulfuras.sellIn).toEqual(0)
    expect(sulfuras.quality).toEqual(80)
  })

  it("quality and sell in do not decrease", function() {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
    update(sulfuras)

    expect(sulfuras.sellIn).toEqual(-1)
    expect(sulfuras.quality).toEqual(80)
  })

})
