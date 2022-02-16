const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'file1.txt'), 'file 1', (err) => {
    if(err) {
        console.log(err);
        throw  err;
    }
    fs.readFile(path.join(__dirname, 'file1.txt'), 'utf8', (err , data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(path.join(__dirname, 'file2.txt'), data, (err) => {
            if(err) {
                console.log(err);
                throw err;
            }
        })
    })
})

fs.readFile(path.join(__dirname,'file3.txt'), 'utf8', (err, data) => {
    if(err) {
        console.log(err);
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'newFolder'), (err) =>{
        if(err) {
            console.log(err);
            throw err
        }
        fs.writeFile(path.join(__dirname, 'newFolder', 'file4.txt'), data, (err) => {
            if(err) {
                console.log(err);
                throw err;
            }
            fs.unlink(path.join(__dirname,'file3.txt') , (err) => {
                if(err) {
                    console.log(err);
                    throw err;
                }
            })
        })
    })
})
fs.mkdir(path.join(__dirname, 'folder'), (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});
fs.mkdir(path.join(__dirname, 'folder', 'users'), (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});
fs.mkdir(path.join(__dirname, 'folder', 'posts'), (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});
fs.mkdir(path.join(__dirname, 'folder', 'comments'), (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});

fs.writeFile(path.join(__dirname, 'folder', 'item1.txt'),'item 1', (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});
fs.writeFile(path.join(__dirname, 'folder', 'item2.txt'),'item 2', (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});
fs.writeFile(path.join(__dirname, 'folder', 'item3.txt'),'item 3', (err) => {
    if(err) {
        console.log(err);
        throw err;
    }
});

function editFolder () {
    fs.readdir(path.join(__dirname, 'folder'), 'utf8', (err, data) => {
        if(err) {
            console.log(err);
            throw err;
        }
        for (let item of data) {
            if (item.endsWith('.txt')) {
                fs.truncate(path.join(__dirname, 'folder', item), (err) => {
                    if(err) {
                        console.log(err);
                        throw err;
                    }
                })
            } else {
                fs.rename(path.join(__dirname, 'folder', item), path.join(__dirname, 'folder', `new_${item}`), (err) =>{
                    if(err) {
                        console.log(err);
                        throw err;
                    }
                })
            }
        }
    })
}
editFolder();