/* eslint-disable no-undef */
const Shop = require('../src/Shop.js')
const Item = require('../src/Item.js')

const defaults = require('./defaults')

describe('Gilded Rose', function () {
  let items, index, key, gildedRose, sellIn, quality, updatedItems

  beforeEach(() => {
    items = Object.keys(defaults).map(name => new Item(name, defaults[name].sellIn, defaults[name].quality))
    gildedRose = new Shop(items)
  })

  it('succesfully updates vest day one', function () {
    updatedItems = gildedRose.updateQuality()

    key = '+5 Dexterity Vest'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayOne.sellIn)
    expect(quality).toEqual(defaults[key].dayOne.quality)
  })

  it('succesfully updates brie day one', function () {
    updatedItems = gildedRose.updateQuality()

    key = 'Aged Brie'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayOne.sellIn)
    expect(quality).toEqual(defaults[key].dayOne.quality)
  })

  it('succesfully updates mongoose day one', function () {
    updatedItems = gildedRose.updateQuality()

    key = 'Elixir of the Mongoose'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayOne.sellIn)
    expect(quality).toEqual(defaults[key].dayOne.quality)
  })

  it('succesfully updates sulfuras day one', function () {
    updatedItems = gildedRose.updateQuality()

    key = 'Sulfuras, Hand of Ragnaros'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayOne.sellIn)
    expect(quality).toEqual(defaults[key].dayOne.quality)
  })

  it('succesfully updates back stage passes day one', function () {
    updatedItems = gildedRose.updateQuality()

    key = 'Backstage passes to a TAFKAL80ETC concert'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayOne.sellIn)
    expect(quality).toEqual(defaults[key].dayOne.quality)
  })

  it('succesfully updates mana day one', function () {
    updatedItems = gildedRose.updateQuality()

    key = 'Conjured Mana Cake'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayOne.sellIn)
    expect(quality).toEqual(defaults[key].dayOne.quality)
  })

  it('succesfully updates vest day 30', function () {
    for (let i = 1; i <= 30; i++) {
      updatedItems = gildedRose.updateQuality()
    }

    key = '+5 Dexterity Vest'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayThirty.sellIn)
    expect(quality).toEqual(defaults[key].dayThirty.quality)
  })

  it('succesfully updates brie day 30', function () {
    for (let i = 1; i <= 30; i++) {
      updatedItems = gildedRose.updateQuality()
    }

    key = 'Aged Brie'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayThirty.sellIn)
    expect(quality).toEqual(defaults[key].dayThirty.quality)
  })

  it('succesfully updates mongoose day 30', function () {
    for (let i = 1; i <= 30; i++) {
      updatedItems = gildedRose.updateQuality()
    }

    key = 'Elixir of the Mongoose'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayThirty.sellIn)
    expect(quality).toEqual(defaults[key].dayThirty.quality)
  })

  it('succesfully updates sulfuras day 30', function () {
    for (let i = 1; i <= 30; i++) {
      updatedItems = gildedRose.updateQuality()
    }

    key = 'Sulfuras, Hand of Ragnaros'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayThirty.sellIn)
    expect(quality).toEqual(defaults[key].dayThirty.quality)
  })

  it('succesfully updates back stage passes day 30', function () {
    for (let i = 1; i <= 30; i++) {
      updatedItems = gildedRose.updateQuality()
    }

    key = 'Backstage passes to a TAFKAL80ETC concert'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayThirty.sellIn)
    expect(quality).toEqual(defaults[key].dayThirty.quality)
  })

  it('succesfully updates mana day 30', function () {
    for (let i = 1; i <= 30; i++) {
      updatedItems = gildedRose.updateQuality()
    }

    key = 'Conjured Mana Cake'
    index = defaults[key].index
    sellIn = updatedItems[index].getSellIn()
    quality = updatedItems[index].getQuality()

    expect(sellIn).toEqual(defaults[key].dayThirty.sellIn)
    expect(quality).toEqual(defaults[key].dayThirty.quality)
  })
})
