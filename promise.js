new Promise((resolve, reject) => {
  resolve(2)
}).then(res => {
  return 3
}).then(res => {
  if (res === 3) {
    throw new Error(13)
  }
  return res
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log('error')
})
​