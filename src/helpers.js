// Speaking styles
class Polite {
  announce(meal, name) {
    console.log(`Ahem, ${meal} is served. '${name}', please be seated`)
  }
}

class Cheeky {
  announce(meal, name) {
    console.log(`Oi! listen up, ${meal} is served. '${name}!', Hurry up!!!`)
  }
}

// A Butler that can be configured with a Speaking style
class Butler {
  constructor(style = new Polite()) {
    this.style = style
  }

  // Announce dinner, using either the style defined via constructor() or a new one
  dinner(name, style = false) {
    if (style === false) {
      this.style.announce('dinner', name)
    } else {
      style.announce('dinner', name)
    }
  }
}

// A butler - thankfully polite by default
const butler = new Butler()

// Announce dinner
console.log('Polite Butler')
butler.dinner('Carlo')

// This butler can also be made cheeky!
console.log()
console.log('Now Cheeky Butler')

const cheeky = new Cheeky()
butler.dinner('Shahzad', cheeky)

// A butler who is cheeky by default!
console.log()
console.log('Default Cheeky Butler')

const cheekyButler = new Butler(new Cheeky())
cheekyButler.dinner('YOU LOT')
