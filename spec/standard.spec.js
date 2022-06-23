const { Item } = require('../src/gilded_rose')
const StandardRule = require('../src/Rules/standard')

describe('Standard Rule', () => {
  it('Counts down by 1', () => {
    const item = new Item('Plain Item', 3, 2)
    const rule = new StandardRule()
    rule.add(item)
    rule.update()

    expect(item.sellIn).toBe(2)
    expect(item.quality).toBe(1)
  })

  it('Degrades faster once expired', () => {
    const item = new Item('Plain Item', 0, 3)
    const rule = new StandardRule()
    rule.add(item)
    rule.update()

    expect(item.sellIn).toBe(-1)
    expect(item.quality).toBe(1)
  })

  it('Keeps min quality 0', () => {
    const item = new Item('Plain Item', 0, 1)
    const rule = new StandardRule()
    rule.add(item)
    rule.update()

    expect(item.sellIn).toBe(-1)
    expect(item.quality).toBe(0)
  })

  it('Processes multiple items (multiple times)', () => {
    const item1 = new Item('Plain Item', 3, 1)
    const item2 = new Item('Plain Item Old', 0, 1)
    const rule = new StandardRule()
    rule.add(item1)
    rule.add(item2)

    // Update 2 times
    rule.update(2)

    expect(item1.sellIn).toBe(1)
    expect(item1.quality).toBe(0)

    expect(item2.sellIn).toBe(-2)
    expect(item2.quality).toBe(0)
  })
})
