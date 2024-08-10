const arr = [
    {
       firstName: "Alan",
       lastName: "Cooper"
    },
    {
       firstName: "Bob",
       lastName: "Cooper"
    }
 ]
 const str = JSON.stringify(arr);
 console.log(str)
 const parsedArr = JSON.parse(str);
 console.log(parsedArr);
 console.log(parsedArr[1].firstName);