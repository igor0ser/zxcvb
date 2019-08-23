const add2 = x => x + 2
const multiply5 = x => x * 5
const pow2 = x => x * x

const compose = () => {}

compose(
  add2,
  multiply5,
  pow2,
)(10) // 502