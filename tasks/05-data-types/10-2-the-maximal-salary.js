// Task: https://javascript.info/destructuring-assignment#the-maximal-salary

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250,
};

console.log(getTopPaidPerson(salaries));

function getTopPaidPerson(salaries) {
  // Convert object to array of entries.
  let salaryEntries = Object.entries(salaries);

  // If there are no salary entries, return null.
  if (salaryEntries.length === 0) return null;

  // Find the top salary entry.
  let topSalaryEntry = salaryEntries.reduce((topSalaryEntry, salaryEntry) => {
    if (salaryEntry[1] > topSalaryEntry[1]) return salaryEntry;
    else return topSalaryEntry;
  }, [undefined, -Infinity]);

  return topSalaryEntry[0];
}
