let productList=[]

// 
fetch("./assets/js/products.json")
    .then((res) => res.json())
    .then((res) => {
        res.forEach((product) => {
        // console.log(product);
        createcard(product)
        productList.push(product)
    });
});
// console.log(productList);

const section = document.querySelector("#products")
const modal = document.querySelector("#modal-p")
const tbody = document.querySelector("tbody")
const label = document.querySelector("label")
const modalp = document.querySelector(".price-total")

const i = document.createElement("img")
i.src = "./assets/img/shop.png"
label.append(i)

const pricet = document.createElement("p")
modalp.append(pricet)
pricet.price = 0;


const fp = document.querySelector(".frais-p")
const pricefp = document.createElement("p")
pricefp.price = 0;
fp.append(pricefp)

// fonction qui sert a créer une card pour les produits 
function createcard(product){
    const card = document.createElement("div")
    card.classList="card";
    section.append(card)

    const img = document.createElement("img")
    img.classList="image-bottom"
    img.src = product.image;
    card.append(img)

    const div = document.createElement("div")
    div.classList="card-body";
    img.append(div)

    const h4 = document.createElement("h4")
    h4.textContent = product.name;
    h4.classList="card-title"
    card.append(h4)

    const p = document.createElement("p")
    p.textContent = `${product.price}€` ;
    p.classList="card-text"
    card.append(p)

    const btnadd = document.createElement("button")
    btnadd.textContent=("Ajouter au panier")
    btnadd.setAttribute("onClick", `addProduct(${product.id})`)
    card.append(btnadd)
}

// fonction qui créer un tableau pour contenir 
function createtable(product){

    const tr = document.createElement("tr")
    tr.setAttribute("id", `product-${product.id}`)
    tbody.append(tr)
    
    const tdimg = document.createElement("td")
    tr.append(tdimg)
    const imgp = document.createElement("img")
    imgp.src= product.image
    imgp.classList = "img-product"
    tdimg.append(imgp)

    const tdname = document.createElement("td")
    tr.append(tdname)
    const name = document.createElement("h4")
    name.textContent = product.name
    name.classList = "name-p"
    tdname.append(name)

    const tdprice = document.createElement("td")
    tr.append(tdprice)
    const price = document.createElement("p")
    price.textContent = `${product.price}€`
    tdprice.append(price)

    const tdqtité = document.createElement("td")
    tr.append(tdqtité)
    const quantité = document.createElement("label")
    quantité.textContent= "Quantité"
    tdqtité.append(quantité)
    const qtite = document.createElement("input")
    qtite.classList = "input-qt"
    qtite.type = "number"
    qtite.id = "quantity"
    qtite.name = "quantity"
    qtite.min = "1"
    qtite.value = 1

    quantité.append(qtite)

    const tdtrash = document.createElement("td")
    tr.append(tdtrash)
    const trash = document.createElement("input")
    trash.type = "button"
    trash.value = "Supp"
    trash.setAttribute('onClick', `deleteProduct(${product.id})`)
    tdtrash.append(trash)
    // imgtrash.setAttribute("click",deleteProduct(btn) )

}

// Fonction pour ajouter les produits au panier
function addProduct(btn){
    // console.log(btn);
    // console.log(productList);
    btn = productList.find(i => i.id == btn)
    createtable(btn)
    calcprix(btn)
    // console.log(btn);
}

// Calculer le prix 
function calcprix(btn) {
    pricet.price = pricet.price + btn.price;
    // console.log(pricet.price);

    if (pricet.price >= 10) {
        pricefp.price = 0;
        pricefp.textContent = pricefp.price;
        pricet.textContent = pricet.price;
    }
    else{
        pricefp.price = pricefp.price + 0.50;
        pricefp.textContent = pricefp.price;
        pricet.textContent = pricet.price + pricefp.price;
    }
    
}

function deleteProduct(id){
    const product = document.querySelector(`#product-${id}`)
    product.remove()
    console.log(product);

}

// // Caculer la quantité 
// function calcquantity(product){

//     pricet = (price * qtite);
//     console.log(price);
// }






