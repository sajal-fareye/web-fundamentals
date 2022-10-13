// How to fetch Data from server.

function fetchDataFromServer() {
  fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(res=>(printData(res)));
            
}

function printData(data) {
  //console.log(data);
  let { limit, skip, total, users} = data;

  // let tempdata = users.filter((ele) => ele.age==50);
  // console.log(tempdata);

   let res = users.map((ele) => {return {name: `${ele.firstName} ${ele.lastName}`, age: ele.age}});
   console.log(res);
   //console.log(names);
  //  (ele) => {return '${firstName: ele.firstName}, ${lastName: ele.lastName}}';
  //  console.log({names});
  let age = users.reduce((a,b) => {
    a += b.age;
    return a;
  },0); 
  console.log(age/users.length);

}


fetchDataFromServer();
