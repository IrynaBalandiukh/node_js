require('path');
const fs = require('fs');
const path = require("path");

const onlineUsers = [
    {
        name: 'Ira',
        age: 26,
        city: 'Lviv'
    },
    {
        name: 'Sasha',
        age: 25,
        city: 'Ovruch'
    },
    {
        name: 'Roman',
        age: 23,
        city: 'Kyiv'
    },
    {
        name: 'Olya',
        age: 21,
        city: 'Khakiv'
    },
    {
        name: 'Taras',
        age: 26,
        city: 'Odesa'
    }
];

const inPersonUsers = [
    {
        name: 'Oleh',
        age: 28,
        city: 'Rivne'
    },
    {
        name: 'Katya',
        age: 26,
        city: 'Zaporizhia'
    },
    {
        name: 'Yulia',
        age: 24,
        city: 'Lviv'
    },
    {
        name: 'Nazar',
        age: 19,
        city: 'Zhytomyr'
    },
    {
        name: 'Maria',
        age: 25,
        city: 'Kyiv'
    }
];

fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        console.log(err);
        throw err
    }
})
fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
    if (err) {
        console.log(err);
        throw err
    }
    fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), '',
        (err) => {
            if (err) {
                console.log(err);
                throw err
            }
            for (let i = 0; i < onlineUsers.length; i++) {
                fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'),
                    `\nName: ${onlineUsers[i].name} \nAge: ${onlineUsers[i].age} \nCity: ${onlineUsers[i].city} \n`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            throw err
                        }
                    })
            }
        })
})
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
    if (err) {
        console.log(err);
        throw err
    }
    fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), '',
        (err) => {
            if (err) {
                console.log(err);
                throw err
            }
            for (let i = 0; i < inPersonUsers.length; i++) {
                fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
                    `\nName: ${inPersonUsers[i].name} \nAge: ${inPersonUsers[i].age} \nCity: ${inPersonUsers[i].city} \n`,
                    (err) => {
                        if (err) {
                            console.log(err);
                            throw err
                        }
                    })
            }
        })
})

function replaceUsers() {
    fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${data.toString()}`, {flag: 'w'}, (err) => {
            if (err) {
                console.log(err)
            }
        })
    })

    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${data.toString()}`, {flag: 'w'}, (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
}

replaceUsers();  
