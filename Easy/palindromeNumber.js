function isPalin(num) {
  const numStringArray = num.toString().split("");

  const revNumStringArray = num.toString().split("").reverse();

  if (numStringArray.join("") == revNumStringArray.join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalin(1234));
console.log(isPalin(121));
