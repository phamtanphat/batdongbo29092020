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

function cong(a , b ){
  return new Promise((resolve,reject) => {
    const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return reject(error)
      if (!body.success) return reject(body.message)
      resolve(body.message)
    });
  })
}
function tru(a , b ){
  return new Promise((resolve,reject) => {
    const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return reject(error)
      if (!body.success) return reject(body.message)
      resolve(body.message)
    });
  })
}
function nhan(a , b , cb){
  return new Promise((resolve,reject) => {
    const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return reject(error)
      if (!body.success) return reject(body.message)
      resolve(body.message)
    });
  })
}
function chia(a , b , cb){
  return new Promise((resolve,reject) => {
    const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
    request(URL ,{json : true} , function (error, response, body) {
      if (error) return reject(error)
      if (!body.success) return reject(body.message)
      resolve(body.message)
    });
  })
}

// (3 + 2) * 2
// cong(3 , 2)
// .then(tong => nhan(tong , 2))
// .then(tich => console.log(tich))
// .catch(error => console.log(error))

// 5 - 4 + 1 / 2 

// tru(5 , 4)
// .then(hieu => cong(hieu , 1))
// .then(tong => chia(tong , 2))
// .then(thuong => console.log(thuong))
// .catch(error => console.log(error))

async function xuly(){
    try {
      const hieu  = await tru("a" , 4)
      console.log(hieu)
    } catch (error) {
      console.log(error)
    }
   
}
xuly()

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result.status)));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
