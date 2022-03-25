const _ = require('lodash');

// 주어진 배열에서 균일하게 배열을 생성
// 균등하게 못 만들 경우 마지막 chunck 는 나머지 요소들
function chunk(array, size = 1) {
  const newArray = [];

  let index = 0;
  while (index < array.length) {
    newArray.push(array.slice(index, index + size));
    index += size;
  }

  return newArray;
}

module.exports = {
  chunk,
};
