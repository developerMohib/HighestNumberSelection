
// Number Assending or dissending

let numbers = [45,66,88,24,65,33,42,58,67,60,32,29,48,29];

numbers.sort(
  function(a,b){
    return a - b 
  }
)
document.write(`Assending Number list = `+ numbers + ` <br>`);
document.write( ` End <br> `)

// Now Heighest Number Selection


function numArray(numbers) {

let length = numbers.length;

document.write( `Number Array List `+ length +`<br> <br> `);

let max = numbers[0];

for(let i = 1 ; i <= length; i++){

  if(max < numbers[i]){
    max = numbers[i]
  }
}
return max;
}
document.write ( `The Highest Number is ` + numArray(numbers));

document.write( `<br> End <br> `)


// Another Highest Number Selection 


let numberlist = [55,87,56,17,6,8,55,63,63,54,63,58,6,8,6,28,6,86,2,56,];
let length = numberlist.length;
document.write( `Number Array List `+ length +`<br> <br> `);
function listNum(numberlist){
  
  let length = numbers.length;
  let myMax = numberlist[0];
  for(let i = 1; i <= length; i++ ){
  
    if(myMax < numberlist[i]){
      myMax = numberlist[i];
    }
  
  }
  return myMax;

}
document.write(`The Highest Number is ` + listNum(numberlist))