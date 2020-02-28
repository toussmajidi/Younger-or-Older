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

function birthday(date) {
    var msg = "";
    var m = parseInt(document.getElementById("m").value);
    var d = parseInt(document.getElementById("d").value);
    var y = parseInt(document.getElementById("y").value);
    var bday = new Date(y, m, d);
    var milli = date.getTime() - bday.getTime();

    var days =  Math.ceil(milli/86400000);
    var years Math.ceil(milli/31536000000);
    if(days < 0){
        msg = "You are " + -days + " days older.";
    } else if(days == 0){
        msg = "Wow! You're twins!";
    } else{
        msg = "You are " + days + " days younger";
    }
    return msg;

    var div = document.getElementById("input");
    var sent = document.createElement("p");
    div.appendChild(sent);
    sent.textContent = msg;
}
