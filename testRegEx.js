// // let userNameRegExp = /^[A-za-z](?![0-9]\s)[a-zA-z0-9_-#$](?!\s)/g
// // let userNameRegExp = /^[a-zA-Z](?!0-9\s)+[A-za-z0-9](?!\s)/
// let userNameRegExp = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
//     // if (userNameRegExp.test(userName)) {
      
//     //  userName.parentElement.childNodes[11].classList.add("showWarning")
//     // }
//     // userName.parentElement.childNodes[11].classList.add("showWarning")
//     let userNamee = "arafat"
// console.log(userNameRegExp.test(userNamee));
    

// /* 
// let str = "This is a string..."

// let patt = /^[A-Z].+$/;
// console.log(patt.test(str));

// let str2 = "Lorem ipsum dolor si4t lorem  amet consecte56tur looooooorem adipisicing 65  elit.Laboriosam, mollitia;";
// patt = /[^aeiou ,.;]/ig;
// // console.log(str2.match(patt));
// // console.log(patt.test(str2));

// patt = /lo+/g
// console.log(str2.match(patt));

// patt = /lo*/
// // console.log(str2.match(patt));

// // patt = /lo?/g
// // console.log(str2.match(patt));

// // patt = /^lo/ig
// // console.log(patt.test(str2));

// // patt = /a;$/g
// // console.log(patt.test(str2));

// // patt = /\w/g //[a-z][A-Z][0-9]
// // // console.log(str2.match(patt));

// // patt = /\W/g //without what \w does...
// // // console.log(str2.match(patt));

// // patt = /\d/g //match all numbers 
// // // console.log(str2.match(patt));

// // patt = /\D/g // match all non numbers value....
// // // console.log(str2.match(patt));

// // patt = /\s/g
// // // console.log(str2.match(patt));

// // patt = /\S/g
// // // console.log(str2.match(patt));

// // //! look ahead in RegExp.... 

// // //? (?=expression) ==> indicates positive look ahead.... 
// // let userName = 'arafat22'
// // let patt2 = /(?=\w{4})(?=\D*\d{2})/
// // console.log(patt2.test(userName));

// // //? created my own. Its a pleasure... <3
// // let email = 'shaharafat@gmail.com'
// // // let patt3 = /(?=\w{2}[@]\w{4}[.])/g
// // let patt3 = /\w+[@]\w+\.com$/
// // console.log(patt3.test(email));

// // //? => Capture group (w+) /1
// // let data = "regex regex regex"
// // let patt4 = /^(\w+)\s\1\s\1/
// // console.log(patt4.test(data))
// // console.log(data.match(patt4))
// // let group = data.match(patt4)
// // console.log(group[1]);


// // //! replace with capture group
// // let val = "code camp"
// // let patt5 = /(\w+)\s(\w+)/
// // let res = val.replace(patt5, "$2 $1") // number with dollar sign indicates the capture group position.
// // console.log(res);


// // //? Coding challange
// // let hello = "    Hello World                  "
// // let wsregEx = /^\s|\s$/
// //   let result = hello.replace(wsregEx, '')
// // console.log(result);

// let name = " afat   "
// console.log(name.trim());
// console.log(name);





let str = "a8A&af-t"
// let patt = /^[a-zA-Z]+([a-zA-Z0-9](-|_)[a-zA-Z0-9])*/g
// let patt = /^[a-zA-Z]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$/ // for userName
// let patt = /^[a-zA-Z0-9]+([a-zA-Z0-9]{2,}(@{1})[a-zA-Z]+)\.com$/ // for email
// let patt = /[a-zA-Z0-9./]{8,}(?!\s)/g
// let patt = /[a-zA-Z0-9]{8,}(?=(-|_|\$|\.|&))/
let patt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!\$_\-\.])(?=.{8,})/
// let patt =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
console.log(patt.test(str));
console.log(str.match(patt));
console.log(str.match(patt).length);

