
import mongoose from 'mongoose';
import Blog from './schema.js';




// connecting mongoose
mongoose.connect('mongodb://127.0.0.1:27017/BlogDatabase')
.then( () => console.log('Mongodb Connected....') )
.catch( (err) => console.log(`Error: ${err}`) );


// we define each field and its data type. Permitted types are:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map



// ******************** Insertion Method one *******************


// create a new Blog post object
// const article = new Blog({

//     title:  "The World",
//     author: "Kite Doe",
//     isPublished: true,
// });


// Insert the article in mongodb 
// await article.save(); // Insertion method one


// find a single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);


// ************************ Insertion method two ********************

// create a new blog post and insert it into database

// const article = await Blog.create({

//     title: "Mountains & Goats",
//     author: "Ram Singh Shekhawat",
//     isPublished: false,
// });

// console.log(article);




// *************** Updating Data ***************************

// article.isPublished = true;
// await article.save();

// console.log(article);


// *************** Finding Data **************************


// const resultArticle = await Blog.findById('67dffca12fb8189b7d84d006', 'title isPublished').exec();
// console.log(resultArticle);



// **************** Deleting Data ************************

// const blog = await Blog.deleteOne({author: 'Ram Singh Shekhawat'});
const blog = await Blog.deleteMany({author: 'David Mcarthy'});
console.log(blog);