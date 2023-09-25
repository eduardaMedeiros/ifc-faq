function atualizarpag(pagina) {
    window.location = pagina + ".html";
}

function show_question (n) {
    if (document.getElementById(n).style.display == 'none'){
        document.getElementById(n).style.display = 'block'; 
        document.getElementById('q'+ n).style.backgroundImage = 'url(../img/acima.png)';
    } else {
        document.getElementById(n).style.display = 'none'; 
        document.getElementById('q'+ n).style.backgroundImage = 'url(../img/abaixo.png)';
    }
}

function show_questionIndex (n) {
    if (document.getElementById(n).style.display == 'none'){
        document.getElementById(n).style.display = 'block'; 
        document.getElementById('q'+ n).style.backgroundImage = 'url(img/acima.png)';
    } else {
        document.getElementById(n).style.display = 'none'; 
        document.getElementById('q'+ n).style.backgroundImage = 'url(img/abaixo.png)';
    }
}