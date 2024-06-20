import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const DBconnection = async () => {
	const conn = await mongoose.connect('mongodb://localhost:27017/dtutube').catch((err) => {
		console.log(`For some reasons we couldn't connect to the DB`.red, err)
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`)
}

export default DBconnection;
