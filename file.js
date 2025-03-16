// for file handling we need fs module fs stands for file system

// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files

// importing fs module

const fs = require('fs');
const os = require('os');


// File creation

// The fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created:

// writeFileSync means it is a synchronus call
// fs.writeFileSync(filename, file-content)

// code
// fs.writeFileSync('./new.txt', 'this is content of file');

// Async call
// fs.writeFile(filename, file-content, function to handle error)


// code
// fs.writeFile('./newfiletwo.txt', 'This is content and I am content creator', (err) => {

//     if(err) throw err;
//     console.log('saved');
// });








// file read

// const result = fs.readFileSync('./contact.txt', "utf-8");
// console.log(result);

// first difference between readFileSync and readFile is that , the readFileSync return the result and we can store it.
// But the readFile does not return result

// async file read
// fs.readFile('./contact.txt', 'utf-8', (err, result) => {

//     if(err) throw err;
//     console.log(result);
// });





// File Updating 

// fs.appendFile() method appends the specified content at the end of the specified file:
// fs.appendFileSync('./new.txt', 'This is new text \n');





// file delete

// The fs.unlink() method deletes the specified file:
// fs.unlinkSync('filename', function to handle error)
// fs.unlinkSync('./contact.txt');




// file rename
// fs.rename('./new.txt','./newfileone.txt', (err) => {

//     if(err) throw err;
//     console.log('renamed');
// });





console.log(os.cpus().length);