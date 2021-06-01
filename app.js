const express = require('express')
const path = require('path')
const app=express()

let currentHour = new Date().getHours();

app.get('/', (req, res) => {
if ((currentHour>8) && (currentHour<17)) res.sendFile(__dirname + '/public/index.html')
else res.sendFile(__dirname + '/public/off.html')

});

app.get('/index.html', (req, res) => {
    if ((currentHour>8) && (currentHour<17)) res.sendFile(__dirname + '/public/index.html')
    else res.sendFile(__dirname + '/public/off.html')
    
    });

    app.get('/service.html', (req, res) => {
        if ((currentHour>8) && (currentHour<17)) res.sendFile(__dirname + '/public/service.html')
        else res.sendFile(__dirname + '/public/off.html')
        
        });

        app.get('/contact.html', (req, res) => {
            if ((currentHour>8) && (currentHour<17)) res.sendFile(__dirname + '/public/contact.html')
            else res.sendFile(__dirname + '/public/off.html')
            
            });

app.use(express.static(__dirname + '/public'))


app.listen(3000,(err)=>{
    if (err){
        throw err
    }
    else {
        console.log('run')
    }
})