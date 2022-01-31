const Shop = require('../src/Shop.js');
const Item = require('../src/Item.js');

describe("Gilded Rose", function() {
  let items, gildedRose

  beforeEach(() => {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6)
    ]
    gildedRose = new Shop(items);
  })

  it("Day one", function() {
    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].sellIn).toEqual(9)
    expect(updatedItems[0].quality).toEqual(19)

    expect(updatedItems[1].sellIn).toEqual(1)
    expect(updatedItems[1].quality).toEqual(1)

    expect(updatedItems[2].sellIn).toEqual(4)
    expect(updatedItems[2].quality).toEqual(6)

    expect(updatedItems[3].sellIn).toEqual(0)
    expect(updatedItems[3].quality).toEqual(80)
    expect(updatedItems[4].sellIn).toEqual(-1)
    expect(updatedItems[4].quality).toEqual(80)

    expect(updatedItems[5].sellIn).toEqual(14)
    expect(updatedItems[5].quality).toEqual(21)
    expect(updatedItems[6].sellIn).toEqual(9)
    expect(updatedItems[6].quality).toEqual(50)
    expect(updatedItems[7].sellIn).toEqual(4)
    expect(updatedItems[7].quality).toEqual(50)

    expect(updatedItems[8].sellIn).toEqual(2)
    expect(updatedItems[8].quality).toEqual(4)
  });

  it("Day thirty", function() {
    for (let i = 0; i < 29; i++) {
       gildedRose.updateQuality()
    }
    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].sellIn).toEqual(-20)
    expect(updatedItems[0].quality).toEqual(0)

    expect(updatedItems[1].sellIn).toEqual(-28)
    expect(updatedItems[1].quality).toEqual(50)

    expect(updatedItems[2].sellIn).toEqual(-25)
    expect(updatedItems[2].quality).toEqual(0)

    expect(updatedItems[3].sellIn).toEqual(0)
    expect(updatedItems[3].quality).toEqual(80)
    expect(updatedItems[4].sellIn).toEqual(-1)
    expect(updatedItems[4].quality).toEqual(80)

    expect(updatedItems[5].sellIn).toEqual(-15)
    expect(updatedItems[5].quality).toEqual(0)
    expect(updatedItems[6].sellIn).toEqual(-20)
    expect(updatedItems[6].quality).toEqual(0)
    expect(updatedItems[7].sellIn).toEqual(-25)
    expect(updatedItems[7].quality).toEqual(0)

    expect(updatedItems[8].sellIn).toEqual(-27)
    expect(updatedItems[8].quality).toEqual(0)
  });

});
