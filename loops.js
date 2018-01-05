function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i===1) {array.push("I am 1 strange loop.");
  }
  else array.push("I am ${i} strange loops.");
  }
  return array;
}
function whileLoop(n) {
  while (n > 0) {
   console.log(--n)
 }
 return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do { 
    array.shift();
  }
  while (array.length > 0 && maybeTrue());
<<<<<<< HEAD
  return array;
=======
>>>>>>> 0f98fe3c36e9c9aa7c8398804f5bf2b43cac285f
}