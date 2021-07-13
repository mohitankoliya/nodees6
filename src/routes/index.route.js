import employeeRoute from './employee.model'

export default (app) => {
    app.use('/', employeeRoute)

    app.use(async (req, res) => {
        return res.json(404)
    })
}