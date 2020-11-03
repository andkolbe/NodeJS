const fs = require('fs');
const path = require('path');
const rp = require('request-promise')


const downloadsPath = path.join(__dirname, '/downloads');

rp('https://www.reddit.com/r/popular.json')
.then(downloads => {

    const list = JSON.parse(downloads);

    const myDownloadData = list.data.children.map(post => {
        console.log(post.data)

        const jpg = path.extname
    })
})




// console.log(path.extname(albumsPath)) // you can use this to filter or find files by their extension name