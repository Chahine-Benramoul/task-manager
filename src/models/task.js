const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        description:{
            type:String,
            trim:true,
            required:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        }
    },
    {
        timestamps:true
    }
)




const Task = mongoose.model('Task', taskSchema)

module.exports = Task

// const taskone = new Task({
//     title:'Buy a wheel',
//     description:'Find the cheapest one haha...:)',
// })

// taskone.save().then(()=>{
//     console.log(taskone);
// }).catch((error)=>{
//     console.log('Error ', error);
// })