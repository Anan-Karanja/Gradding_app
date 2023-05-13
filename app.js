let a;
let b;
let c;
let d;

function calculateSum(){
    console.log("calculateSum() function called");

    a = parseInt(document.getElementById("javascript").value);

    b = parseInt(document.getElementById("css").value);

    c = parseInt(document.getElementById("html").value);

    d = a + b + c;



   if (a>=35 && b>=35 && c>=35){
       if (a>=35 && d<=177){
        document.getElementById("results").innerHTML = "Pull Up your socks please : C"
       }

       if (d>=178 && d<=240) {
        document.getElementById("results").innerHTML = "Your grade is : B"
       }

       else {
        document.getElementById("results").innerHTML = "Great job : A"
       }

   }

   else{
    document.getElementById("results").innerHTML = "Please enter your marks"
   }


}
