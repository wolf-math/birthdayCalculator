function birthdayRun(numberOfPeople) {
  const birthdays = [];
  for (let i = 1; i <= numberOfPeople; i++) {
    // there are 1461 days in 4 years. Chances of Feb 29 is 1/1461
    randomDayOfFourYears = Math.round(Math.random() * 1460 + 1);
    // Assign a number between 1 and 365. 366 if leap year.
    randomDate =
      randomDayOfFourYears === 1461 ? 366 : randomDayOfFourYears % 365;
    birthdays.push(randomDate);
  }
  // check for duplicates
  const duplicates = new Set(birthdays).size !== birthdays.length;
  // return 1 if there are duplicates, 0 if not
  return duplicates ? 1 : 0;
}

function probabilityByRuns(num, runs) {
  let sharedBirthdays = 0;
  // sum of the number of birthdays for the number of runs
  for (let i = 0; i <= runs; i++) {
    sharedBirthdays += birthdayRun(num);
  }
  // the percentage of shared birthdays for the number of runs
  return sharedBirthdays / runs;
}

function chanceByRuns(num, runs) {
  const probability = probabilityByRuns(num, runs);
  return `'Given ${num} people, the chance of at least two people having the same birthday is ${probability}`;
}

function probabilityByPrecision(num, precision) {
  let runs = 1;
  let probability = 0;
  while (probability.toString().length < precision.toString().length) {
    probability = probabilityByRuns(num, runs);
    console.log(probability);
    runs++;
  }
  return `'Given ${num} people, the chance of at least two people having the same birthday is ${probability}`;
}

function chanceByAccuracy(num, precision) {
  const accuracy = probabilityByPrecision(num, precision);
  return `Given ${num} people, the chance of at least two people having the same birthday is ${accuracy}`;
}

// console.log(chanceByRuns(23, 2));
console.log(chanceByAccuracy(23, 0.00001));
// console.log(calculateProbability(23, 3));

// console.log(birthdayRun(23));
