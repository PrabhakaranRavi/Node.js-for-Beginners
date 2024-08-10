//https://nodejs.org/docs/latest-v17.x/api/fs.html#fswritefilefile-data-options-callback
//https://nodejs.org/api/fs.html#fs_file_system_flags
//https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options

const fs = require('fs');

let data = '//Writing a data in data.txt';

let options = {
    encoding: 'utf8',
    flag: 'w'
}

fs.writeFile('data.txt', data, options, (err) => {
    if (err) throw err;
    console.log("The file has been saved")
})


/**
 * Now, let's see what happens when the writeFile API is called when the file is already created and it initially has some text inside it.
 */

const dataForSync = 'Hi there! I am learning Node.js'

try {
    fs.writeFileSync('data1.txt', dataForSync, options);
} catch (err) {
    throw err;
}


//https://kunststube.net/encoding/

//https://www.w3.org/International/questions/qa-choosing-encodings#useunicode

//https://2ality.com/2015/04/numbers-math-es6.html#use-case-for-octal-literals-unix-style-file-permissions