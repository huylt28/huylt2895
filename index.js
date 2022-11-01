const arr1=[
    {id:1,item:'apple',type:'fruit'},
    {id:2,item:'banana',type:'fruit'},
    {id:3,item:'pen',type:'stuff'},
    {id:4,item:'phone',type:'stuff'}]

// let arr2 = arr1.filter(function(item){
//    return item.type == 'stuff';
// });

//  arr2 = arr2.map((item)=>{
//    return `<li id=${item.id} type=${item.type}> ${item.item} </li>`;
// });

// console.log(arr2);

function filter(arr1,string){
  const result = arr1.filter(item => item.type === string)
  return result.map(myFunction)
}

function myFunction(item){
 return `<li id=${item.id} type=${item.type}> ${item.item} </li>`;
}

console.log(filter(arr1,'stuff'));