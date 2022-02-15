function birthdayRun(numberOfPeople) {
  const birthdays = [];
  // create random "dates" represented by a number between 1 and 365.25
  for (let i = 1; i <= numberOfPeople; i++) {
    randomDate = Math.round(Math.random() * (365.25 - 1) + 1);
    birthdays.push(randomDate);
  }
  // check for duplicates
  const duplicates = birthdays.filter(
    (date, index) => index !== birthdays.indexOf(date)
  );
  // return 1 if there are duplicates, 0 if not
  return duplicates.length > 0 ? 1 : 0;
}

function calculateProbability(num, runs) {
  let sharedBirthdays = 0;
  // sum of the number of birthdays for the number of runs
  for (let i = 0; i <= runs; i++) {
    sharedBirthdays += birthdayRun(num);
  }
  // the percentage of shared birthdays for the number of runs
  return sharedBirthdays / runs;
}

function chanceByRuns(num, runs) {
  const probability = calculateProbability(num, runs);
  return `'Given ${num} people, the chance of at least two people having the same birthday is ${probability}`;
}

function chanceByAccuracy(num, precision = 0.01) {
  // JavaScript always adds a preceeding 0 before a decemal.
  // -2 subtracts the 0 and the period, thus leaving the order of magnitude.
  const decimalPlaces = precision.toString().length - 2;
  // For this function I'm using an arbitrary number of 10001 runs
  const probability = calculateProbability(num, 10001).toPrecision(
    decimalPlaces
  );

  return `Given ${num} people, the chance of at least two people having the same birthday is ${probability}`;
}

console.log(chanceByRuns(23, 100000));
console.log(chanceByAccuracy(23, 0.000004));
