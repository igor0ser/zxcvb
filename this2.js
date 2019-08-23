(() => {
  'use strict';
  const name = 'John';
  const obj = {
    name: 'Robert',
    prop: {
      name: 'Tom',
      getName: function() {
        return this.name;
      }
    }
  };

  console.log(obj.prop.getName()); // ??
  const test = obj.prop.getName;
  console.log(test()); // ??
})();
