(async ()=>{
    const req = await fetch("index.json");
    const data = await req.json();
    document.body.innerHTML += "<ul>";
    for(const item of data){
        document.body.innerHTML += `<li><a href="${item}">${item}</a></li>`;
    }
    document.body.innerHTML += "</ul>";
})();
