let test: number;
let flag: boolean;
let first_name: string;

const API_KEY = "adkcb#$favscr";  // it always inference it`s value becauze we have to intialize it
// if we declare and initialize a variable in same step it will inference it`s type 
//if we declare the variable without initialization it will be any type (without define it`s type) 
/*any */
/*any */
/*any */
let all; // any 
let Anttypevariable;//inference as any beacuse wew didn`t define it`s type
all = "sdsd"; all = 45; all = true;
/**********/
/**********/
/**********/
/**********/
 first_name="MOstafa Nafady"
flag = true;
test =20003;
test = 14.0;
let v = "Sasa"; // type string >> let v:string="sasa"
console.log("test");
console.log("MostafaX");
console.log("Nafady");
//test comment ts 
let Sasa;
  Sasa = 1;

let Name = "NAFADY" //inference as string
/*Array */
/*Array */
/*Array */
const array: number[] | string[] = [10]; // union type feature

/*Tuple */
/*Tuple */
/*It's like an array with a fixed length and known data types for each position */
let array2: readonly [number, string, number];
//In TypeScript, the readonly keyword is used to  
//declare a variable or property that cannot be reassigned after its initial assignment.
array2 = [37, "Nafady",1]
array2[0]//37
array2[1]//Nafady
const[age,Last_name]=array2
// {name:string;age:number}[] >>> array of structured object
let anotherArray: Array<string>;
let any:number;
//s
any = 10;
any = 20;
/*we have to define the type of arguments of the function */
/*we have to define the type of arguments of the function */
/*we have to define the type of arguments of the function */

function start(x:number, y:number)
{
    console.log(x+y)
}
function start2(x:number, y:number):void // define the returned value
{
    console.log(x+y)
}
function start4(x:number, y:number) // inference the return value as a number 
{
    console.log(x + y)
    return x + y; // inference that the return value is a number 
}
function start3(x:number, y:number):number
{
    console.log(x + y)
    return x + y; //return number
}

start(4, 50)
/*object */
/*object */
/*object */
/*when working with objects we have extra type safty 
as well as the object type check typescript check for the object structure*/
let user: {
    name: string,
    age: number,
    id: string
};
//structured object with types
let car: {
    color: string;
    modal: string;
    cost: number;
};

  car= {
    color:"as",
    modal: "2024",
    cost:760
};
  
/*function as a value that passed to a function  */

function calculation(a: number, b: number, calc:(x:number,y:number)=>number)
{
    calc(10 , 20);
}
//calc is a function that work as a value and the structure of this function was
// accept 2 paramerters of type number and return value is a number  similar to arrow function
function subtract(s: number, z: string): string
{
    return  z;
}
function addition (s: number, z: number): number
{
    return  s+z;
}
calculation(5, 6, addition);

//  calculation(5, 6, subtract); >>> Error
/*create Alias   اللاسم المستعار*/
//it should be start with capital case
type StringOrNumber = string | number;

type CalcFun = (x1: number,x2: number) => number;
function calculation2 (a: number, b: number,zee:CalcFun)

{
    let tree: StringOrNumber;
    tree = 7;
    tree = "fdf";
    // tree = true; >> Error 
   
    return  zee(10, 20);
}
calculation2(1, 2, addition)

/*object type defination */
type Shift = {
    cost: number;
    start_at:string;
    end_at: string;
    active:boolean
}
type PlanInfo = {
    active: boolean;
    intantBooking: boolean;
}
type DailyPlan = {
    active: boolean;
    day: Shift;
    
}
let hourlyPlan: ShiftDetails;
hourlyPlan = {
    active: true,
    intantBooking: false,
    cost: 0,
    start_at: "00",
    end_at: "00"
}
type MonthlyPlan = Shift &{ // merge 
    none:string
}
let newSpace: DailyPlan = {
    active: false,
    day: {
                         cost: 10,
        start_at: "00:00",
        end_at: "00:00",
        active: false,
    }
}
let spaceMonth: MonthlyPlan = {
  
        cost: 0,
        start_at: "00:00",
        end_at: "00:00",
        active: false,
        none:"any string"
 
}

/*interface used to define  */
/*most use cases is for define object */
interface plan  {
    planInfo: PlanInfo;
    shiftDetails: {
        dayShift: Shift;
        allDayShift: Shift;
        nightShift: Shift;
    }
}
let dailyPlan: plan = {
    planInfo:{
    active: false,
    intantBooking: false,
    },
    shiftDetails: {
        dayShift: {
    cost: 0,
    start_at:"00:00",
    end_at: "00:00",
    active:true
},
        allDayShift: {
    cost: 0,
    start_at:"00:00",
    end_at: "00:00",
    active:false
},
        nightShift: {
    cost: 0,
    start_at:"00:00",
    end_at: "00:00",
    active:false
}
    }
}

/*merge types  */
//1-using & to merge between two typs 
type ShiftDetails = PlanInfo & Shift;
//2-use extend keyword with interface 
interface App extends PlanInfo, Shift{ }
//3-Interfaces can merge declarations.
//If you declare an interface twice with the same name, TypeScript merges them into one:
interface App
{
    test: string;
}
// interface AppX=
type Name = string | number; //union
//A union type:: in TypeScript allows you to specify that a variable ,
// parameter, or return type can be one of several specified types.
let newName: Name = 10;
type Func = (x: string) => number | string;

const NewFunc = (cala: Func, a: number): boolean =>
{
    cala("saas")
    return a>0 ;
}
NewFunc((x)=>2+x,200);
let testAppInterface: App = {
    active: true,
    intantBooking: true,
    cost: 100,
    start_at: "00",
    end_at: "00",
    test:""
}
/*type gards */
/*type gards */
/*type gards */
let role: "admin" | 10; // role accept only this two values
role = 10; // 10 accepted
role = "admin"; // "admin" accepted
// role="Hani" >> Error
// role= 100; >> Error

if ( typeof role ==="string" ) // check it the role of type string 
{
    console.log("the role of type string")
}
if ( typeof role === "number") // check it the role of type number 
{
    console.log("the role of type number")
}

function combine(a: number | string, b: number | string):void|number
{
    if (typeof a === 'number' && typeof b === 'number')
    {
        return a + b;
    } 
}
combine(10, "hj")
/*generic  */
function testGen<T>(a: T,X:number):T
{
    const z = X + 1;
    return a;
}
type Mostafa<T> = {
  readonly  name: T;
    age:number
}
let MostafaTest: Mostafa<string> = {
    name: "Mostafa",
    age: 37,
}
MostafaTest.age = 37.1;

testGen("asdsad",1010)