//declaring variables in typescript
//you can separate long numbers with underscore in typescript 
// let sales = 123_456_789;
// let course = "Typscript"
// let is_published  = true;

//built in type Javascript 

// type any 
// let level;

// function render(document) {
//     console.log(document);
    
// }

//Type Arrays

// let numbers: number[] = []
// numbers.forEach( n => n.) 

//Type Tuples
//here 
// let user: [ number, string] = [ 1, 'Ricardo']

//Type Enums
// const enum Size { Small = 1, Meduim, Large };
// let mysize: Size = Size.Meduim;
// console.log(mysize);

// Type Functions 
// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//     return income * 1.2  
//     return income * 1.3
// }

// Type object 
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name: 'ricardo',
//     retire: (date: Date) => {
//         console.log(date);
        
//     }
//  };

 // Advannced types 
 // 1- Type aliases
//  type Employee = {
//      readonly id: number,
//      name: string,
//      retire: (date: Date) => void
     
// }

// let employee:  Employee = {

//     id: 1, 
//     name: 'ricardo',
//     retire: (date: Date) => {
//     console.log(date);
        
//     }
//  };

 // Type union 
  function kgToLbs(weight: number | string): number {
    //Narrowing 
    if (typeof weight === 'number') 
     return  weight * 2.2;
    else 
    return parseInt(weight) * 2.2

  }

 kgToLbs(10)
 kgToLbs('10')