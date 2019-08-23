const transactions = [
  ['usd', 'sel', 10],
  ['usd', 'buy', 20],
  ['usd', 'buy', 30],
  ['eur', 'sel', 50],
  ['eur', 'sel', 25],
  ['eur', 'buy', 40],
]

const calculate = (transactions) => {
  // ...
}

const result = calculate(transactions)

const result = {
  usd: {
    buy: 50,
    sel: 10
  },
  eur: {
    sel: 75,
    buy: 40,
  }
}