/* function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result); */



/////////////////////////////////////////////////////////////////


/* function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer); */

/////////////////////////////////////////////////////////////////////

//Darkside of Callback

/* fs.readFile('content1.txt', 'utf-8', (err, content1) =>{
    if (eff) throw eff
    fs.readFile('content2.txt', 'utf-8', (err, content2) =>{
        if (eff) throw eff
        fs.readFile('content3.txt', 'utf-8', (err, content3) =>{
            if (eff) throw eff
            fs.readFile('content4.txt', 'utf-8', (err, content4) =>{
                if (eff) throw eff
                fs.writeFile('result.txt', content1 + content2 + content3 + content4, err =>{
                    if (err) throw err
                    console.log('Writting done')
                })
            })
        })
    })
}) */


//Callback vs Promise
//Callback style
/* setTimeout(function() {
    myFunction("I love you !!!")
})
function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}
//Promise style
let myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){
        myResolve("I love you !!");
    }, 3000);
})
myPromise
    .then(function(value){
        document.getElementById("demo").innerHTML = value;
    }); */

//callback style
/* doSomething(function(result){
    doSomethingElse(result, function(newResult){
        doThirdThing(newResult, function(finalResult){
            console.log('Got the first: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback); */









/* function display (value){
    console.log(value)
}

function calculator(number1, number2, callback){
    const result = number1 + number2
    callback(result)
}

const displayVar = function (value){
    console.log(value)
}
//calculator(10, 15, function(){})
calculator(10, 15, display)
console.log(display)

calculator(10, 15, function (result) {
    console.log(result)
})
calculator(10, 15, (value) => {
    console.log(value)
})

// 1. masukkan parameter angka sama function
// 2.  */


//promise
function buatJanji(message){
    return new Promise((resolve, reject) => {
        if(message == '') return reject('Isi janji diisi')
        return resolve('berhasil ditempati')
    })
}

function ambilData(){
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typpicode.com/todos')
        .then(result => {
            resolve(result)
        })
        .catch(error => {
            reject(error)
        })
    })
}


console.log(buatJanji('adakan kelas akhir tahun'))