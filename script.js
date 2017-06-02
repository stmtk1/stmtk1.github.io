(async ()=>{
    const req = await fetch("index.json");
    const data = await req.json();
    var body = "<ul>";
    for(const item of data){
        body += `<li><a href="${item}">${item}</a></li>`;
    }
    body += "</ul>";
    document.body.innerHTML += body;
})();
