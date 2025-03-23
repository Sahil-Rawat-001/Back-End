// importing mongoose
import mongoose from 'mongoose';
const {Schema, model} = mongoose;


// creating schema
const blogSchema = new Schema({

    title: String,
    author: String,
    isPublished: Boolean,
})


// creating model based on schema
const Blog = model('blog', blogSchema);

export default Blog;
