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


function getTempCity(cityName , cb){
    const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return cb(error)
      if (body.message) return cb(body.message)
      cb(null , body.main.temp)
    });
}

getTempCity('Hanoi',(error , temp) => {
    console.log(error || temp)
})