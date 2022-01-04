/* {
    let partisipant = "likha"
    var racer = "widya"
}
//console.log(participant)
console.log(racer) */

/* function Button() {
    let value = 1  //bisa mengubah nilai
    const name = 'Submit' //const[ant] tidak bisa diubah
    // { //handler
    //     //name = 'Send'
    //     value = 100
    //     //var type = 'submit'
    // }
    function changeName (){ //handler
        //name = 'Send'
        value = 100
        //var type = 'submit'
    }
    changeName()
    //console.log(name)
    //console.log(type)
    console.log(value)
    return 'done'
}
Button() */


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
//nama-nama yg tidak bisa dipakai

/* let break = 1

console.log(new) */


//tamplate literal
/* `
widya
likha
`

function Button() {

    let value = 1
    const name = 'Submit'

    return `${name} - ${value}`
}

console.log(Button()) */


//array

/* let numbers = [1,2,3,4,5] //array
numbers.push(6)
numbers.unshift(6)
console.log(numbers) */

// 1, 2, 3, 4, 5 --> array number
// 'widya', 'nur', 'likha'  --> array string(nama)
// [{name: 'budi'}]  --> array object


/* let otherNumbers = [
    [
        [0, 
            [1, 9]
        ] , 2, 3 
    ],
    [4, 5],
    [6, 7, 8, 9]
]
console.log(otherNumbers[0])
console.log(otherNumbers[0][0])
console.log(otherNumbers[0][0][1])
console.log(otherNumbers[0][0][1][0]) */


/* const counter = {
    val: 0,
    increment(){
        this.val += 1
    }
}

console.log(counter)
counter.increment()
console.log(counter) */

////////////////////

/* let counter = {
    val: 0,
    increment: function(){
        this.val += 1
    }
}

let a = 4;
let b = 2;

// function () {
//     return a + b + 100;
// }

// let a = 4;
// let b = 2;
// () = a + b + 100;

// function(a){
//     return a + 100;
// }

(a) => a + 100;

a => a + 100; */

////////////////////////////////////////////////////
/* const classroom = {
    participants: ['widya', 'likha', 'nur'],
    session: 47,
    name: "FSD OCBC"
}

const {name, participants, session} = classroom

console.log(`
Halo ${name}
Kita masuk ke dalam sesi ${session}
patricipant ${participants.join(', ')}
`) */

///////////////////////////////////////////////////////////
/* function getClassroom (){
    return {
        participants: ['widya', 'likha', 'nur'],
        session: 47,
        name: "FSD OCBC"
    }
}

const { name, participants, session} = getClassroom()
console.log(`
Halo ${name}
Kita masuk ke dalam sesi ${session}
patricipant ${participants.join(', ')}
`) */

//////////////////////////////////////////////////////////
//Review Object Literal
/* let obj1 = {
    nama: "Agnes",
    umur: 20
}

let obj2 = {}
obj2.nama = "Flavia"
obj2.umur = 25

console.log(obj1)
console.log(obj2)

console.log(obj1.nama)
console.log(obj2.umur) */
////////////////////////////////////////
//Destructuring Object
//

/* const user = {}
user.name = 'Adi Nugroho';
user.handle = '@adinugroho';
user.location = 'Jakarta, Indonesia'; */

//
/* const user = {}
user.name = 'Adi Nugroho';
user.handle = '@adinugroho';
user.location = 'Jakarta, Indonesia';

//extraction
const name = user.name;
const handle = user.handle;
const location = user.location;
console.log(name, handle); */

//
/* const user = {};
user.name = 'Adi Nugroho';
user.handle = '@adinugroho';
user.location = 'Jakarta, Indonesia';

//extraction
const { name, handle, location } = user;
console.log(name, handle, location); */

//Destructuring Function Result
/* const getUser = () => {
    return {
        name: 'Adi Nugroho',
        handle: '@adinugroho',
        location: 'Jakarta, Indonesia'
    };
}

//extraction
const { name, handle, location } = getUser();
console.log(name, handle, location); */

////////////////////////////////
//Destructuring Array

let spec = ["Mercedes Benz", "Mercy", "GLA 200"]

let [brand, short_name, type] = spec
console.log(brand, short_name, type)