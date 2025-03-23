const express  = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 8080;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// backend server connection
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase-1')
.then(() => console.log('Mongodb connected...'))
.catch((err) => console.log("Mongo Error", err));


// creating schema
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    jobTitle: {
        type: String,
    }
}, {timestamps: true});

// create model on the basis of shcema
const User = mongoose.model('user', userSchema);


// get request
app.get('/', async(req,res) => {

    const allDbUsers = await User.find({});

    const html = `

    <ul>
        ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")};
    </ul>

    `
    return res.status(200).send(html);
})


app.route('/users/:id')
.get( async(req,res) => {

    const user = await User.findById(req.params.id);

    if(!user) return res.status(404).json({error: 'Not found'});
    return res.status(200).json(user);
})
.patch( async(req,res) => {

    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"});
    return res.status(200).json({status: 'Success'});
})
.delete( async(req,res) => {

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg: 'deleted'});
})


// post request
app.post('/users', async(req,res) => {
    
    const body = req.body;
    

    if(!body ||
       !body.first_name ||
       !body.last_name ||
       !body.email ||
       !body.gender ||
       !body.job_title
    ){
        return res.status(400).json({msg: "All fields required..."});
    }
     
    const result  = await  User.create({

        firstName: body.first_name,
        lastName : body.last_name,
        email    : body.email,
        gender   : body.gender,
        jobTitle: body.job_title,
    });

    console.log(result);

    return res.status(201).json({msg: "Success"});
})


app.listen(PORT, (err) => {

    if(err) console.log(`Error: ${err.message}`);
    console.log(`Server started on Port: ${PORT}...`);
})