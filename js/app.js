AOS.init({
    delay:200
});

const skills = document.getElementById('skills');
const navWeb = document.getElementById('card-project-web');
const navVideojuegos = document.getElementById('card-project-game');
const navDesktop = document.getElementById('card-project-desktop');

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./js/skills.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    data.forEach(element => {
        skills.innerHTML += 
        `<div class="col-sm-6 col-md-3">
            <figure class="m-4">
                <img src="/${element.img}" class="${element.class}" alt="${element.name}" width="90%">
            <figcaption>
                <p>${element.name}</p>
            </figcaption>
            </figure>
        </div>`
    });
});

var uses = '';
var link = '';

if(navWeb && navVideojuegos && navDesktop){
    readTextFile("./js/proyectos.json", function(text){
        var data = JSON.parse(text);
        console.log(data);
        data.forEach(element => {
            if(element.type == 'web'){
                for(let index = 0; index < element.uses.length; index++) {
                    uses += `<li class="list-group-item">${element.uses[index]}</li>`
                }
                if(element.hosting == 'true'){
                    link = `<a href="${element.ref}" class="btn btn-outline-dark" target="_blank"><i class="bi bi-github"></i> | ${element.message}</a>`
                }else{
                    link = `<a href="${element.ref}" class="btn btn-outline-danger" target="_blank"><i class="bi bi-youtube"></i> | ${element.message}</a>`
                }
                navWeb.innerHTML += `
                <div class="col-sm-12 col-md-4 col-xl-3 mb-2 mt-2">
                    <div class="card h-100">
                        <img src="${element.img}" class="card-img-top" width="90%" alt="${element.title}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${element.title}
                            </h5>
                            <p class="card-text">
                                ${element.description}
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            ${uses}
                        </ul>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                ${link}
                            </div>
                        </div>
                    </div>
                </div>
                `;
                uses = '';
                link = '';
            }
            if(element.type == 'game'){
                for(let index = 0; index < element.uses.length; index++) {
                    uses += `<li class="list-group-item">${element.uses[index]}</li>`
                }
                if(element.hosting == 'true'){
                    link = `<a href="${element.ref}" class="btn btn-outline-dark" target="_blank"><i class="bi bi-github"></i> | ${element.message}</a>`
                }else{
                    link = `<a href="${element.ref}" class="btn btn-outline-danger" target="_blank"><i class="bi bi-youtube"></i> | ${element.message}</a>`
                }
                navVideojuegos.innerHTML += `
                <div class="col-sm-12 col-md-4 col-xl-3 mb-2 mt-2">
                    <div class="card h-100">
                        <img src="${element.img}" class="card-img-top" width="90%" alt="${element.title}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${element.title}
                            </h5>
                            <p class="card-text">
                                ${element.description}
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            ${uses}
                        </ul>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                ${link}
                            </div>
                        </div>
                    </div>
                </div>
                `;
                uses = '';
                link = '';
            }
            if(element.type == 'desktop'){
                for(let index = 0; index < element.uses.length; index++) {
                    uses += `<li class="list-group-item">${element.uses[index]}</li>`
                }
                if(element.hosting == 'true'){
                    link = `<a href="${element.ref}" class="btn btn-outline-dark" target="_blank"><i class="bi bi-github"></i> | ${element.message}</a>`
                }else{
                    link = `<a href="${element.ref}" class="btn btn-outline-danger" target="_blank"><i class="bi bi-youtube"></i> | ${element.message}</a>`
                }
                navDesktop.innerHTML += `
                <div class="col-sm-12 col-md-4 col-xl-3 mb-2 mt-2">
                    <div class="card h-100">
                        <img src="${element.img}" class="card-img-top" width="90%" alt="${element.title}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${element.title}
                            </h5>
                            <p class="card-text">
                                ${element.description}
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            ${uses}
                        </ul>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                ${link}
                            </div>
                        </div>
                    </div>
                </div>
                `;
                uses = '';
                link = '';
            }
        });
    });
}


