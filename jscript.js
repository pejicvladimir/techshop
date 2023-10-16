function hvala(){
    let ime = document.getElementById('ime').value;
    let prezime = document.getElementById('prezime').value;
    
    alert(`Dobrodosli ${ime} ${prezime}. Hvala sto ste se prijavili.`)
}

function racunanjePopusta(procenat, cena){
    let popust = cena - (cena * (procenat/100));
    return popust;
}
function kalkulator(){
    let popust = parseFloat(document.getElementById('popust').value);
    let novac = parseFloat(document.getElementById('pare').value);
  
    if (popust > 0 && novac > 0) {
        let snizenaCena = racunanjePopusta(popust, novac);
        let noviElement = document.createElement('div');
        noviElement.className = 'izracunaj';
        noviElement.innerText = `Cena nakon popusta će biti ${snizenaCena} dinara.`;
        document.getElementById('polje').appendChild(noviElement);
    } 
    else {
        alert('Unesite pozitivne vrednosti za popust i cenu.');
    }
}

let velikiUkupno = 0;
function dodajUkorpu(param){
    let glElement = param.closest('.single-item');
    let cena = glElement.querySelector('.price').innerText;
    let ime = glElement.querySelector('h3').innerText;
    let kolicina = glElement.querySelector('input').value;
    let korpaProiz = document.querySelector('.cart-items');
    cena = cena.substring(4)
    cena = parseInt(cena);
    kolicina = parseInt(kolicina);

    let ukupno = cena * kolicina;
    velikiUkupno += ukupno;

    if(parseInt(kolicina) > 0){
         korpaProiz.innerHTML += `<div class="cart-single-item">
                                    <h3>${ime}</h3>
                                    <p>${cena} x ${kolicina} = <span>${ukupno}</span></p>
                                    <button onClick="ukloni(this)">Ukloni</button>
                                  </div>`;
        document.querySelector('.total').innerText = `Ukupno: RSD ${velikiUkupno}`;
        param.innerText = 'Dodato';
        param.setAttribute('disabled', 'true'); 
    }
    else{
        alert("NISTE ODABRALI KOLICINU PROIZVODA!!!")
    }
}

function ukloni(param){
    let glElement = param.closest('.cart-single-item');
    let cena = glElement.querySelector('p span').innerText;
    cena = parseInt(cena);
    velikiUkupno -= cena;
    document.querySelector('.total').innerText = `Ukupno: RSD ${velikiUkupno}`;
    glElement.remove();
}


function napraviTabelu(proizvodi) {
    let tabela = "<table border='1px solid black'>";
    tabela += "<tr><th>Product</th><th>Price</th></tr>";
    for (let i = 0; i < proizvodi.length; i++) {
      tabela += "<tr><td>" + proizvodi[i][0] + "</td><td>" + proizvodi[i][1] + "</td></tr>";
    }
    tabela += "</table>";
    return tabela;
}

const proizvodi = [
    ["Macbook Air", "250.000 din."],
    ["Nvidia RTX 3090", "150.000 din."],
    ["Slušalice", "2750 din."],
    ["RODE Mikrofon", "7000 din."],
    ["Sklopljena konfiguracija", "90.000 din."],
    ["Samsung Galaxy S21 Ultra", "120.000 din."]
];

function generisiTabelu() {
    const tabelaDiv = document.getElementById("tabela");
    tabelaDiv.innerHTML = napraviTabelu(proizvodi);
}

function boja(){
    let div = document.querySelector('.slika');
    div.style.backgroundColor = 'skyblue';
}
function nista(){
    let div = document.querySelector('.slika');
    div.style.background = 'transparent';
}






