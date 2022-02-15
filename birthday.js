function birthday(num) {
  // chances that 2 people in the room  share a birthday.
  // 1 - (1/365)

  // chances that 3 people in the room  share a birthday
  // (1 - (1/365)) * (1-(2/365))

  // so let's keep the pattern going.

  // so the chances with num people sharing a birthday are:
  let n = 1;
  for (let i = 0; i <= num - 1; i++) {
    //
    let m = i / 365;
    n *= 1 - m;
  }
  // the likelyhood they DO share a birthday
  return 1 - n;
}

console.log(birthday(10));
