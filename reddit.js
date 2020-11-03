const fs = require('fs'); // file system
const path = require('path');
const rp = require('request-promise');

const redditPath = path.join(__dirname, './data/popular-articles.json')

rp('https://www.reddit.com/r/popular.json')
.then(raw => {
    
    const list = JSON.parse(raw);

    const myRedditData = list.data.children.map(post => {
        return { title: post.data.title, url: post.data.url_overridden_by_dest, author: post.data.author_fullname };
    })

    // execute writeFile inside of the chain. It must work after the callback function connected to .then
    fs.writeFile(redditPath, JSON.stringify(myRedditData), err => {
        if (err) {
            console,log(err);
            return;
        }
    });
})

