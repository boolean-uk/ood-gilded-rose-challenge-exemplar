const { Shop, Item } = require('../src/gilded_rose.js')
describe('Gilded Rose', function () {
  it('Standard Item - one day', function () {
    const gildedRose = new Shop([new Item('Standard', 3, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(4)
  })

  it('Standard Item - expired', function () {
    const gildedRose = new Shop([new Item('Standard', 0, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(3)
  })

  it('Standard Item - expired, quality limited to 0', function () {
    const gildedRose = new Shop([new Item('Standard', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('Aged Brie - quality increases', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 3, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(6)
  })

  it('Aged Brie - max quality 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 3, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(50)
  })

  it('Aged Brie - expired', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(7)
  })

  it('Aged Brie - expired, max quality 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 49)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(50)
  })

  it('Conjured Mana Cake', function () {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 1, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(3)
  })

  it('Conjured Mana Cake, expired', function () {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 0, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(1)
  })

  it('Sulfuras, Hand of Ragnaros - 1, 80 unchanged', function () {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(80)
  })

  it('Sulfuras, Hand of Ragnaros, -5, 80 unchanged', function () {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', -5, 80)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-5)
    expect(items[0].quality).toEqual(80)
  })

  it('Backstage passes to a TAFKAL80ETC concert, goes to 0', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('Backstage passes to a TAFKAL80ETC concert, becomes more valuable', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 40, 20)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(39)
    expect(items[0].quality).toEqual(21)
  })

  it('Backstage passes to a TAFKAL80ETC concert, becomes more valuable +2', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(32)
  })

  it('Backstage passes to a TAFKAL80ETC concert, becomes more valuable +3', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(33)
  })
})
