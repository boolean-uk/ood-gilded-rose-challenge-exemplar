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
})
