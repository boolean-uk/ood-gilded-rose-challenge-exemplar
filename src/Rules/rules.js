const StandardRule = require('./standard')
const AgedBrieRule = require('./agedBrie')
const SulfurasRule = require('./sulfuras')
const ConjuredRule = require('./conjured')
const BackstagePassRule = require('./backstagePass')

class Rules {
  constructor() {
    this.rules = []
    this.standardRule = new StandardRule()
    this.agedBrieRule = new AgedBrieRule()
    this.sulfurasRule = new SulfurasRule()
    this.conjuredRule = new ConjuredRule()
    this.backstagePassRule = new BackstagePassRule()

    this.rules.push(this.standardRule)
    this.rules.push(this.agedBrieRule)
    this.rules.push(this.sulfurasRule)
    this.rules.push(this.conjuredRule)
    this.rules.push(this.backstagePassRule)
  }

  add(item) {
    if (item.name === 'Aged Brie') {
      this.agedBrieRule.add(item)
    } else if (item.name.includes('Sulfuras')) {
      this.sulfurasRule.add(item)
    } else if (item.name.includes('Conjured')) {
      this.conjuredRule.add(item)
    } else if (item.name.includes('Backstage pass')) {
      this.backstagePassRule.add(item)
    } else {
      this.standardRule.add(item)
    }
  }

  update() {
    this.rules.forEach((rule) => {
      rule.update()
    })
  }
}

module.exports = Rules
