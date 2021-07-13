import Route from './routes/index.route';
import express from 'express';
import { connect } from 'mongoose';
import config from './config/config.json';
import ejs from 'ejs';
import path from 'path';
import dotenv from 'dotenv';
import students from './Model/students.schema'
import users from './Model/users.schema'

const env = dotenv.config()
const app = express();
const port = 4000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(bodyParser.json())
app.engine('html', ejs.renderFile)
app.set('view engine', 'ejs')

app.use(express.static('views'))
app.use(express.static(path.join(__dirname, 'views')))

const DBConnect = async () => {
    try {
        const db = await connect(config.localDB, { useNewUrlParser: true, useUnifiedTopology: true })
        const datas = await users.find().populate('email', 'name rollNo email')

        const aggregation = [
            {
                $lookup: {
                    from: 'users',
                    localField: 'name',
                    foreignField: 'name',
                    as: 'usersName'
                }
            },
            {
                $unwind: '$usersName'
            },
            {
                $project: {
                    name: 1,
                    email: 1,
                    rollNo: 1,
                    password: '$usersName.password'
                }
            }
        ]

        const dox = await students.aggregate(aggregation)

        console.log(dox)
        console.log("database connected successfully");
    } catch (error) {
        console.log("database not connected", error);
    }
}
DBConnect()



Route(app)
// console.log(process.env.DBURL, '=> its env file')

app.listen(port, () => {
    console.log(`we are live on ${port}`)
})