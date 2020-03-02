var btn1 = document.getElementById("Pitbull");
btn1.addEventListener("click", () => {
    var pitbull = new Date(1981, 01, 15);
    birthday(pitbull);
});

var btn2 = document.getElementById("Teddy");
btn2.addEventListener("click", () => {
    var Teddy = new Date(1858, 10, 27);
    birthday(Teddy);
});
var btn3 = document.getElementById("Joseph");
btn3.addEventListener("click", () => {
    var Joseph = new Date(1930, 10, 14);
    birthday(Joseph);
});
var btn4 = document.getElementById("Jojo");
btn4.addEventListener("click", () => {
    var Jojo = new Date(2003, 05, 19);
    birthday(Jojo);
});

function validEntry() {
  var val1 = document.getElementById("m").value;
  var val2 = document.getElementById("d").value;
  var val3 = document.getElementById("y").value;
  var validEntries;
  var msg = "";
  if(val1 == "" || val2 == "" || val3 == "") {
    msg = "You need to enter something first!";
    validEntries = false;
  } else if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
    msg = "That's not a number!";
    validEntries = false;
  } else if (val1 % 1 !== 0 || val2 % 1 !== 0 || val3 % 1 !==0) {
    msg = "Enter an integer!";
    validEntries = false;
  } else if(val1 < 0 || val2 < 0 || val3 < 0){
    msg = "Positive entries only!!"
    validEntries = false;
  }else {
    validEntries = true;
  }
  document.getElementById("bdaymsg").innerHTML = msg;
  if(!validEntries){
    document.getElementById("m").style.borderColor = "red";
    document.getElementById("d").style.borderColor = "red";
    document.getElementById("y").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("m").style.borderColor = "lightGrey";
    document.getElementById("d").style.borderColor = "lightGrey";
    document.getElementById("y").style.borderColor = "lightGrey";
    return true;
  }
}

function validDate(){
  var month = document.getElementById("m").value;
  var day = document.getElementById("d").value;

  if(month < 1 || month > 12){
    document.getElementById("bdaymsg").innerHTML = "Invalid month";
    return false;
  }

  if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    if(day < 1 || day > 31){
      document.getElementById("bdaymsg").innerHTML = "Invalid day";
      return false;
    }
  }

  if(month == 2){
    if(day < 1 || day > 28){
      document.getElementById("bdaymsg").innerHTML = "Invalid day";
      return false;
    }
  }

  if(month == 4 || month == 6 || month == 9 || month == 11){
    if(day < 1 || day > 30){
      document.getElementById("bdaymsg").innerHTML = "Invalid day";
      return false;
    }
  }

  console.log("valid date");
  return true;

}

function birthday(date) {
  if(validDate() && validEntry()){
    var msg = "";
    var m = parseInt(document.getElementById("m").value);
    var d = parseInt(document.getElementById("d").value);
    var y = parseInt(document.getElementById("y").value);
    var bday = new Date(y, m, d);
    var milli = date.getTime() - bday.getTime();

    var days =  Math.ceil(milli/86400000);
    if(days < 0){
        msg = "You are " + -days + " days younger.";
    } else if(days == 0){
        msg = "Wow! You're twins!";
    } else{
        msg = "You are " + days + " days older";
    }
  console.log(msg);

    var div = document.getElementById("bdaymsg");
    var sent = document.createElement("p");
    div.appendChild(sent);
    sent.textContent = msg;
}
}
