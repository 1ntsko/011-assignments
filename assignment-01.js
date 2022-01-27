const first = {
  a: 1,
  b: 2,
  c: 3,
};
const second = {
  d: 4,
  e: 5,
  f: 6,
};
const third = {
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
};

const allInOne = {
  ...first,
  ...second,
  ...third,
};

function doTheMagic(obj) {
  const result = {};

  for (const i in obj) {
    if (obj[i] % 2 === 0) {
      result[[i + i]] = obj[i] * 2;
    }
  }

  console.log(result);
}

doTheMagic(allInOne);

// {
//     bb: 4,
//     dd: 8,
//     ff: 12,
//     hh: 16,
//     jj: 20
// }
