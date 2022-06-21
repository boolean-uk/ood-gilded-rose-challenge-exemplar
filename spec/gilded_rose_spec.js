const { Shop, Item } = require('../src/gilded_rose.js')

describe('Gilded Rose', function () {
  let shop

  beforeEach(() => {
    shop = new Shop([])
  })
  it('should show once the sell by date has passed, Quality degrades twice as fast', function () {
    // setup
    const item = new Item('foo', 0, 10)
    shop.addItem(item)
    // excute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(8)
  })

  it('should show the Quality of an item is never negative', function () {
    // setup
    const item = new Item('foo', 0, 0)
    shop.addItem(item)
    // excute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('foo')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('should show "Aged Brie" actually increases in Quality the older it gets', function () {
    // setup
    const item = new Item('Aged Brie', 2, 1)
    shop.addItem(item)
    // excute
    const items = shop.updateQuality()
    // verify
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(2)
  })
})
