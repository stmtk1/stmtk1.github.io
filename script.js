(async ()=>{
    const req = await fetch("index.json");
    const data = await req.json();
    document.body.innerHTML += "<ul>";
    for(const item of data){
        document.body.innerHTML += `<li>${item}</li>`;
    }
    document.body.innerHTML += "</ul>";
})();
