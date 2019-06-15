

const mysql = require('mysql');


class Database
{

	constructor(dbConfig)
	{
		this.dbConfig = dbConfig;
		this.conn = mysql.createConnection({
			host: 		dbConfig.host,
			user: 		dbConfig.user,
			password: 	dbConfig.password,
			database: 	dbConfig.database,
		});

		this.conn.connect(function(err) {
			if (err) 
			{
				console.log('DB : ERROR : ', err);
				return;
			}
			console.log("Connected to MySQL!");
		});
	}

	query(sql, args)
	{
		return new Promise((resolve, reject) => {
			this.conn.query(sql, args, (err, rows) => {
				if(err)
				{
					return reject(err);
				}
				resolve(rows);
			});
		});
	}

}

module.exports = Database