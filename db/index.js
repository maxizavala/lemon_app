import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('withdraw.db')


export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(`CREATE TABLE IF NOT EXISTS addresses (id INTEGER PRIMARY KEY 
			NOT NULL, name TEXT NOT NULL, address TEXT NOT NULL)`,
			[],
			() => { resolve() },
			(_, err) => { reject(err) })
		})
	})
		
	return promise
}


export const insertAddress = (name, address) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO addresses (name, address) VALUES (?, ?)`,
                [name, address],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
}


export const fetchAddres = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM addresses`,
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
}


export const deleteAddress = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM addresses WHERE id = ?`,
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
}