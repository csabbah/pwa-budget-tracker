let db;
// Establish connection to IndexedDB called 'budget_data' and set to version 1
const request = indexedDB.open('budget_data', 1);

// Upon first code execution, create the object store
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // create a table (in object store) called 'new_budget' and auto increment
  db.createObjectStore('new_budget', { autoIncrement: true });
};

// Below event executes every time we interact with the database (Upload data on reload)
request.onsuccess = function (event) {
  db = event.target.result;

  // Check if app is online, if yes, upload stored budget and push to to API database
  if (navigator.onLine) {
    // uploadBudget()
  }
};

// Log the error
request.onerror = function (event) {
  console.log(event.target.errorCode);
};
