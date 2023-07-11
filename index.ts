// Question 1
// done

console.log(`\n-------------Question 2------------------`)
let personName: string = 'sanoodia asghar';
//  sanoodia asgher: 7/11/2023 
console.log(`Hello ${personName}, would you like to learn some Python today?`)

console.log(`\n-------------Question 3------------------`)
console.log(`Lowercase -- ${personName.toLowerCase()}\n`,
`Uppercase -- ${personName.toUpperCase()}\n`,
//  sanoodia asgher: 7/11/2023 
// this code spilt name string into array and then join back that array by replacing 
// first letter with uppercase
`Titlecase -- ${personName.toLowerCase().split(' ').map(word =>
     word.replace(word[0], word[0].toUpperCase())
    ).join(' ')}`)

console.log(`\n-------------Question 4------------------`)
console.log(`Winston S. Churchill once said, "Success is not final; failure is not fatal: It is the courage to continue that counts."`)

console.log(`\n-------------Question 5------------------`)
personName = 'Winston S. Churchill'
let message:string = `"Success is not final; failure is not fatal: It is the courage to continue that counts."`
console.log(`${personName} once said, ${message}`)

console.log(`\n-------------Question 6------------------`)
personName = `\n\tsanoodia asghar\t\n`;
console.log(personName)
console.log(personName.trim())

console.log(`\n-------------Question 7------------------`)
console.log(4+4)
console.log(16-8)
console.log(16/2)
console.log(4*2)

console.log(`\n-------------Question 8------------------`)
for(let i:number = 0; i<4; i++){
    console.log(5 + 3)
}

console.log(`\n-------------Question 9------------------`)
let favNum: number = 999;
console.log(`your favorite number is ${favNum}`)

console.log(`\n-------------Question 10------------------`)
console.log(`comment added at line 6 and 12`)

console.log(`\n-------------Question 11------------------`)
let names:string[] = ['fatima', 'mehreen', 'sonia'];
names.forEach(name => {
    console.log(name)
});

console.log(`\n-------------Question 12------------------`)
message = 'Hi,';
names.forEach(name => {
    console.log(`${message} ${name}`)
});

console.log(`\n-------------Question 13------------------`)
let favVehicles:string[] = ['Prius','Kia Sportage','Aqua']
favVehicles.forEach(vehicle=>{
    console.log(`I would like to own a ${vehicle} car`)
})

console.log(`\n-------------Question 14------------------`)
let guestList:string[] = ['Fatima','Mehreen','Sonia']
guestList.forEach(guest=>{
    console.log(`Dear ${guest}, You are invited for today's dinner`)
})

console.log(`\n-------------Question 15------------------`)
console.log(`${guestList[1]} not avaiable`)
guestList[1] = 'Saba'
guestList.forEach(guest=>{
    console.log(`Dear ${guest}, You are invited for today's dinner`)
})

console.log(`\n-------------Question 16------------------`)
console.log(`I found a bigger dinner table`)
guestList.unshift("Neha")
guestList.splice(guestList.length/2, 0, "Laraib");
guestList.push('iffet')
guestList.forEach(guest=>{
    console.log(`Dear ${guest}, You are invited for today's dinner`)
})

console.log(`\n-------------Question 17------------------`)
console.log(`I can invite only two people for dinner`)
while(guestList.length > 2){
    console.log(`sorry ${guestList.pop()} I can’t invite you to dinner`);
}
guestList.forEach(guest=>{
    console.log(`Dear ${guest}, You are still invited`)
})
guestList.length = 0
console.log(`empty array`, guestList)

console.log(`\n-------------Question 18------------------`)
let favPlaces:string[] = ['Makkah', 'Madina', 'Turkey', 'Switzerland', 'Canada'];
console.log(favPlaces)
console.log("Sorted Accending",[...favPlaces].sort((a,b)=>a.localeCompare(b)))
console.log("Orignal Array",favPlaces)
console.log("Sorted Decending",[...favPlaces].sort((a,b)=>b.localeCompare(a)))
console.log("Orignal Array",favPlaces)
console.log("Reverse Array",favPlaces.reverse())
console.log("Reversed Back Array",favPlaces.reverse())
console.log("Alphabetical order",favPlaces.sort((a,b)=>a.localeCompare(b)))
console.log("Reverse Alphabetical order",favPlaces.sort((a,b)=>b.localeCompare(a)))

console.log(`\n-------------Question 19------------------`)
console.log(`I have invited 2 people for a dinner`)

console.log(`\n-------------Question 20------------------`)
let days:string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log(days)

console.log(`\n-------------Question 21------------------`)
let daysObj:{[key: string]: string} = days.reduce((obj, cur) => ({...obj, [cur]: cur}), {})
console.log(daysObj)

console.log(`\n-------------Question 22------------------`)
let invalidIndex:string = days[7]
console.log(invalidIndex)

console.log(`\n-------------Question 23------------------`)
let car:string = 'subaru';
if(car === 'subaru'){
console.log("Is car == 'subaru'? I predict True.")
console.log(car === 'subaru')
}
//False Conitions
(0)?console.log(`tested condition (0) True`):console.log(`tested condition (0) False`);
(car.length < 5)?console.log(`tested condition (car.length < 5) True`):console.log(`tested condition (car.length < 5) False`);
(!car)?console.log(`tested condition (!car) True`):console.log(`tested condition (!car) False`);
(1 < 0)?console.log(`tested condition (1 < 0) True`):console.log(`tested condition (1 < 0) False`);
(0/1)?console.log(`tested condition (0/1) True`):console.log(`tested condition (0/1) False`);

//True Conitions
(1)?console.log(`tested condition (1) True`):console.log(`tested condition (1) False`);
(car.length > 5)?console.log(`tested condition (car.length > 5) True`):console.log(`tested condition (car.length > 5) False`);
(car)?console.log(`tested condition (car) True`):console.log(`tested condition (car) False`);
(0 === 0)?console.log(`tested condition (1 < 0) True`):console.log(`tested condition (1 < 0) False`);
(1/0)?console.log(`tested condition (1/0) True cuz its infinity`):console.log(`tested condition (1/0) False`);


console.log(`\n-------------Question 24------------------`);
("abc"==="abc")?console.log(`tested condition ("abc"==="abc") True cuz its infinity`):console.log(`tested condition ("abc"==="abc") False`);
("abc"!="abc")?console.log(`tested condition ("abc"!="abc") True cuz its infinity`):console.log(`tested condition ("abc"!="abc") False`);
("abc"!="ABC".toLowerCase())?console.log(`tested condition ("abc"!="ABC".toLowerCase()) True cuz its infinity`):console.log(`tested condition ("abc"!="ABC".toLowerCase()) False`);
(1 === 1)?console.log(`tested condition (1 === 1) True`):console.log(`tested condition (1 === 1) False`);
(1 !== 1)?console.log(`tested condition (1 !== 1) True`):console.log(`tested condition (1 !== 1) False`);
(1 > 1)?console.log(`tested condition (1 > 1) True`):console.log(`tested condition (1 > 1) False`);
(0 < 1)?console.log(`tested condition (0 < 1) True`):console.log(`tested condition (0 < 1) False`);
(0 <= 1)?console.log(`tested condition (0 <= 1) True`):console.log(`tested condition (0 <= 1) False`);
(1 >= 1)?console.log(`tested condition (1 >= 1) True`):console.log(`tested condition (1 >= 1) False`);
(typeof(1) === 'number' && 1>0)? console.log(`tested condition (typeof(1) === 'number' && 1>0) True`)
    :console.log(`tested condition (typeof(1) === 'number' && 1>0) False`);
(typeof(1)=== 'number' || 0>1)? console.log(`tested condition (typeof(1) === 'number' || 0>1) True`)
    :console.log(`tested condition (typeof(1) === 'number' || 0>1) False`);
(Array.isArray(['hello']))?console.log(`tested condition ((Array.isArray(['hello'])) True`)
    :console.log(`tested condition ((Array.isArray(['hello'])) False`);
(Array.isArray({0:'hello'}))?console.log(`tested condition ((Array.isArray({0:'hello'})) True`)
    :console.log(`tested condition ((Array.isArray({0:'hello'})) False`);

console.log(`\n-------------Question 25------------------`);
let alien_color:string = 'green';
if(alien_color === 'green'){
    console.log(`player just earned 5 points`)
}
alien_color= 'red';
if(alien_color === 'green'){
    console.log(`player just earned 5 points`)
}

console.log(`\n-------------Question 26------------------`);
if(alien_color === 'green'){ //red
    console.log(`player just earned 5 points for shooting the alien`)
}else{
    console.log(`player just earned 10 points`)
}
alien_color = 'green'
if(alien_color === 'green'){ //green
    console.log(`player just earned 5 points for shooting the alien`)
}else{
    console.log(`player just earned 10 points`)
}

console.log(`\n-------------Question 27------------------`);
const showPoints = (alien_color: string) =>{
    if(alien_color === 'green'){ //green
        console.log(`player earned 5 points`)
    }else if(alien_color === 'yellow'){
        console.log(`player earned 10 points`)
    }else{//for red
        console.log(`player earned 15 points`)
    }
}
showPoints('green');
showPoints('red');
showPoints('yellow');

console.log(`\n-------------Question 28------------------`);
const stagesOfLife = (age: number) =>{
    if(age < 2){
        console.log(`person is a baby`)
    }else if(age >= 2 && age < 4 ){
        console.log('person is a toddler')
    }else if(age >= 4 && age < 13 ){
        console.log('person is a kid')
    }else if(age >= 13 && age < 20 ){
        console.log('person is a teenager')
    }else if(age >= 20 && age < 65 ){
        console.log('person is an adult')
    }else{
        console.log('person is an elder')
    }
}

console.log(`\n-------------Question 29------------------`);
let favorite_fruits:string[] = ['banana','mango','peach'];
['apple','banana','cherry','peach','guava'].forEach(fruit => {
    if(favorite_fruits.indexOf(fruit) !== -1){
        console.log(`You really like ${fruit}!`)
    }
});

console.log(`\n-------------Question 30------------------`);
let userName:string[] = ['User1','User2','User3','Admin','User4']
userName.forEach(user => {
    if(user === 'Admin'){
        console.log('Hello admin, would you like to see a status report?')
    }else{
        console.log(`Hello ${user}, thank you for logging in again`)
    }  
});

console.log(`\n-------------Question 31------------------`);
userName = []
if(userName.length == 0){
    console.log('We need to find some users!')
}

console.log(`\n-------------Question 32------------------`);
let current_users:string[] = ['User1','User2','User3','Admin','User4']
let new_users:string[] = ['User1','USER2','User5']
new_users.forEach(userName => {
    if(current_users.indexOf(userName) !== -1){
        console.log(`${userName}, You will need to enter a new username`)
    }else
        console.log(`${userName}, username is available.`)
});

console.log(`\n-------------Question 33------------------`);
let ordinal_number :string[] = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th']
ordinal_number.forEach(number=>{
    console.log(number)
})

console.log(`\n-------------Question 34------------------`);
let pizzaNames :string[] = ['italian', 'BBQ','fajita']
pizzaNames.forEach(name=>{
    console.log(`I like ${name} pizza`)
})
console.log(`I really like pizzas \n pizza is best food item for celebration`)


console.log(`\n-------------Question 35------------------`);
let animals :string[] = ['dog', 'cat','goat']
animals.forEach(animal=>{
    console.log(`${animal}`)
})
console.log(`${animals[0]} and ${animals[1]} would make a great pet!`)

console.log(`\n-------------Question 36------------------`);
const make_shirt = (size:string, msg:string) =>{
    if(size.toLowerCase() === 'large' || size.toLowerCase() === 'midium'){
        console.log(`This shirt size is ${size} and "I love TypeScript" is written on it`)
    }else
        console.log(`This shirt size is ${size} and "${msg}" is written on it`)
}
make_shirt('small', 'wow');

console.log(`\n-------------Question 37------------------`);
make_shirt('large', 'abc');