// Lets create Js Objects

let x; // variable declearation
x = [{
    name:'Deepak',
    'surname':"Jha",
    address:'Kashipur'
}];

var friends=['Sunil',"Mohan",'Sohan',`Rahul`];

x.forEach(element => {
    console.log(element.name);  
    console.log(element.surname);  
    console.log(element.address); 
    console.log(element);
});

friends.forEach(element =>{
    console.log('My Friends is ' + element);
});

let teachers =['Prabhat Sir', "Anil Sir", `Sumit Sir`];

/*
    for (singular of plural){

    }
*/
for (teacher of teachers) {
    // code block to be executed
    console.log('My Teacher Name is ' + teacher);
}