function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
}

let test = randomArray(20, 100);
console.log(test);
bubbleSort(test, 20);
console.log(test);

function bubbleSort(test, length) {
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (test[j] >= test[j + 1]) {
        c = test[a];
        test[a] = test[b];
        test[b] = c;
      }
    }
  }
}


