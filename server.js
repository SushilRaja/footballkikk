const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');

//yo vanda tala express app set up gareko

container.resolve(function (users) {

    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function () {
            console.log('Listening on port 3000....')

        });
        ConfigureExpress(app);
        //set routers users vitra ko setRouting vanne function bata gareko ho routing  ko kaam
        const router = require('express-promise-router')();
        users.setRouting(router);

        app.use(router);

    }



    function ConfigureExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));

    }

});