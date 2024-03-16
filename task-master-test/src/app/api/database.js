'use server'
import mysql from "mysql2/promise";
import fs from "fs";

export async function GetAllUsers() {
	const users = await query({
		query: "SELECT * FROM users",
		values: [],
	});
	return users;
}
export async function GetAllTasks() {
	const tasks = await query({
		query: "SELECT * FROM tasks",
		values: [],
	});
	return tasks;
}
export async function GetUserTasks(email) {
	
}
//Create, Update, Delete user tasks
//Create users

// Execute a query on the DB
export async function query({query, values = []}){
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "swe6673_tasks",
        user: "root",
        password: "Keyto_mysql_123#",
    });
    try{
        const [res] = await dbconnection.execute(query, values);
        dbconnection.end();
        return res;
    }
    catch(error){
        throw Error(error.message);
        return { error };
    }
}