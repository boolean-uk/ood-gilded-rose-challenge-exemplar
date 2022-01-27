const Shop = require('../src/shop.js');
const Item = require('../src/item.js');

describe("Gilded Rose", function() {

  it("Day one", function() {
    const dexVest = new Item("+5 Dexterity Vest", 10, 20)
    const agedBrie = new Item("Aged Brie", 2, 0)
    const elixirMongoose = new Item("Elixir of the Mongoose", 5, 7)
    const sulfuras1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    const sulfuras2 = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
    const backstage1 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    const backstage2 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)
    const backstage3 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    const conjured = new Item("Conjured Mana Cake", 3, 6)
    const items = [
      dexVest,
      agedBrie,
      elixirMongoose,
      sulfuras1,
      sulfuras2,
      backstage1,
      backstage2,
      backstage3,
      conjured
    ]

    const gildedRose = new Shop(items);
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
    const dexVest = new Item("+5 Dexterity Vest", 10, 20)
    const agedBrie = new Item("Aged Brie", 2, 0)
    const elixirMongoose = new Item("Elixir of the Mongoose", 5, 7)
    const sulfuras1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    const sulfuras2 = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
    const backstage1 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    const backstage2 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)
    const backstage3 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    const conjured = new Item("Conjured Mana Cake", 3, 6)
    const items = [
      dexVest,
      agedBrie,
      elixirMongoose,
      sulfuras1,
      sulfuras2,
      backstage1,
      backstage2,
      backstage3,
      conjured
    ]

    const gildedRose = new Shop(items);
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
