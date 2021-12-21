import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('addres.db')

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(`CREATE TABLE IF NOT EXISTS addres (id INTEGER PRIMARY KEY 
			NOT NULL, name TEXT NOT NULL, adress TEXT NOT NULL)`,
			[],
			() => { resolve() },
			(_, err) => { reject(err) })
		})
	})
		
	return promise
}