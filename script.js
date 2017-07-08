
(async ()=>{
    const req = await fetch("index.json");
    const data = await req.json();
    var body = "<ul>";
    for(const item of data["files"]){
        body += `<li><a href="${item}">${item}</a></li>`;
    }
    body += "</ul>";
    document.getElementById("container").innerHTML += body;
})();

var color = ()=>{
    var blue = Math.floor(Math.random() * 0x100).toString(16);
    if(blue.length != 2) blue = "0" + blue;
    var r_g = Math.floor(Math.random() * 0x80 + 0x80).toString(16);
    if(r_g.length != 2) r_g = "0" + r_g;
    console.log("#ffff" + blue);
    return "#" + r_g + r_g + blue;
};
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

for(var i = 0; i < 100; i++){
    ctx.fillStyle = color();
    ctx.beginPath();
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var r = Math.random() + canvas.width / 600;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}
