// let e = document.getElementById("formInput");
// e.preventDefault();

// //   1st function
// function myCheckFunction(val) {
//   const checkNumber = document.getElementById("pname").value;
//   if (
//     checkNumber.startsWith("081") ||
//     checkNumber.startsWith("+23481") ||
//     checkNumber.startsWith("0806")||
//     checkNumber.startsWith("+23486")
//   ){
//     alert("This is an MTN number");
//     document.getElementById("mtn").style.display = "block";
//     document.getElementById("airtel").style.display = "none";
//     document.getElementById("glo").style.display = "none";
//   } else if (
//     checkNumber.startsWith("080") ||
//     checkNumber.startsWith("+23480")
//   ) {
//     alert("This is an Airtel number");
//     document.getElementById("airtel").style.display = "block";
//     document.getElementById("mtn").style.display = "none";
//     document.getElementById("glo").style.display = "none";
//   } else if (
//     checkNumber.startsWith("090") ||
//     checkNumber.startsWith("+23490")
//   ) {
//     alert("This is an GLO number");
//     document.getElementById("glo").style.display = "block";
//     document.getElementById("airtel").style.display = "none";
//     document.getElementById("mtn").style.display = "none";
//   }
// }

//   1st function

function myFunction(value) {
  const checkOnkeyNumber = document.getElementById("pname");

  checkOnkeyNumber.addEventListener("input", () => {
    let phoneNumber = checkOnkeyNumber.value;
    console.log(phoneNumber);
    if (phoneNumber.startsWith("0816") || phoneNumber.startsWith("+234816") ||phoneNumber.startsWith("0806") ||phoneNumber.startsWith("+23486")
    || phoneNumber.startsWith("0703")|| phoneNumber.startsWith("+23473")
    || phoneNumber.startsWith("0704") || phoneNumber.startsWith("+234704")
    || phoneNumber.startsWith("0702")|| phoneNumber.startsWith("+234702")
    ||  phoneNumber.startsWith("0813")|| phoneNumber.startsWith("+234813")
    ||  phoneNumber.startsWith("0814")|| phoneNumber.startsWith("+234814")
    ||  phoneNumber.startsWith("0903")|| phoneNumber.startsWith("+234903")
    ||  phoneNumber.startsWith("0906")|| phoneNumber.startsWith("+234906")
    ||  phoneNumber.startsWith("07025")|| phoneNumber.startsWith("+2347025")
    || phoneNumber.startsWith("07026")|| phoneNumber.startsWith("+2347026")
    ||  phoneNumber.startsWith("0916")|| phoneNumber.startsWith("+2349016"))
     {
      
 
    // alert("This is an MTN number");
      document.getElementById("mtn").style.display = "block";
      document.getElementById("airtel").style.display = "none";
      document.getElementById("glo").style.display = "none";

    } else if (
        phoneNumber.startsWith("0802") ||
       phoneNumber.startsWith("+234802")||
       phoneNumber.startsWith("0907")||
       phoneNumber.startsWith("+234907")||
       phoneNumber.startsWith("0708")||
       phoneNumber.startsWith("+234708")||
       phoneNumber.startsWith("0902")||
       phoneNumber.startsWith("+234902")||
       phoneNumber.startsWith("0812")||
       phoneNumber.startsWith("+234812")||
       phoneNumber.startsWith("0808")||
       phoneNumber.startsWith("+234808")||
       phoneNumber.startsWith("0701")||
       phoneNumber.startsWith("+234701")

     ) {
      // alert("This is an Airtel number");
      document.getElementById("airtel").style.display = "block";
      document.getElementById("mtn").style.display = "none";
     document.getElementById("glo").style.display = "none";
     } else if (
      phoneNumber.startsWith("0905") ||
      phoneNumber.startsWith("+234905")||
      phoneNumber.startsWith("0805")||
      phoneNumber.startsWith("+234805")||
      phoneNumber.startsWith("0807")||
      phoneNumber.startsWith("+234807")||
      phoneNumber.startsWith("0811")||
      phoneNumber.startsWith("+234811")||
      phoneNumber.startsWith("0705")||
      phoneNumber.startsWith("+234705")||
      phoneNumber.startsWith("0815")||
      phoneNumber.startsWith("+234815")
    ) {
        // alert("This is an GLO number");
      document.getElementById("glo").style.display = "block";
       document.getElementById("airtel").style.display = "none";
       document.getElementById("mtn").style.display = "none";
    }
    console.log(phoneNumber);
  });
 }
