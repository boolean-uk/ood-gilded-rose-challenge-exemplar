const update = require('../src/backstagePassUpdater.js');
const Item = require('../src/Item.js');

describe("BackStage Pass", function() {
  it("quality increase by 2", function() {
    const backstage1 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5)
    update(backstage1)

    expect(backstage1.sellIn).toEqual(9)
    expect(backstage1.quality).toEqual(7)
  })

  it("quality increase by 3", function() {
    const backstage1 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)
    update(backstage1)

    expect(backstage1.sellIn).toEqual(4)
    expect(backstage1.quality).toEqual(8)
  })

  it("quality set to 0", function() {
    const backstage1 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5)
    update(backstage1)

    expect(backstage1.sellIn).toEqual(-1)
    expect(backstage1.quality).toEqual(0)
  })
})
