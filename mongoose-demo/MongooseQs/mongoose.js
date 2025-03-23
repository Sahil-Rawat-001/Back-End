
import mongoose from 'mongoose';
import Blog from './schema.js';


// connecting mongoose
mongoose.connect('mongodb://127.0.0.1:27017/BlogDatabase')
.then( () => console.log('Mongodb Connected....') )
.catch( (err) => console.log(`Error: ${err}`) );

// create a new Blog post object
const article = new Blog({

    title:  "The World",
    author: "Kite Doe",
    isPublished: true,
});


// Insert the article in mongodb 
await article.save();


// find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);

