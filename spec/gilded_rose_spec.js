const { Shop, Item } = require('../src/gilded_rose.js')
// item(name, sell in, quality)
describe('Gilded Rose', function () {
  let gildedRose = null

  beforeEach(() => {
    gildedRose = new Shop([])
  })
  it('should degrade quality and reduce sellin each day', () => {
    // setup
    const item = new Item('foo', 2, 1)
    gildedRose.items.push(item)
    // run
    const items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(0)
  })

  it('should degrade quality twice as fast after sellIn date is zero', () => {
    // setup
    const item = new Item('foo', 0, 10)
    gildedRose.items.push(item)
    // run
    const items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(8)
  })

  it('should never degrade below zero', () => {
    // setup
    const item = new Item('foo', 0, 0)
    gildedRose.items.push(item)
    // run
    let items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
    // run again
    items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(0)
  })

  it('should increase Aged Brie quality over time', () => {
    // setup
    const item = new Item('Aged Brie', 5, 0)
    gildedRose.items.push(item)
    // run
    let items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(1)
    // run
    items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(2)
  })

  it('should never increase value above 50', () => {
    // setup
    const item = new Item('Aged Brie', 5, 49)
    gildedRose.items.push(item)
    // run
    let items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(50)
    // run
    items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(50)
  })

  it('should not decrease quality of Sulfuras or sell Sulfuras', () => {
    // setup
    const item = new Item('Sulfuras, Hand of Ragnaros', 5, 80)
    gildedRose.items.push(item)
    // run
    const items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].sellIn).toEqual(5)
    expect(items[0].quality).toEqual(80)
  })

  it('should drop quality to 0 for Backstage passes after concert', () => {
    // setup
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30)
    gildedRose.items.push(item)
    // run
    let items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(33)

    items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('should increase Backstage pass quality by 1 if more than 10 days to concert', () => {
    // setup
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 30)
    gildedRose.items.push(item)
    // run
    const items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(10)
    expect(items[0].quality).toEqual(31)
  })
  it('should increase Backstage pass quality by 2 if less than 10 days to concert', () => {
    // setup
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)
    gildedRose.items.push(item)
    // run
    const items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(32)
  })
  it('should increase Backstage pass quality by 2 if less than 10 days to concert', () => {
    // setup
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30)
    gildedRose.items.push(item)
    // run
    const items = gildedRose.updateQuality()
    // verify
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(33)
  })
})
