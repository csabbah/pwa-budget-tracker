let db;
// Establish connection to IndexedDB called 'budget_data' and set to version 1
const request = indexedDB.open('budget_data', 1);
