const { sculptureList } = require('./data.js');

const sculptureListLengths = sculptureList.map(sculpture => {
  const lengthsObject = {};

  for (const key in sculpture) {
    if (Object.hasOwnProperty.call(sculpture, key)) {
      const value = sculpture[key];
      lengthsObject[key] = value.length;
    }
  }

  return lengthsObject;
});

console.log(JSON.stringify(sculptureListLengths, null, 2));