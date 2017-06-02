(async ()=>{
    const req = await fetch("index.json");
    const data = await req.json();
    var body = "<ol>";
    for(const item of data){
        body += `<li><a href="${item}">${item}</a></li>`;
    }
    body += "</ol>";
    document.body.innerHTML += body;
})();
