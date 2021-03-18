exports.min = function min(array) {
  if (array == undefined) {
      return 0;
  }
  let ansMin = array[0];
  for (i = 0; i < array.length; i++) {
      if (ansMin > array[i]) {
          ansMin = array[i];
      }
  }
  if (ansMin == undefined) {
      return 0;
  } else {
      return ansMin;
  }
};

exports.max = function max(array) {
  if (array == undefined) {
      return 0;
  }
  let ansMax = array[0];
  for (i = 0; i < array.length; i++) {
      if (ansMax < array[i]) {
          ansMax = array[i];
      }
  }
  if (ansMax == undefined) {
      return 0;
  } else {
      return ansMax;
  }
};

exports.avg = function avg(array) {
  if (array == undefined) {
      return 0;
  }
  let average = array[0];
  if (average == undefined) {
      return 0;
  }
  let i = 1;
  while (i < array.length) {
      average += array[i];
      i++;
  }
  average = average / i;
  return average;
};
