// first req
// function twoParam(x, y){
// if(arguments.length !== 2){
//     throw" you should only give 2 args"
// }
// console.log(x,y)}
// twoParam(8,5,7)

//second req
// function add(){
//     let sum=0;
//     for(let i =0; i<arguments.length; i++){
//         if(typeof arguments[i] !== "number")
//         {throw" numbers only sorry :( "}
//         else
//         {
//           sum += arguments[i]
//         }
//     }  
//      return sum
//     }
//    let x= add(7,8,5,"l");
//    console.log(x);

//third req
// function reverse(){
//     let arr=[];
//     for(let i =0; i<arguments.length; i++){      
//         arr[i]= arguments[i]     
//     }    
//      return arr.reverse();
//     }
//    let x= reverse(7,8,5);
//    console.log(x);

// fourth req
// let x = 5;
// let y = 9;
// [x, y] = [y, x]
// console.log(x, y);

// fifth req
// function maxVal(...arr){
//     let max= Math.max(...arr)
//     let min= Math.min(...arr)
//     return [max, min];
//     }
//    let [maxv, minv]= maxVal(7,8,5,1,22,9);
//    console.log(maxv, minv);

// sixth req
// function f1(x, y){
//     if(x>3){
//         var z=3;
//     }
//     else{
//         var zz=3;
//     }
//     console.log(z,zz);
//     zzz=300;
// }
// f1(1,3);
// alert(zzz);


////////////// day3 lab /////////////////////////


// first

// let inp= prompt("enter to check for palindrome");
// let comf= confirm("do you want to consider cases?");
// let opWord= []
// let cond=false;
// console.log(comf);
// for(let i=0; i< inp.length; i++){
//     opWord.push(inp[inp.length-1-i])
// }

// for(let i=0; i< inp.length; i++){

//   if(comf){
//     if(inp[i]===opWord[i]){
//      cond=true;
//      continue;
//    }
//    else{
//     break;
//    }
   
//   }  
//   else {
//     if(inp[i].toLowerCase() == opWord[i].toLowerCase()){
//         cond=true;
//         continue;
//       }
//       else{
//        break;
//       }
//   } 
// }
// if(cond){
//     alert("it is a palindrome");
// }
// else {alert ("not a palindrome");}


//second
//2.1
// let num1= prompt("enter the 1st val");
// while(isNaN(num1)){
//     num1= prompt("Please enter a valid number");
// }
// let num2= prompt("enter the 2nd val");
// while(isNaN(num2)){
//     num2= prompt("Please enter a valid number");
// }
// let num3= prompt("enter the 3rdst val");
// while(isNaN(num3)){
//     num3= prompt("Please enter a valid number");
// }
// let arr=[];
// arr.push(num1);
// arr.push(num2);
// arr.push(num3);
// let add = (arr) => { 
//     let sum =0;
//     for(let i=0; i< arr.length; i++){ sum += parseInt(arr[i])} return sum};
// let multip = (arr) => { 
//     let mul =1;
//     for(let i=0; i< arr.length; i++){ mul *=  parseInt(arr[i])} return mul};

// let div = (arr) => { 
//     let div =1;
//     for(let i=0; i< arr.length; i++){ div /= parseInt(arr[i])} return div};

// let a= add(arr);
// let m= multip(arr);
// let d=div(arr);
// console.log(a, m, d);
// document.write(`<span style="color: red"> the sum is: ${a}<br>the multiplacation is: ${m}<br>the division is: ${d}<br> </span>`);

//2.2

// let num1= prompt("enter the 1st val");
// while(isNaN(num1)){
//     num1= prompt("Please enter a valid number");
// }
// let num2= prompt("enter the 2nd val");
// while(isNaN(num2)){
//     num2= prompt("Please enter a valid number");
// // }
// // let num3= prompt("enter the 3rdst val");
// // while(isNaN(num3)){
// //     num3= prompt("Please enter a valid number");
// // }
// // let num4= prompt("enter the 4th val");
// // while(isNaN(num4)){
// //     num4= prompt("Please enter a valid number");
// // }
// // let num5= prompt("enter the 5th val");
// // while(isNaN(num5)){
// //     num5= prompt("Please enter a valid number");
// // }
// // document.write(`<span style="color: red"> you have entered the following: ${num1},${num2},${num3},${num4},${num5} <br> </span>`);
// // let arr=[];
// // arr.push(num1);
// // arr.push(num2);
// // arr.push(num3);
// // arr.push(num4);
// // arr.push(num5);
// // let aSort= arr.sort((a,b) => a-b);
// // let arrd=[...aSort]
// // let dSort= arrd.reverse();
// // document.write(`<span style="color: red"> the ascending order is: ${aSort}<br>the descending order is: ${dSort} </span>`);


// //third

// let askno= prompt("enter number of people");
// while(isNaN(askno) || parseInt(askno)<=0){
//     askno= prompt("Please enter a valid number");
// }
// let count=parseInt(askno);
// let username=[];
// let userage=[];
// let i=0;
// do{
//     let person= prompt("enter person name");
//     while((person.length<4 ) || (person.length>9 ) ){
//         person= prompt("Please enter a person name more than 3 and less than 10 char");
//     }
//     let age = prompt("enter person age");
//     age= parseInt(age);
//     while((age<10) || (age>59 ) || isNaN(age) ){
//         age= prompt("Please enter a valid person age between 10 and 60 ");
//         age= parseInt(age);
//     }    
//     username.push(person);
//     userage.push(age);
//     i++;
//     } while(i<count)

// document.write("<table border='1'>");
// document.write("<thead> <tr> <th> Name </th> <th> Age </th> </tr> </thead>");
// document.write("<tbody>")
// for(let i=0; i<count; i++){
//     document.write("<tr>")
  
//     document.write(`<td> ${username[i]} </td> <td> ${userage[i]} </td> `)
    
//     document.write("</tr>")
// }
// document.write("</tbody>")
// document.write("</table>")

//////////////////////////Day4///////////////////
// first 
// function Rect(hight, width){
//     this.hight=hight;
//     this.width=width;
//     let area;
//     let perim;
//     this.calcArea= function(){
//         area= this.hight*this.width
//         return area;
//     };
//     this.calcPerim= function(){
//         perim= (2*this.hight)+(2*this.width);
//         return perim;
//     };
//     this.displayInfo= function(){
//         console.log(this.hight, this.width, area, perim);
//     };
// }

// let rect= new Rect(10,20);
// rect.calcArea();
// rect.calcPerim();
// rect.displayInfo();

//second 

// let objectt={
//     id:"58",
//     nam:"sa",
//     loc:"58st.",
//     disp:function(){
//         console.log("hello");
//     },

//     getSetGen: function(myObj){
//         for(key in myObj){
//             // console.log(key, myObj, myObj[key], "hi");
//             if(typeof myObj[key]!=='function'){
//                 Object.defineProperty(this, key , {
//                     get: function(){
//                         return myObj[key];
//                     },
//                     set: function(val){
//                         myObj[key]= val;
//                     },
//                     // enumerable,
//                     // configurable,
//                 });
//             }
//         }

    
//     },
// };

// let anotherObj ={
//     name: "loly",
//     mynum: 25,
//     id: "89j",
//     display: function(){
//         console.log("hii");

//     },
// }
// // anotherObj.id="22";
// // anotherObj.name="sara"

// objectt.getSetGen({id: "78", nam:"sara"});
// console.log(objectt)
// objectt.getSetGen.call(anotherObj, {name: "ssss", mynum:98})
// console.log(anotherObj)

/////////////////////////day5//////////////////

//first old

// function Rect(hight, width){
//     this.hight=hight;
//     this.width=width;
//     let area;
//     let perim;
//     Rect.count++;
//     this.calcArea= function(){
//         area= this.hight*this.width
//         return area;
//     };
//     this.calcPerim= function(){
//         perim= (2*this.hight)+(2*this.width);
//         return perim;
//     };
//     this.displayInfo= function(){
//         console.log(this.hight, this.width, area, perim);
//     };
//     this.toString= function(){
//        return `W: ${this.width}, H:${this.hight}, Area:${area}, Per:Area:${perim} `
//     };

// }
// Rect.count=0;
// Rect.getNumOfRect=function(){
// return Rect.count;
// };

// let rect= new Rect(10,20);
// rect.calcArea();
// rect.calcPerim();
// rect.toString();
// console.log(rect.toString())

// let rect2= new Rect(10,50);
// rect2.calcArea();
// rect2.calcPerim();
// rect2.toString();
// console.log(rect2.toString())

// console.log("numbers of created rects are: "+Rect.getNumOfRect());

// // first new
// class Rect{
    
//     constructor(w, h){
//         this.width=w;
//         this.height= h;
//         Rect.count++;
//     }
//     static count=0;
//     calcArea(){
//        // area= this.height*this.width
//         return this.height*this.width;
//     }
//     calcPerim(){
//         //perim= (2*this.hight)+(2*this.width);
//         return (2*this.height)+(2*this.width);
//     }
//     displayInfo(){
//          console.log(this.height, this.width, this.calcArea(), this.calcPerim());
//     }
//     toString(){
//         return `W: ${this.width}, H:${this.height}, Area:${this.calcArea()}, Per:Area:${this.calcPerim()} `
//     }
//     static getNumOfRect(){
//        return Rect.count;
//     }

// }

// let rect= new Rect(10,20);
// rect.calcArea();
// rect.calcPerim();
// rect.toString();
// console.log(rect.toString())

// let rect2= new Rect(10,50);
// rect2.calcArea();
// rect2.calcPerim();
// rect2.toString();
// console.log(rect2.toString())

// console.log("numbers of created rects are: "+Rect.getNumOfRect());

// second old 
// function Shape(h, w){
//    if (this.constructor === Shape){
//     throw " Shape is an abstract class!"
//    }
//    this.height=h;
//    this.weidth=w;
// // }

// // //let sh= new Shape(10,20);

// // function Rect(hight, width){
// //     Shape.call(this, hight, width)
// //     // this.height=hight;
// //     // this.weidth=width;
// //        if(Rect.count >= 1 && this.constructor === Rect){
// //         throw `There are more than one Rects are creared ! only one is allowed`
// //         }
// //        Rect.count++;
// //     let area;
// //     let perim;
// //     this.calcArea= function(){
// //         area= this.height*this.weidth
// //         return area;
// //     };
// //     this.calcPerim= function(){
// //         perim= (2*this.height)+(2*this.weidth);
// //         return perim;
// //     };
// //     this.displayInfo= function(){
// //         console.log(this.height, this.weidth, area, perim);
// //     };
// //     this.toString= function(){
// //        return `W: ${this.weidth}, H:${this.height}, Area:${area}, Per:Area:${perim} `
// //     };

// // }
// // Rect.count=0;
// // Rect.prototype= Object.create(Shape.prototype);
// // Rect.prototype.constructor=Rect;

// // let rect= new Rect(10,20);
// // rect.calcArea();
// // rect.calcPerim();
// // rect.toString();
// // console.log(rect.toString())

// // // let rect2= new Rect(10,50);
// // // rect2.calcArea();
// // // rect2.calcPerim();
// // // rect2.toString();
// // // console.log(rect2.toString())

// // function Square(len){
// //     Rect.call(this,len, len);
// //     if(Square.count >= 1){
// //         throw `There are more than one Squares are creared ! only one is allowed`
// //        }
// //         Square.count++;
// // }
// // Square.count=0
// // Square.prototype= Object.create(Rect.prototype);
// // Square.prototype.constructor=Square;

// // let sqr= new Square(10);
// // sqr.calcArea();
// // sqr.calcPerim();
// // sqr.toString();
// // console.log(sqr.toString())

// // let sqr2= new Square(10,20);
// // sqr2.calcArea();
// // sqr2.calcPerim();
// // sqr2.toString();
// // console.log(sqr2.toString())

// //second new
// class Shape{
    
//     constructor(w, h){
//         if(this.constructor === Shape){
//             throw ` This is an abstract class!;`
//         }
//         this.width=w;
//         this.height= h;
//     }
// }
// // let sh= new Shape(10,20);

// class Rect extends Shape{
    
//     constructor(w, h){
//        super(w, h)
//        if(Rect.count >= 1 && this.constructor === Rect){
//         throw `There are more than one Rects are creared ! only one is allowed`
//        }
//         Rect.count++;
//     }
//     static count=0;
//     calcArea(){
//        // area= this.height*this.width
//         return this.height*this.width;
//     }
//     calcPerim(){
//         //perim= (2*this.hight)+(2*this.width);
//         return (2*this.height)+(2*this.width);
//     }
//     displayInfo(){
//          console.log(this.height, this.width, this.calcArea(), this.calcPerim());
//     }
//     toString(){
//         return `W: ${this.width}, H:${this.height}, Area:${this.calcArea()}, Per:Area:${this.calcPerim()} `
//     }
//     static getNumOfRect(){
//        return Rect.count;
//     }

// }
// Rect.count=0;

// let rect= new Rect(10,20);
// rect.calcArea();
// rect.calcPerim();
// rect.toString();
// console.log(rect.toString())

// // let rect2= new Rect(10,50);
// // rect2.calcArea();
// // rect2.calcPerim();
// // rect2.toString();
// // console.log(rect2.toString())

// class Square extends Rect{
//     constructor(l){
//         super(l, l)
//         if(Square.count >= 1){
//          throw `There are more than one Sqaures are creared ! only one is allowed`
//         }
//         Square.count++;
//     }
    
    
// }
// Square.count=0;


// let sqr= new Square(10);
// sqr.calcArea();
// sqr.calcPerim();
// sqr.toString();
// console.log(sqr.toString())

// // let sqr2= new Square(10);
// // sqr2.calcArea();
// // sqr2.calcPerim();
// // sqr2.toString();
// // console.log(sqr2.toString())

//third
// class Book{
//     constructor(title, type, numOfChapters, author, numOfPages, publisher, numOfCopies){
//         this.title= title;
//         this.type=type;
//         this.numOfChapters= numOfChapters;
//         this.author= author;
//         this.numOfPages= numOfPages;
//         this.publisher=publisher;
//         this.numOfCopies=numOfCopies;
//     }
// }

// class box{
//     constructor(height, weidth, length, material){
//         this.height= height;
//         this.weidth=weidth;
//         this.length= length;
//         this.numOfBooks= 0;
//         this.material=material;
//         this.content=[];
//     }
//     static totalBooks=0;
//     countBooks(){
//         return this.numOfBooks;
//     }
//     addBook(title, type, numOfChapters, author, numOfPages, publisher, numOfCopies){
//      let book= new Book (title, type, numOfChapters, author, numOfPages, publisher, numOfCopies)
//      this.content.push(book);
//      this.numOfBooks++;
//      box.totalBooks ++;
//     }
//     deleteBook(name){
//      let findb= this.content.findIndex(book => book.title === name);
//      if (findb !== -1){
//         this.content.splice(findb,1);
//         this.numOfBooks--;
//         box.totalBooks--;
//         return true;
//      }
//      else return false; 
//     }
//     calcVolume(){
//         return this.height * this.weidth * this.length 
//     }
//     toString(){
//         let info= `Box Dimension is ${this.height}, ${this.weidth}, ${this.length} \n`;
//         this.content.forEach(book => {info +=`- ${book.title} \n`}); 
//         return info;

//     }
//      valueOf(){
//       return box.totalBooks;
//     }
// }

// let box1= new box( 10, 9, 6, "Plastic");
// box1.addBook("sara", "romance", 6, "hh", 589, "kk", 7);
// box1.addBook("dodo", "romance", 6, "hh", 589, "kk", 7);
// console.log(box1.toString());
// let check = box1.deleteBook("sara");
// if(check)
// {console.log(box1.toString());}
// else { console.log("the book you entered is not found"); }
// let box2= new box( 50, 9, 6, "Plastic");
// box2.addBook("jojo", "romance", 6, "hh", 589, "kk", 7);
// console.log(box2.toString());
// console.log(box1.valueOf())

// //fourth
// var fruits=["apple", "strawberry", "banana", "orange", "mango"];
// let areAllString= fruits.every(fru => typeof fru === 'string')
// console.log("are they all strings?" + areAllString);
// let startWithA= fruits.some(fru => fru.startsWith('a'))
// console.log("are some of them start with letter a ?" + startWithA);
// let filtter= fruits.filter(fru => fru.startsWith('b') || fru.startsWith('s') )
// console.log("Filtered fruites are " + filtter);
// let iLike= fruits.map(fru =>` I Like ${fru}`).forEach( fru => console.log(fru))

// ////////////////////day6//////////////////

let postContainer= document.querySelector(".postContainer");
let btnContainer= document.querySelector(".container");

async function userPosts(id){
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return data.json();
}
fetch("https://jsonplaceholder.typicode.com/users").then(
    response =>{
     return response.json();
    } 
    ).then(
     users => {
     console.log(users);
     users.forEach(user => {
        let btn = document.createElement("button");
        btn.textContent= user.name;
        btn.classList.add("btn")
        btn.addEventListener("click", async function(){ 
           let posts= await userPosts(user.id);
           postContainer.innerHTML="";
           posts.forEach(post => {
            let postE= document.createElement("div");
            postE.classList.add("post");
            postE.innerHTML= `<h3>${post.title}</h3> <p>${post.body}</p>`

            postContainer.appendChild(postE);
           })
           

        })
        btnContainer.appendChild(btn);
     });
    }
   ).catch( () => {
    console.log("somthing went wrong in fetching users" );
   });

//////////Day 7////////////////////////

// first
// import Rect from "./Shapes/Rect.js";
// import Square from "./Shapes/Square.js";
// import Circle from "./Shapes/Circle.js";

// let rect= new Rect(10,20);
// rect.calcArea();
// rect.calcPerim();
// rect.toString();
// console.log(rect.toString())

// let sqr= new Square(10);
// sqr.calcArea();
// sqr.calcPerim();
// sqr.toString();
// console.log(sqr.toString())

// let cir= new Circle(10);
// cir.calcArea();
// cir.calcPerim();
// cir.toString();
// console.log(cir.toString())

//second

// let object={
//    name:"Sara",
//    age:23,
//    address:"ji-9d"
// };
// let handler={
//    set: function(target, prop, val,  proxy){
//       if(!(prop in target)){
//        throw "this property in not found "
//       }
//       if(prop == "name"){
//        if(val.length !== 7){
//          throw "cant set name length with anything exept 7char length"
//        }
//        return target[prop]=val;
//       }
//       if(prop == "address"){
//          if(typeof val !== "string"){
//             throw " address should be string"
//          }
//          return target[prop]=val;
//       }
//       if(prop == "age"){
//          if(typeof val !== "number"){
//             throw " address should be number"
//          }
//          if( val > 60 || val < 25){
//             throw " age should be between 25-60"
//          }
//          return target[prop]=val;
//       }
   

//    }
// }
// let p= new Proxy(object, handler)
// p.name="helouit"
// // p.name="helout"
// // p.name="helouitt"
// p.age=28
// // p.age=13
// // p.age=70
// // p.age="helouit"
// p.address="helouit475-j"
// // p.address=57
// console.log(object);

//third

// function* fibSeries(val){
//    let first=0;
//    let sec=1;
//    let i=0;
//    while(i < val){
//       yield first;
//       let temp=first;
//       first = sec;
//       sec= temp + sec; 
//       i++;
//    }
// }

// let fibS=fibSeries(10);
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());

// function* fibSeries(val){
//    let first=0;
//    let sec=1;
//    while(first <= val){
//       yield first;
//       let temp=first;
//       first = sec;
//       sec= temp + sec; 
//    }
// }

// let fibS=fibSeries(19);
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());
// console.log(fibS.next());

//fourth

// let object={
//    name: "sara",
//    age: 23,
//    address: "jo-7",
//    *[Symbol.iterator](){
//       for(let key in this){
//          yield [key, this[key]];
//       }
//    }
// }

// for( let key of object){
//   console.log(`${key} `);
// }