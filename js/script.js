window.onload = function() {
    id = localStorage.getItem('id');

    var targetOffset = $('#' + id).offset().top;   
    $('html, body').animate({
        scrollTop: targetOffset - 110
    }, 300);
    
    accordionItemHeaders.forEach((accordionItemHeader) => {
        if(accordionItemHeader.id == id){
            updateHeader(accordionItemHeader);
        }
    });

    localStorage.removeItem('id');
};


function atualizarpag(pagina) {
    window.location = pagina + ".html";
}

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


function updateHeader(icon){
    const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
    );
    if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== icon
    ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    icon.classList.toggle("active");
    const accordionItemBody = icon.nextElementSibling;
    if (icon.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
        accordionItemBody.style.maxHeight = 0;
    }
}

const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
       updateHeader(accordionItemHeader);
    });
});


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

    localStorage.setItem('id', 'section_2');
    window.location = "pages/trackings.html";

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



const dados = [
    //trackings
    { titulo: "Integração de trackings", id: "TR001", link: "trackings.html"},
    { titulo: "Processo de devolução", id: "TR002", link: "trackings.html"},
    { titulo: "Envio da Nota Fiscal (NFS)", id: "TR003", link: "trackings.html"},
    { titulo: "Chave da Nota Fiscal (NFS)", id: "TR004", link: "trackings.html"},
    { titulo: "Envio do Faturamento Concluído (FAT)", id: "TR005", link: "trackings.html"},
    { titulo: "Limite dentro das requisições de trackings", id: "TR006", link: "trackings.html"},
    { titulo: "Como funciona o faturamento parcial dentro da plataforma?", id: "TR007", link: "trackings.html"},
    { titulo: "Quais são as trackings obrigatórias de envio que fecham o ciclo de um pedido?", id: "TR008", link: "trackings.html"},
    { titulo: "Como realizo o faturamento para pedidos que contém bonificação (Kit Bonificado)?", id: "TR009", link: "trackings.html"},
    { titulo: "É possível faturar com produto do tipo unidade um pedido feito com produto de múltiplo caixa?", id: "TR010", link: "trackings.html"},
    { titulo: "É possível enviar uma mesma tracking NFS mais de uma vez?", id: "TR011", link: "trackings.html"},
    { titulo: "É possível efetuar o faturamento de um pedido após o cancelamento dele?", id: "TR012", link: "trackings.html"},
    { titulo: "É possível efetuar o faturamento do um pedido com método a vista antes de receber o pagamento?", id: "TR013", link: "trackings.html"},
    { titulo: "Qual a média de tempo entre o envio de trackings?", id: "TR014", link: "trackings.html"},
    { titulo: "Um pedido pode receber mais de uma tracking NFS?", id: "TR015", link: "trackings.html"},
    { titulo: "É possível efetuar o envio de uma tracking NFS após o envio da tracking FAT?", id: "TR016", link: "trackings.html"},
    //status de cliente
    { titulo: "Integração de status de cliente", id: "ST001", link: "status-cliente.html"},
    { titulo: "Envio de Status de Cliente", id: "ST002", link: "status-cliente.html"},
    { titulo: "Envio da Nota Fiscal (NFS)", id: "ST003", link: "status-cliente.html"},
    { titulo: "Atualização de Status de Cliente", id: "ST004", link: "status-cliente.html"},
    { titulo: "Habilitar Status PEN", id: "ST005", link: "status-cliente.html"},
    { titulo: "Limite dentro das requisições de status de cliente", id: "ST006", link: "status-cliente.html"},
    { titulo: "Como impossibilitar um cliente de efetuar compras no site?", id: "ST007", link: "status-cliente.html"},
    { titulo: "Como fazer com que os clientes voltem a comprar na plataforma após envio de status RPV?", id: "ST008", link: "status-cliente.html"},
    { titulo: "Os clientes atualmente logo que se cadastram tem o status PEN mas gostaria de possibilitar a compra para os mesmos após análise interna da empresa. Como proceder?", id: "ST009", link: "status-cliente.html"},
    { titulo: "Quando o cliente possui status PEN quais são os métodos de pagamento disponíveis para compra?", id: "ST010", link: "status-cliente.html"},
    { titulo: "O cliente consegue efetuar pedidos com a condição de pagamento boleto faturado tendo apenas status APV?", id: "ST011", link: "status-cliente.html"},
    { titulo: "Quais são os critérios que devo utilizar para determinar o status RPV para um cliente?", id: "ST012", link: "status-cliente.html"},
    { titulo: "Como um cliente pode verificar seu status atual na plataforma?", id: "ST013", link: "status-cliente.html"},
    { titulo: "Quais são as opções disponíveis para um cliente com o status RPV resolver sua situação e voltar a fazer compras na plataforma?", id: "ST014", link: "status-cliente.html"},
    { titulo: "Quais são as políticas de devolução e reembolso para clientes com diferentes status?", id: "ST015", link: "status-cliente.html"},
    //requisicoes
    { titulo: "Limite de requisições na plataforma", id: "RE001", link: "requisicoes.html"},
    { titulo: "Retorno de envio de requisições após bloqueio", id: "RE002", link: "requisicoes.html"},
    { titulo: "Quantidade de requisições permitidas por hora na platafora", id: "RE003", link: "requisicoes.html"},
    { titulo: "Caso o limite de requisições seja ultrapassado e o envio continue, a plataforma processa as demais requisições quando o bloqueio finalizar?", id: "RE004", link: "requisicoes.html"},
    { titulo: "Qual a média de tempo de bloqueio para o envio de requisições?", id: "RE005", link: "requisicoes.html"},
    { titulo: "Caso seja enviado uma requisição com diversos CNPJ's para o envio de status de cliente ou limite de crédito, será considerado pela plataforma apenas uma requisição?", id: "RE006", link: "requisicoes.html"},
    { titulo: "Trabalho com diversos produtos na plataforma e eles precisam ser atualizados recorrentemente para que o estoque físico bata com o que está disponível na plataforma. Como proceder?", id: "RE007", link: "requisicoes.html"},
    { titulo: "Temos mais de 320 tabelas de preços configuradas na plataforma e realizamos atualizações de preços regularmente, além de inclusão de clientes. Como proceder?", id: "RE008", link: "requisicoes.html"},
    { titulo: "De acordo com minha regra de negócio os envios serão excedidos com frequência. Como proceder?", id: "RE009", link: "requisicoes.html"},
    //processo integracao
    { titulo: "Processo de integração de Sellers", id: "PR001", link: "processo-integracao.html"},
    { titulo: "Acompanhamento do projeto", id: "PR002", link: "processo-integracao.html"},
    { titulo: "Preenchimento Ficha Cadastral", id: "PR003", link: "processo-integracao.html"},
    { titulo: "Rituais de Comunicação", id: "PR004", link: "processo-integracao.html"},
    { titulo: "Etapas do Projeto", id: "PR005", link: "processo-integracao.html"},
    { titulo: "Quais são os testes de homologação?", id: "PR006", link: "processo-integracao.html"},
    { titulo: "Quais os responsáveis recomendados para comparecer na reunião de Kick-Off?", id: "PR007", link: "processo-integracao.html"},
    { titulo: "Quais os responsáveis recomendados para realizar os testes de integração junto ao analista IFC?", id: "PR008", link: "processo-integracao.html"},
    { titulo: "Qual a diferença entre seguir com o desenvolvimento próprio e seguir com a integradora IFC?", id: "PR009", link: "processo-integracao.html"},
    { titulo: "Quais são os pontos focais para tirar dúvidas comerciais e dúvidas referentes à integração?", id: "PR010", link: "processo-integracao.html"},
    { titulo: "É possível utilizar outra ferramenta de comunicação no processo de integração?", id: "PR011", link: "processo-integracao.html"},
    { titulo: "Não possuo ambiente de testes para seguir com a homologação do projeto. Como prosseguir?", id: "PR012", link: "processo-integracao.html"},
    { titulo: "Não possuo certificado digital instalado nos endpoints de testes, apenas de produção. Podemos seguir com a homologação desta forma?", id: "PR013", link: "processo-integracao.html"},
    { titulo: "Quais as ferramentas utilizadas na validação dos endpoints?", id: "PR014", link: "processo-integracao.html"},
    { titulo: "Meu ERP possui bloqueio de IP. Como prosseguir com a integração?", id: "PR015", link: "processo-integracao.html"},
    { titulo: "Posso seguir com as mesmas credenciais utilizadas em homologação para o ambiente de produção?", id: "PR016", link: "processo-integracao.html"},
    { titulo: "Caso opte por não realizar um dos cenários presentes no escopo de testes. Como prosseguir?", id: "PR017", link: "processo-integracao.html"},
    { titulo: "Como obter o status do projeto com os cenários já realizados e pendentes?", id: "PR018", link: "processo-integracao.html"},
    { titulo: "Quem devo contatar para obter informações sobre prazos para a conclusão das fases do projeto?", id: "PR019", link: "processo-integracao.html"},
    { titulo: "Como é realizado o preenchimento da ficha cadastral?", id: "PR020", link: "processo-integracao.html"},
    { titulo: "Possuo diversos valores mínimos para os pedidos de acordo com a regra de negócio habilitada para meus clientes. É possível informar todas elas para configuração na plataforma?", id: "PR021", link: "processo-integracao.html"},
    { titulo: "Como devo preencher a planilha de Faixas de CEP?", id: "PR022", link: "processo-integracao.html"},
    { titulo: "O que deve ser considerado no preenchimento do Prazo de Entrega?", id: "PR023", link: "processo-integracao.html"},
    { titulo: "Trabalhamos com diversos métodos de boleto faturado em nossa distribuidora. Todos estão disponíveis na plataforma?", id: "PR024", link: "processo-integracao.html"},
    { titulo: "É possível que eu atribua valor de frete para cada região que for gerado o pedido?", id: "PR025", link: "processo-integracao.html"},
    { titulo: "Tenho clientes que atendo de forma particular. Como inicio o atendimento deles pela plataforma?", id: "PR026", link: "processo-integracao.html"},
    //politica de preco
    { titulo: "Integração de política de preço", id: "PO001", link: "politica-preco.html"},
    { titulo: "Política Default", id: "PO002", link: "politica-preco.html"},
    { titulo: "Política Cluster", id: "PO003", link: "politica-preco.html"},
    { titulo: "Envio das requisições de preço", id: "PO004", link: "politica-preco.html"},
    { titulo: "Inclusão de clientes na política de preço", id: "PO005", link: "politica-preco.html"},
    { titulo: "Atualização de preços", id: "PO006", link: "politica-preco.html"},
    { titulo: "Como funciona a política de preço na plataforma?", id: "PO007", link: "politica-preco.html"},
    { titulo: "Como funciona a atualização de preços na plataforma?", id: "PO008", link: "politica-preco.html"},
    { titulo: "É necessário enviar toda a carga de preço ao incluir um cliente ou ao atualizar um preço de um produto para determinada política?", id: "PO009", link: "politica-preco.html"},
    { titulo: "Como faço para mover um cliente para a política Default?", id: "PO010", link: "politica-preco.html"},
    { titulo: "Como faço para incluir clientes em uma política Cluster?", id: "PO011", link: "politica-preco.html"},
    { titulo: "Não utilizo mais uma política de preço. O que devo fazer?", id: "PO012", link: "politica-preco.html"},
    { titulo: "Quero que meu cliente tenha disponibilidade para apenas condições de pagamentos específicas. Como proceder?", id: "PO013", link: "politica-preco.html"},
    { titulo: "Não irei trabalhar mais com uma condição de pagamento. Como faço para indisponibilizar?", id: "PO014", link: "politica-preco.html"},
    { titulo: "Trabalho apenas com condições de boleto faturado. Sendo assim, é necessário realizar o envio do preço DFL?", id: "PO015", link: "politica-preco.html"},
    { titulo: "Quais são as condições de pagamento que não são necessárias para o envio dos preços?", id: "PO016", link: "politica-preco.html"},
    { titulo: "Realizei o envio dos preços para as condições de pagamento que trabalho porém não estão todas visíveis na plataforma. Como proceder?", id: "PO017", link: "politica-preco.html"},
    { titulo: "A plataforma automaticamente realiza o cálculo dos impostos e acrescenta nos preços dos produtos?", id: "PO018", link: "politica-preco.html"},
    { titulo: "Utilizamos o mesmo preço para todas as condições de pagamento. Como o envio deve ser feito para a plataforma?", id: "PO019", link: "politica-preco.html"},
    { titulo: "Alguns de meus clientes não estão visualizando os preços corretamente de acordo com a tabela enviada para eles. Como proceder?", id: "PO020", link: "politica-preco.html"},
    { titulo: "É possível ter uma política de preço por cliente?", id: "PO021", link: "politica-preco.html"},
    //pedido
    { titulo: "Integração de pedido", id: "PE001", link: "pedido.html"},
    { titulo: "Pedidos com promoções", id: "PE002", link: "pedido.html"},
    { titulo: "Pedidos com bonificações (Kit Bonificado)", id: "PE003", link: "pedido.html"},
    { titulo: "Envio de requisições de pedido", id: "PE004", link: "pedido.html"},
    { titulo: "Reprocessamento do pedido", id: "PE005", link: "pedido.html"},
    { titulo: "Retorno da requisição de pedido", id: "PE006", link: "pedido.html"},
    { titulo: "Processamento do pedido", id: "PE007", link: "pedido.html"},
    { titulo: "Quais são as informações enviadas dentro da requisição de pedido?", id: "PE008", link: "pedido.html"},
    { titulo: "É possível que um pedido seja enviado primeiro antes que o cadastro do cliente integre no ERP do distribuidor?", id: "PE009", link: "pedido.html"},
    { titulo: "Como identificar uma promoção (desconto) aplicado em um produto na requisição de pedido?", id: "PE010", link: "pedido.html"},
    { titulo: "Como identificar a condição de pagamento escolhida para aquele pedido?", id: "PE011", link: "pedido.html"},
    { titulo: "Como funciona o Kit Bonificado?", id: "PE012", link: "pedido.html"},
    { titulo: "Como identifico a bonificação de itens dentro da uma requisição de pedido?", id: "PE013", link: "pedido.html"},
    { titulo: "É possível personalizar ou criar Kits Bonificados de acordo com as preferências dos clientes?", id: "PE014", link: "pedido.html"},
    { titulo: "Quais são as trackings obrigatórias de envio que fecham o ciclo de um pedido?", id: "PE015", link: "pedido.html"},
    { titulo: "Como são tratados os casos de falhas ou erros na integração dos pedidos entre a plataforma e o ERP do distribuidor?", id: "PE016", link: "pedido.html"},
    { titulo: "O pedido foi faturado, porém não foi entregue ou o cliente devolveu. Como proceder?", id: "PE017", link: "pedido.html"},
    { titulo: "Quais são as informações de rastreamento e acompanhamento dos pedidos que são transmitidas na integração?", id: "PE018", link: "pedido.html"},
    //pagamento
    { titulo: "Integração de pagamento", id: "PA001", link: "pagamento.html"},
    { titulo: "Envio de requisição de pagamento", id: "PA002", link: "pagamento.html"},
    { titulo: "Bloqueio de pedidos sem pagamento enviado", id: "PA003", link: "pagamento.html"},
    { titulo: "Pedidos com pagamento Boleto Faturado", id: "PA004", link: "pagamento.html"},
    { titulo: "Reservas de estoque para pedidos com o método a vista", id: "PA005", link: "pagamento.html"},
    { titulo: "Quais são os tipos de meios de pagamento que temos atualmente na plataforma?", id: "PA006", link: "pagamento.html"},
    { titulo: "Não quero mais trabalhar com algumas condições de pagamento à vista. Como proceder?", id: "PA007", link: "pagamento.html"},
    { titulo: "Porque não há todas as formas de pagamento disponíveis no site?", id: "PA008", link: "pagamento.html"},
    { titulo: "Quais são as formas de pagamento que não recebem confirmações de pagamento da plataforma?", id: "PA009", link: "pagamento.html"},
    { titulo: "Qual é o prazo para o envio da confirmação de pagamento pela plataforma?", id: "PA010", link: "pagamento.html"},
    { titulo: "Qual é o prazo para o cliente realizar o pagamento do pedido com Boleto Antecipado?", id: "PA011", link: "pagamento.html"},
    { titulo: "Quais são as informações enviadas na requisição de pagamento?", id: "PA012", link: "pagamento.html"},
    { titulo: "Como a plataforma gerencia os reembolsos ou estornos de pagamento na plataforma?", id: "PA013", link: "pagamento.html"},
    { titulo: "Quais são as opções de parcelamento disponíveis na plataforma para pedidos com condição de pagamento Cartão de Crédito?", id: "PA014", link: "pagamento.html"},
    { titulo: "É gerado um custo para o distribuidor ao optar por trabalhar com os métodos de à vista?", id: "PA015", link: "pagamento.html"},
    //limite de credito
    { titulo: "Integração de limite de crédito", id: "LI001", link: "limite-credito.html"},
    { titulo: "Envio de limite de crédito", id: "LI002", link: "limite-credito.html"},
    { titulo: "Atualização de limite de crédito", id: "LI003", link: "limite-credito.html"},
    { titulo: "Limite dentro das requisições de limite de crédito", id: "LI004", link: "limite-credito.html"},
    { titulo: "Porque o cliente não consegue efetuar pedidos com boleto faturado?", id: "LI005", link: "limite-credito.html"},
    { titulo: "Como impossibilitar um cliente de não efetuar pedidos apenas com boleto faturado?", id: "LI005", link: "limite-credito.html"},
    { titulo: "Onde o cliente consegue verificar o valor de limite de crédito disponível?", id: "LI006", link: "limite-credito.html"},
    { titulo: "Dependendo da confiabilidade do cliente, deixamos que o mesmo realize pedidos com boleto faturado ainda que não tenha limite de crédito disponível. A plataforma possibilita a compra nesses casos?", id: "LI007", link: "limite-credito.html"},
    { titulo: "Como é feito o acompanhamento do pagamento dos boletos faturados?", id: "LI008", link: "limite-credito.html"},
    { titulo: "O cliente pode obter a opção de pagamento Vale Troca para reembolso de pedidos com boleto faturado?", id: "LI019", link: "limite-credito.html"},
    { titulo: "O cliente realizou a compra de um pedido com boleto faturado na plataforma e teve seu pedido cancelado. O valor do limite de crédito é restaurado?", id: "LI011", link: "limite-credito.html"},
    { titulo: "Como é feito o acompanhamento e controle do limite de crédito enviado pelo distribuidor para a plataforma?", id: "LI012", link: "limite-credito.html"},
    { titulo: "Quais são as opções disponíveis para a plataforma caso o distribuidor não envie o limite de crédito?", id: "LI013", link: "limite-credito.html"},
    { titulo: "Quais são as políticas da plataforma em relação ao uso do limite de crédito enviado pelo distribuidor?", id: "LI014", link: "limite-credito.html"},
    { titulo: "O Limite de crédito é restituído assim que o cliente efetuar o pagamento do boleto?", id: "LI015", link: "limite-credito.html"},
    //estoque
    { titulo: "Integração de estoque", id: "ES001", link: "estoque.html"},
    { titulo: "Requisições de estoque", id: "ES002", link: "estoque.html"},
    { titulo: "Quantidade de estoque", id: "ES003", link: "estoque.html"},
    { titulo: "Atualização de estoque", id: "ES004", link: "estoque.html"},
    { titulo: "Período de envio de estoque", id: "ES005", link: "estoque.html"},
    { titulo: "Envio de estoque para produtos caixa", id: "ES006", link: "estoque.html"},
    { titulo: "Limite dentro das requisições de estoque", id: "ES007", link: "estoque.html"},
    { titulo: "Trabalho com estoque por disponibilidade. Como devo realizar o envio para a plataforma?", id: "ES008", link: "estoque.html"},
    { titulo: "A atualização de estoque na plataforma é imediata após o envio?", id: "ES009", link: "estoque.html"},
    { titulo: "A quantidade de estoque disponível para compra fica visível para o cliente na loja?", id: "ES010", link: "estoque.html"},
    { titulo: "Porque o produto não está disponível no site?", id: "ES011", link: "estoque.html"},
    { titulo: "Realizei o envio de estoque e preço porém o meu produto não está disponível no site. Como proceder?", id: "ES012", link: "estoque.html"},
    { titulo: "Realizei o envio de estoque para um produto caixa que possui na plataforma em unidade porém não está visível na loja. Como proceder?", id: "ES013", link: "estoque.html"},
    { titulo: "Como devemos lidar com produtos vendidos em caixas ou múltiplos, mas controlados em unidades no estoque interno?", id: "ES014", link: "estoque.html"},
    { titulo: "De quanto em quanto tempo devo programar meus envios de estoque?", id: "ES015", link: "estoque.html"},
    { titulo: "O que é necessário enviar para que o produto seja desativado no site?", id: "ES016", link: "estoque.html"},
    { titulo: "Trabalho com uma numeração interna de produtos. Posso seguir com o envio de estoque com a numeração que tenho cadastrada em meu ERP?", id: "ES017", link: "estoque.html"},
    //cliente
    { titulo: "Integração de cliente", id: "CL001", link: "estoque.html"},
    { titulo: "Status dos novos cliente", id: "CL002", link: "estoque.html"},
    { titulo: "Status para clientes já integrados", id: "CL003", link: "estoque.html"},
    { titulo: "Envio massivo de clientes", id: "CL004", link: "estoque.html"},
    { titulo: "Atualização de cadastro", id: "CL005", link: "estoque.html"},
    { titulo: "Quais as informações do cliente são enviadas para os distribuidores?", id: "CL006", link: "estoque.html"},
    { titulo: "Preciso de mais informações do cliente para concluir o cadastro dele dentro do ERP. Como proceder?", id: "CL007", link: "estoque.html"},
    { titulo: "Quais os dados que o cliente pode atualizar na plataforma?", id: "CL008", link: "estoque.html"},
    { titulo: "O endereço de um dos meus clientes está desatualizado na receita. Consequentemente acontece o mesmo na plataforma. Como proceder?", id: "CL009", link: "estoque.html"},
    { titulo: "O endereço do meu cliente foi atualizado na receita, porém não houve atualização na plataforma. Como proceder?", id: "CL010", link: "estoque.html"},
    { titulo: "Por que não consigo efetuar um pedido de boleto faturado sendo que o cliente possui limite de crédito ou status APV?", id: "CL011", link: "estoque.html"},
    { titulo: "Porque o cliente está visualizando os preços errados ou de outra política de preço?", id: "CL012", link: "estoque.html"},
    { titulo: "Porque clientes específicos não visualizam alguns produtos?", id: "CL013", link: "estoque.html"},
    { titulo: "Após a virada de produção, como os clientes da Infracommerce são enviados para o distribuidor?", id: "CL014", link: "estoque.html"},
    { titulo: "Os clientes que já tenho na minha base precisam possuir cadastro na plataforma Infracommerce para efetuar pedidos?", id: "CL015", link: "estoque.html"},
    { titulo: "Os clientes atualmente logo que se cadastram tem o status PEN mas gostaria de possibilitar a compra para os mesmos após análise interna. Como proceder?", id: "CL016", link: "estoque.html"},
    //index
    { titulo: "Infra GPT", id: "IN001", link: "https://sites.google.com/infracommerce.com.br/infragpt?usp=sharing"},
    { titulo: "Manual de Integração", id: "IN002", link: "https://developers.infracommerce.com.br/docs/middleware/pry5qdf6ha7zy-1-manual-de-integracoes-b2-b#1-introdu%C3%A7%C3%A3o"},
    { titulo: "Formulário de sugestões", id: "IN003", link: "index.html"},
];

