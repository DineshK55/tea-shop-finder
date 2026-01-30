/* TOGGLE */
const retail = document.getElementById("retailSection");
const corporate = document.getElementById("monthlySection");
const rBtn = document.getElementById("retailBtn");
const cBtn = document.getElementById("packageBtn");
var closepop=document.getElementById("close-pop")
function switchMode(mode){
  

  if(mode === "retail"){
    retail.classList.remove("hidden");
    corporate.classList.add("hidden");

    rBtn.classList.add("bg-green-700","text-white");
    rBtn.classList.remove("bg-gray-200");

    cBtn.classList.add("bg-gray-200");
    cBtn.classList.remove("bg-green-700","text-white");
  } else {
    corporate.classList.remove("hidden");
    retail.classList.add("hidden");

    cBtn.classList.add("bg-green-700","text-white");
    cBtn.classList.remove("bg-gray-200");

    rBtn.classList.add("bg-gray-200");
    rBtn.classList.remove("bg-green-700","text-white");

    renderPackages();
  }
}


/* RETAIL LOGIC */
let cart = {};

function updateQty(name, price, change){
  cart[name] = cart[name] || {price, qty:0};
  cart[name].qty += change;
  if(cart[name].qty <= 0) delete cart[name];
  renderCart();
}

function renderCart(){
  cartItems.innerHTML = "";
  let total = 0;
  Object.keys(cart).forEach(k=>{
    const i = cart[k];
    total += i.price * i.qty;
    cartItems.innerHTML += `<li>${k} x ${i.qty} = ₹${i.price*i.qty}</li>`;
  });
  document.getElementById("total").innerText = total;
}

function placeRetailOrder(){
  localStorage.setItem("retailOrder", JSON.stringify(cart));
  alert("Retail order placed successfully!");
  cart = {};
  renderCart();
}

/* CORPORATE LOGIC */
let selectedPlan = {};

function openForm(plan, price){
  selectedPlan = { plan, price };
  corpForm.classList.remove("hidden");
}

function confirmSubscription(){
  const data = {
    ...selectedPlan,
    company: companyName.value,
    contact: contactPerson.value,
    phone: phone.value,
    total: selectedPlan.price * 1.18
  };
  localStorage.setItem("corporateSubscription", JSON.stringify(data));
  alert("Corporate subscription confirmed!");
}

let selectedCategory = null;

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let selectedTea = null;

function openCustomization(tea){
  selectedTea = tea;
  customTeaName.innerText = tea.name;
  customModal.classList.remove("hidden");
}

function addCustomizedItem(){
  const note = `
    ${lessSugar.checked ? "Less Sugar " : ""}
    ${strongTea.checked ? "Strong" : ""}
  `;
  updateQty(selectedTea.name + " (" + note + ")", selectedTea.price, 1);
  customModal.classList.add("hidden");
}
 closepop.addEventListener("click",function(){
  customModal.classList.add("hidden");
 })
function selectCategory(category){
  selectedCategory = category;

  document.querySelectorAll(".typeBtn").forEach(btn=>{
    btn.classList.remove("bg-green-700","text-white");
    btn.classList.add("bg-gray-200");
  });
  event.target.classList.remove("bg-gray-200");
  event.target.classList.add("bg-green-700","text-white");
  renderMenu();
}
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});

const teaMenu = [
  {
    name: "Tea",
    price: 40,
    category: "Popular",
    bestseller: true,
    image: "./assets/images/tea-order-photo_7.jpg"
  },
  {
    name: "Masala Tea",
    price: 40,
    category: "Popular",
    bestseller: true,
    image: "./assets/images/tea-order-photo_1.jpg"
  },
  {
    name: "Ginger Tea",
    price: 45,
    category: "Popular",
    bestseller: true,
    image: "./assets/images/tea-order-photo_2.jpg"
  },
  {
    name: "Green Tea",
    price: 50,
    category: "Healthy",
    bestseller: false,
    image: "./assets/images/tea-order-photo_3.jpg"
  },
  {
    name: "Irani Chai",
    price: 70,
    category: "Milk Special",
    bestseller: true,
    image: "./assets/images/tea-order-photo_4.jpg"
  },
  {
    name: "Kashmiri Kahwa",
    price: 90,
    category: "Premium",
    bestseller: false,
    image: "./assets/images/tea-order-photo_5.jpg"
  },
  {
    name: "Lemon Iced Tea",
    price: 70,
    category: "Cold",
    bestseller: false,
    image: "./assets/images/tea-order-photo_6.jpg"
  },
  {
    name: "chamomile Tea",
    price: 50,
    category: "Healthy",
    bestseller: false,
    image: "./assets/images/tea-order-photo_8.jpg"
  },
   {
    name: "Black Tea",
    price: 50,
    category: "Healthy",
    bestseller: false,
    image: "./assets/images/tea-order-photo_8.jpg"
  }
];

function renderMenu(){
  const search = document.getElementById("searchInput")?.value.toLowerCase() || "";

  const menu = teaMenu.filter(t =>
    (!selectedCategory || t.category === selectedCategory) &&
    t.name.toLowerCase().includes(search)
  );

  menuGrid.innerHTML = "";

  if(menu.length === 0){
   if(menu.length === 0){
  menuGrid.innerHTML = `
    <div class="col-span-2 text-center mt-10">
      <p class="text-4xl">☕</p>
      <p class="text-gray-500 mt-2">No tea found</p>
      <p class="text-sm text-gray-400">Try another category</p>
    </div>
  `;
  return;
}
  }

  menu.forEach(t => {
    const isFav = favorites.includes(t.name);

    menuGrid.innerHTML += `
      <div class="bg-white rounded shadow overflow-hidden">
        <img src="${t.image}" class="h-32 w-full object-cover">

        <div class="p-3">
          <div class="flex justify-between">
            <h3 class="font-bold">${t.name}</h3>
            <button onclick="toggleFav('${t.name}')">
              ${isFav ? "❤️" : "🤍"}
            </button>
          </div>

          <p class="text-sm text-gray-500">${t.category}</p>
          <p>₹${t.price}</p>

          ${t.bestseller ? `<span class="text-xs text-orange-600 font-bold">⭐ BEST SELLER</span>` : ""}

          <div class="flex gap-2 mt-2">
            <button onclick="updateQty('${t.name}',${t.price},-1)"
              class="px-3 bg-gray-300 rounded">−</button>

            <button onclick="openCustomization(${JSON.stringify(t).replace(/"/g,'&quot;')})"
              class="px-3 bg-blue-600 text-white rounded">
              Customize
            </button>

            <button onclick="updateQty('${t.name}',${t.price},1)"
              class="px-3 bg-green-600 text-white rounded">+</button>
          </div>
        </div>
      </div>
    `;
  });
}


function toggleFav(name){
  favorites = favorites.includes(name)
    ? favorites.filter(f => f !== name)
    : [...favorites, name];

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderMenu();
}


const monthlyPackages = [
  {
    name: "Starter Office",
    cupsPerDay: "20 cups/day",
    price: "₹4,999 / month",
    includes: ["Milk Tea", "Green Tea", "Ginger Tea"]
  },
  {
    name: "Standard Office",
    cupsPerDay: "40 cups/day",
    price: "₹8,999 / month",
    includes: ["Milk Tea", "Green Tea", "Masala Tea", "Lemon Tea"]
  },
  {
    name: "Premium Office",
    cupsPerDay: "Unlimited",
    price: "₹14,999 / month",
    includes: ["All Tea Types", "On-call refill", "Priority support"]
  }
];
  function renderPackages(){
  const grid = document.getElementById("packageGrid");
  grid.innerHTML = "";

  monthlyPackages.forEach(p => {
    grid.innerHTML += `
      <div class="border rounded-lg p-4 shadow">
        <h3 class="text-lg font-bold mb-1">${p.name}</h3>
        <p class="text-sm text-gray-500">${p.cupsPerDay}</p>

        <p class="text-xl font-semibold my-2 text-green-700">${p.price}</p>

        <ul class="text-sm text-gray-600 mb-3">
          ${p.includes.map(i => `<li>✔ ${i}</li>`).join("")}
        </ul>

        <button onclick="openCorporateForm('${p.name}')"
          class="w-full py-2 bg-green-600 text-white rounded">
          Request Subscription
        </button>
      </div>
    `;
  });
}
function openCorporateForm(packageName){
  alert("Corporate enquiry for: " + packageName);
}
