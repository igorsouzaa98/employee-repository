import connection from './sequelize'
import Employees from './models/EmployeesModel'


export const initdb = async ()=>{
    Promise.all([
        await connection(),
        console.log('Synchronizing tables...'),
        await Employees.sync({alter:true}),

    ]).then(()=>{
        console.log('Successfully synchronized tables')
    })
}