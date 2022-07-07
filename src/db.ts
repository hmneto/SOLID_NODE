import mysql from 'mysql'
export default class DB {
    connection: any
    constructor() {

        var db_config = {
            host: 'localhost',
            user: 'root',
            password: 'usbw',
            port: 3306
        };
        this.connection = mysql.createPool(db_config)
    }


    consulta_query: any = function (query: string) {
        return new Promise(function (resolve, reject) {
            try {
                this.connection.query(query, (err: any, rows: any) => {
                    if (err) reject(err)
                    resolve(rows)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}