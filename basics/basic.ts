
// 1
/*
let n1 = 12;
let n2 = 23;
const id: number = 123;

function cal(n1: number, n2: number){
    return n1+n2;
}

console.log(cal(n1, n2));
*/


// 2
/*
function cal(numbers: number[]){
    function cal(numbers: Array<number>){
        return numbers.reduce((total, item) => {
            return total+item;
        }, 0)
}
function cal(numbers: Array<number>){
    return numbers.reduce((total, item) => {
        return total+item;
    }, 0)
}

console.log(cal([3, 2, 1]));
*/



// -----------------------------------------------------
// 3 Type alias;
/*
// type: string, boolean, number, string[], number[]
// Type alias; is used to create custom types
// We can create our own type 


type User = {
    name: string,
    age: number,
    address?: string, // optional either string or undefined
}

let user: User = {
    name: 'Ainl',
    age: 32,
}

function func(userData: User){
    
}

type ID = number | string;
const userID: ID = 'las;dfljas';

*/




/*
// function return type: 
type User = {
    name: string,
    age: number,
    address?: string, // optional either string or undefined
}


function func(name, age, address = undefined): User{
    return {name, age, address};
}
function func1(name, age, address = undefined): void{
    
    console.log('hleeo');
}
*/

// -----------------------------------------------------
// 4 Interfaces - it is used to define the shape of the object. like type alias

/*
interface Transaction {
    sender: string,
    receiver: string,
}

interface backAccount{
    balance: number,
    transactions: Transaction[],
}

const a: Transaction = {
    sender: 'anil',
    receiver: 'ram',
}
const b: Transaction = {
    sender: 'anil',
    receiver: 'ram',
}

const checking: backAccount = {
    balance: 23,
    transactions: [a, b],
}
*/


/*
// Extend other interface properties

interface book{
    name: string,
    price: number,
}

interface eBook extends book{
    // name: string,  -  we don't have duplicate this now
    // price: number,  -  we don't have duplicate this now
    fileSize: number,
}
*/

/*
// Merge: if you have two same name's interfaces it will merge them rather than overiding
interface book {
    name: string,
}

interface book{
    price: Number,
}

const a: book = {
    name: 'anil',
    price: 340,
}
*/


/*

Type Alias and Interface are same with some limitations
1. type can't merge two same name of type alias 
2. type can be used for primitives (number, string, boolean etc) or objects: But interface only work with objects
Right Example: type newString = string;
Wrong Example: interface newString extends string;
*/

// 5 Unions and Narrowing
/*
type val = number | string; // union

function func(id: val){
    if(typeof id === 'string'){ // narrowing
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}
*/

/*
function func(val: string | number[]){ // union
    return val.slice(0, 3); // return first 3 - both string and number[] has slice method
}
*/





// ------------------------------------------
// 5 Generics - it prevents us from writing duplicate code [using <T>]
/*
function gen<T>(arg: T): T{
    console.log(arg);
    return arg;
}

gen([1, 2]); // T = number[]
gen('anil'); // T = string
gen(1); // T = number
*/

/*
interface HasAge {
    age: number,
}

function func<T extends HasAge>(arg: T[]): T{ // extends will help T to make sure that arguments must have age property
    return arg.sort((a,b)=>a.age-b.age)[0];
}

const people: HasAge[] = [{age: 30}];

interface Player{
    name: string,
    age: number,
}

const players: Player[] = [
    {name: 'anil', age: 24},
]

func(players);
*/



/*
// CODE DUPLICATION
interface IPost{ // - I means - interface
    postName: string,
    postLen: number,
}

interface IUser{
    name: string,
    age: number,
}

const fetchPosts = async (path: string): Promise<IPost[]> => {
    const res = await fetch(`https://example.com/${path}`);
    return res.json();
}

const fetchUsers = async (path: string): Promise<IUser[]> => {
    const res = await fetch(`https://example.com/${path}`);
    return res.json();
}

(async () => {
    const users = await fetchUsers('/users');
    const posts = await fetchPosts('/posts');
})()


// LETS SOLVE CODE DUPLICATION USING GENERICS
interface IPost{ // - I means - interface
    postName: string,
    postLen: number,
}

interface IUser{
    name: string,
    age: number,
}

const fetchData = async <T>(path: string): Promise<T[]> => { // return promise array
    const res = await fetch(`https://example.com/${path}`);
    return res.json();
}

(async () => {
    const users = await fetchData<IUser[]>('/users');
    const posts = await fetchData<IPost[]>('/posts');

})()
*/

// -----------------------------------------
/*
// 6 Duck Typing or Structural Typing

interface User {
    name: string,
    age: number,
}

function func(arg: User){
    console.log(arg);
}

const user = {
    name: 'anil',
    age: 30,
}


func(user) // even if user is not typeof=User but shape is same so you can't get error - this is duck typing

*/



/*
// -----------------------------------------
// 7 methods in interface

interface User {
    fName: string,
    lName: string,
    login(username: string, password: string): boolean,
}


const user: User = {
    fName: 'anil',
    lName: 'kumar',
    login(username: string, password: string){
        console.log('called');
        return true;
    }
}
user.login('anil', 'secret');
*/

// -----------------------------------------

/*
// 8 inference;

let num = 1; // if you hover on num you will see type=number this is inference;
let str = '1'; // if you hover on str you will see type=string this is inference;
*/

// -----------------------------------------

let num: number = 1;

console.log(num);

