function birthdayRun(numberOfPeople) {
  const birthdays = [];
  let i = 1;
  // create random "dates" represented by a number between 1 and 365.25
  while (i <= numberOfPeople) {
    randomDate = Math.floor(Math.random() * (365.25 - 1) + 1);
    birthdays.push(randomDate);
    i++;
  }
  // check for duplicates
  const duplicates = birthdays.filter(
    (date, index) => index !== birthdays.indexOf(date)
  );
  // return 1 if there are duplicates, 0 if not
  return duplicates.length > 0 ? 1 : 0;
}

function chanceByRuns(num, runs) {
  let sharedBirthdays = 0;
  // sum of the number of birthdays for the number of runs
  for (let i = 0; i <= runs; i++) {
    sharedBirthdays += birthdayRun(num);
  }
  // the percentage of shared birthdays for the number of runs
  const probability = sharedBirthdays / runs;

  return `'Given ${num} people, the chance of at least two people having the same birthday is ${probability}`;
}

function chanceByAccuracy(num, precision = 10) {
  let sharedBirthdays = 0;
  // sum of the number of birthdays for the number of runs
  for (let i = 0; i <= runs; i++) {
    sharedBirthdays += birthdayRun(num);
  }
  // the percentage of shared birthdays for the number of runs
  const probability =
    Math.round((sharedBirthdays / 10000) * 10 ** precision) / 10 ** precision;

  return `'Given ${num} people, the chance of at least two people having the same birthday is ${probability}`;
}

console.log(chanceByRuns(23, 100000));
