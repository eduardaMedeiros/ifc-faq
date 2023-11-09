//funcao atualizar pagina
function atualizarpag(pagina) {
    window.location = pagina + ".html";
}

//funcoes do header
$('.links a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 120
    }, 500);
  });
  

let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
    navLinks.style.right = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.right = "-100%";
}

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}

//funcoes dos itens de duvidas
const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
        );
        if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


//funcoes formulario excel
const button = document.querySelector('#btn-enviar');

const addLoading = () => {
    button.innerHTML = '<div class="loading"></div>';
}

const removeLoading = () => {
    button.innerHTML = 'Dados enviados!';

    document.querySelector('input[name=Nome]').value = '';
    document.querySelector('input[name=Email]').value = '';
    document.querySelector('input[name=Distribuidor]').value = '';
    document.querySelector('input[name=Loja]').value = '';
    document.querySelector('textarea[name=Observacao]').value = '';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const nome = document.querySelector('input[name=Nome]').value;
    const email = document.querySelector('input[name=Email]').value;
    const dist = document.querySelector('input[name=Distribuidor]').value;
    const loja = document.querySelector('input[name=Loja]').value;
    const obs = document.querySelector('textarea[name=Observacao]').value;

    fetch('https://api.sheetmonkey.io/form/928Za6QB7wbk1jFUZRZeQv', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Nome: nome,
            Email: email,
            Distribuidor: dist,
            Loja: loja,
            Observacao: obs,
        })
    }).then(() => removeLoading());
}

document.querySelector('#form-contato').addEventListener('submit', handleSubmit);

