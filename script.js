let cart = []
let total = 0

const menu = [
{
name:"Bacalhau à Brás",
price:18,
img:"https://picsum.photos/seed/bacalhau/400/300"
},
{
name:"Francesinha Premium",
price:22,
img:"https://picsum.photos/seed/francesinha/400/300"
},
{
name:"Arroz de Marisco",
price:25,
img:"https://picsum.photos/seed/marisco/400/300"
},
{
name:"Polvo à Lagareiro",
price:28,
img:"https://picsum.photos/seed/polvo/400/300"
},
{
name:"Cozido à Portuguesa",
price:20,
img:"https://picsum.photos/seed/cozido/400/300"
},
{
name:"Pastel de Nata Gourmet",
price:6,
img:"https://picsum.photos/seed/nata/400/300"
},
{
name:"Sardinhas Grelhadas",
price:15,
img:"https://picsum.photos/seed/sardinha/400/300"
},
{
name:"Prego no Prato",
price:17,
img:"https://picsum.photos/seed/prego/400/300"
}
]

function renderMenu(){

const box = document.getElementById("menu")

menu.forEach((item,index)=>{

box.innerHTML += `
<div class="card">
<img src="${item.img}">
<h3>${item.name}</h3>
<p>${item.price}€</p>
<button onclick="add(${index})">Adicionar ao Carrinho</button>
</div>
`
})

}

function add(i){

cart.push(menu[i])
total += menu[i].price

updateCart()
}

function updateCart(){

document.getElementById("cartCount").innerText = cart.length

const box = document.getElementById("cartItems")

box.innerHTML = ""

cart.forEach(c=>{
box.innerHTML += `<p>${c.name} - ${c.price}€</p>`
})

document.getElementById("total").innerText =
"Total: " + total + "€"
}

renderMenu()
