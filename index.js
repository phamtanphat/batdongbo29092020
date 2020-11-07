// let a = 5
// xuly(function(value){
//     console.log(value)
// })

// function xuly(cb){
//     setTimeout(() => {
//         a = 10
//         cb(a)
//     },1000)
// }
const request = require('request');


// function getTempCity(cityName , cb){
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
//     request(URL ,{json : true} , function (error, response, body) {
//       if (error) return cb(error)
//       if (body.message) return cb(body.message)
//       cb(null , body.main.temp)
//     });
// }

// getTempCity('Hanoi',(error , temp) => {
//     console.log(error || temp)
// })

function cong(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return cb(error)
      if (!body.success) return cb(body.message)
      cb(null , body.message)
    });
}
function tru(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return cb(error)
      if (!body.success) return cb(body.message)
      cb(null , body.message)
    });
}
function nhan(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return cb(error)
      if (!body.success) return cb(body.message)
      cb(null , body.message)
    });
}
function chia(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return cb(error)
      if (!body.success) return cb(body.message)
      cb(null , body.message)
    });
}

// cong( 3 , 5 , (error , result) => console.log(error || result))