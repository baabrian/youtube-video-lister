"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var googleapis_1 = require("googleapis");
var params = {
    key: 'AIzaSyDrXcsT3pr05EGcZSvYoVlWnkXQZJ8uRjE',
    part: 'snippet',
    q: 'joji',
    maxResults: 10,
};
googleapis_1.google
    .youtube('v3')
    .search.list()
    .then(function (response) {
    console.log(response.data);
})
    .catch(function (er) {
    console.log(er);
});
