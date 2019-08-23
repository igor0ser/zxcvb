function a(age, age2) {
  this.age = age
  console.log(this);
}

var a1 = new a(1, 2)