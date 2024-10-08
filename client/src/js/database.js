import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  //database name, version
  const jateDb = await openDB('jate', 1);
  //transaction specifying database and type of read/write
  const tx = jateDb.transaction('jate', 'readwrite');
  //object store
  const store = tx.objectStore('jate');
  //put request
  const request = store.put({id: 1, value: content});
  return request;
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  //database name, version
  const jateDb = await openDB('jate', 1);
  //readonly
  const tx = jateDb.transaction('jate', 'readonly');
  //object store
  const store = tx.objectStore('jate');
  //get all request
  const request = store.getAll();
  //wait for the request to finish and return the value
  const result = await request;
  console.log('result.value', result);
  return result.value;
}

initdb();
