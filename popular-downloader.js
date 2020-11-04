const fs = require('fs');
const path = require('path');
const rp = require('request-promise')


const downloadsPath = path.join(__dirname, '/downloads');

rp('https://www.reddit.com/r/popular.json')
    .then(downloads => {

        const list = JSON.parse(downloads);

        list.data.children.forEach(post => {
            const ext = path.extname(post.data.url)
            if (ext === '.jpg' || ext === '.png') {
                rp(post.data.url, { encoding: 'base64' }).then(media => {

                    fs.writeFile(path.join(__dirname, `./downloads/${post.data.id}${ext}`), media, { encoding: 'base64' } ,err => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    });
                })
            }
        })
    })
    .catch(e => console.log(e));



// console.log(path.extname(albumsPath)) // you can use this to filter or find files by their extension name