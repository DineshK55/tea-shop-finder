var currentQuery = "";

/* ===============================
   UPDATE RESULT TITLE
   =============================== */
function updateResultTitle(text) {
  var title = document.getElementById("resultTitle");
  if (title) title.innerText = text;
}

/* ===============================
   TEA SHOPS DATA
   (UNCHANGED – YOUR DATA)
   =============================== */
var teaShops = [

/* ================= ANTHIYUR ================= */

{
  name: "Anand Tea & Coffee Stall",
  location: "Anthiyur",
  teas: ["Strong Tea","Masala Tea","Ginger Tea","Elaichi Tea","Lemon Tea"],
  coffees: ["Filter Coffee","Milk Coffee","Strong Coffee"],
  snacks: ["Vada","Biscuit","Bun","Murukku","Samosa"],
  map: "Anand Tea & Coffee Stall Anthiyur"
},
{
  name: "Sri Murugan Tea Kadai",
  location: "Anthiyur",
  teas: ["Strong Tea","Milk Tea","Masala Tea","Ginger Tea"],
  coffees: ["Filter Coffee","Black Coffee"],
  snacks: ["Samosa","Vada","Cutlet","Bajji"],
  map: "Sri Murugan Tea Kadai Anthiyur"
},
{
  name: "Bus Stand Tea Shop",
  location: "Anthiyur",
  teas: ["Strong Tea","Ginger Tea","Black Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Bun","Biscuit","Mixture"],
  map: "Bus Stand Tea Shop Anthiyur"
},
{
  name: "Evening Chai Point",
  location: "Anthiyur",
  teas: ["Masala Tea","Elaichi Tea","Lemon Tea"],
  coffees: ["Strong Coffee","Milk Coffee"],
  snacks: ["Cutlet","Vada","Bajji"],
  map: "Evening Chai Point Anthiyur"
},
{
  name: "Village Chai & Coffee",
  location: "Anthiyur",
  teas: ["Strong Tea","Ginger Tea","Milk Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Murukku","Biscuit","Bun"],
  map: "Village Chai & Coffee Anthiyur"
},
{
  name: "Friends Tea Corner",
  location: "Anthiyur",
  teas: ["Masala Tea","Strong Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Samosa","Vada"],
  map: "Friends Tea Corner Anthiyur"
},
{
  name: "Morning Star Cafe",
  location: "Anthiyur",
  teas: ["Green Tea","Herbal Tea","Lemon Tea"],
  coffees: ["Latte","Cappuccino","Cold Coffee"],
  snacks: ["Cookies","Sandwich","Puff"],
  map: "Morning Star Cafe Anthiyur"
},
{
  name: "Town Chai Kadai",
  location: "Anthiyur",
  teas: ["Strong Tea","Black Tea"],
  coffees: ["Strong Coffee"],
  snacks: ["Bun","Mixture"],
  map: "Town Chai Kadai Anthiyur"
},
{
  name: "Highway Tea Stop",
  location: "Anthiyur",
  teas: ["Ginger Tea","Masala Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Bajji","Vada"],
  map: "Highway Tea Stop Anthiyur"
},
{
  name: "Classic Tea Point",
  location: "Anthiyur",
  teas: ["Elaichi Tea","Milk Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Cutlet"],
  map: "Classic Tea Point Anthiyur"
},
{
  name: "Night Chai Stall",
  location: "Anthiyur",
  teas: ["Strong Tea","Masala Tea"],
  coffees: ["Black Coffee"],
  snacks: ["Bread Omelette","Bun"],
  map: "Night Chai Stall Anthiyur"
},
{
  name: "Green Leaf Tea Shop",
  location: "Anthiyur",
  teas: ["Green Tea","Herbal Tea"],
  coffees: ["Latte"],
  snacks: ["Cookies","Puff"],
  map: "Green Leaf Tea Shop Anthiyur"
},
{
  name: "Local Tea Kada",
  location: "Anthiyur",
  teas: ["Strong Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Vada","Murukku"],
  map: "Local Tea Kada Anthiyur"
},
{
  name: "Market Road Tea Shop",
  location: "Anthiyur",
  teas: ["Masala Tea","Lemon Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Bajji"],
  map: "Market Road Tea Shop Anthiyur"
},
{
  name: "Royal Chai Point",
  location: "Anthiyur",
  teas: ["Milk Tea","Elaichi Tea"],
  coffees: ["Strong Coffee"],
  snacks: ["Cutlet","Bun"],
  map: "Royal Chai Point Anthiyur"
},

/* ================= ERODE ================= */

{
  name: "Raja Tea Stall",
  location: "Erode",
  teas: ["Strong Tea","Masala Tea","Ginger Tea","Elaichi Tea"],
  coffees: ["Filter Coffee","Strong Coffee"],
  snacks: ["Samosa","Vada","Bajji"],
  map: "Raja Tea Stall Erode"
},
{
  name: "Railway Station Tea Shop",
  location: "Erode",
  teas: ["Strong Tea","Milk Tea","Black Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Bun","Biscuit","Cutlet"],
  map: "Railway Station Tea Shop Erode"
},
{
  name: "Kongu Tea & Coffee",
  location: "Erode",
  teas: ["Masala Tea","Ginger Tea","Lemon Tea"],
  coffees: ["Milk Coffee","Strong Coffee"],
  snacks: ["Vada","Bajji","Murukku"],
  map: "Kongu Tea & Coffee Erode"
},
{
  name: "Bus Stand Chai Point",
  location: "Erode",
  teas: ["Strong Tea","Black Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Samosa","Bonda"],
  map: "Bus Stand Chai Point Erode"
},
{
  name: "Evening Brew Cafe",
  location: "Erode",
  teas: ["Green Tea","Herbal Tea"],
  coffees: ["Latte","Cold Coffee"],
  snacks: ["Cookies","Sandwich"],
  map: "Evening Brew Cafe Erode"
},
{
  name: "Street Chai Corner",
  location: "Erode",
  teas: ["Masala Tea","Strong Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Bajji","Vada"],
  map: "Street Chai Corner Erode"
},
{
  name: "City Tea Kada",
  location: "Erode",
  teas: ["Milk Tea","Elaichi Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Cutlet","Bun"],
  map: "City Tea Kada Erode"
},
{
  name: "Night Owl Tea Shop",
  location: "Erode",
  teas: ["Strong Tea","Masala Tea"],
  coffees: ["Black Coffee"],
  snacks: ["Bread Omelette","Bun"],
  map: "Night Owl Tea Shop Erode"
},
{
  name: "Green Leaf Cafe",
  location: "Erode",
  teas: ["Green Tea","Rose Tea"],
  coffees: ["Latte","Cappuccino"],
  snacks: ["Cookies","Puff"],
  map: "Green Leaf Cafe Erode"
},
{
  name: "Highway Tea Stop",
  location: "Erode",
  teas: ["Ginger Tea","Lemon Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Vada","Bajji"],
  map: "Highway Tea Stop Erode"
},
{
  name: "Friends Chai Stall",
  location: "Erode",
  teas: ["Strong Tea","Milk Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Cutlet"],
  map: "Friends Chai Stall Erode"
},
{
  name: "Classic Tea Corner",
  location: "Erode",
  teas: ["Elaichi Tea","Masala Tea"],
  coffees: ["Strong Coffee"],
  snacks: ["Murukku","Mixture"],
  map: "Classic Tea Corner Erode"
},
{
  name: "Morning Brew Cafe",
  location: "Erode",
  teas: ["Green Tea","Herbal Tea"],
  coffees: ["Latte"],
  snacks: ["Sandwich","Cookies"],
  map: "Morning Brew Cafe Erode"
},
{
  name: "Local Tea Shop",
  location: "Erode",
  teas: ["Strong Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Vada","Bun"],
  map: "Local Tea Shop Erode"
},
{
  name: "Royal Tea Lounge",
  location: "Erode",
  teas: ["Milk Tea","Ginger Tea"],
  coffees: ["Filter Coffee","Cappuccino"],
  snacks: ["Puff","Cutlet"],
  map: "Royal Tea Lounge Erode"
},

/* ================= SALEM ================= */

{
  name: "Salem Famous Tea Kadai",
  location: "Salem",
  teas: ["Strong Tea","Masala Tea","Ginger Tea"],
  coffees: ["Filter Coffee","Milk Coffee"],
  snacks: ["Samosa","Vada","Bajji"],
  map: "Salem Famous Tea Kadai"
},
{
  name: "New Bus Stand Tea Shop",
  location: "Salem",
  teas: ["Milk Tea","Elaichi Tea","Lemon Tea"],
  coffees: ["Strong Coffee"],
  snacks: ["Bun","Biscuit","Cutlet"],
  map: "New Bus Stand Tea Shop Salem"
},
{
  name: "Highway Chai Point",
  location: "Salem",
  teas: ["Strong Tea","Black Tea"],
  coffees: ["Milk Coffee","Cold Coffee"],
  snacks: ["Bajji","Vada","Bonda"],
  map: "Highway Chai Point Salem"
},
{
  name: "Hill View Cafe",
  location: "Salem",
  teas: ["Green Tea","Herbal Tea"],
  coffees: ["Latte","Cappuccino"],
  snacks: ["Sandwich","Cookies"],
  map: "Hill View Cafe Salem"
},
{
  name: "Evening Brew Cafe",
  location: "Salem",
  teas: ["Masala Tea","Ginger Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Murukku","Mixture","Bun"],
  map: "Evening Brew Cafe Salem"
},
{
  name: "Central Tea Point",
  location: "Salem",
  teas: ["Strong Tea","Milk Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Vada","Cutlet"],
  map: "Central Tea Point Salem"
},
{
  name: "Market Road Tea Shop",
  location: "Salem",
  teas: ["Elaichi Tea","Lemon Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Bajji"],
  map: "Market Road Tea Shop Salem"
},
{
  name: "Night Owl Chai",
  location: "Salem",
  teas: ["Strong Tea","Masala Tea"],
  coffees: ["Black Coffee"],
  snacks: ["Bread Omelette","Bun"],
  map: "Night Owl Chai Salem"
},
{
  name: "Green Leaf Tea Cafe",
  location: "Salem",
  teas: ["Green Tea","Rose Tea"],
  coffees: ["Latte"],
  snacks: ["Cookies","Puff"],
  map: "Green Leaf Tea Cafe Salem"
},
{
  name: "Friends Tea Stall",
  location: "Salem",
  teas: ["Milk Tea","Ginger Tea"],
  coffees: ["Strong Coffee"],
  snacks: ["Vada","Bun"],
  map: "Friends Tea Stall Salem"
},
{
  name: "Town Chai Kada",
  location: "Salem",
  teas: ["Strong Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Murukku","Mixture"],
  map: "Town Chai Kada Salem"
},
{
  name: "Royal Tea Lounge",
  location: "Salem",
  teas: ["Masala Tea","Elaichi Tea"],
  coffees: ["Filter Coffee","Cappuccino"],
  snacks: ["Cutlet","Puff"],
  map: "Royal Tea Lounge Salem"
},
{
  name: "Morning Brew Cafe",
  location: "Salem",
  teas: ["Green Tea","Herbal Tea"],
  coffees: ["Latte"],
  snacks: ["Sandwich","Cookies"],
  map: "Morning Brew Cafe Salem"
},
{
  name: "Highway Tea Stop",
  location: "Salem",
  teas: ["Ginger Tea","Lemon Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Vada","Bajji"],
  map: "Highway Tea Stop Salem"
},
{
  name: "Classic Tea Corner",
  location: "Salem",
  teas: ["Strong Tea","Milk Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Bun"],
  map: "Classic Tea Corner Salem"
},

/* ================= CHENNAI ================= */

{
  name: "Chennai Chai & Coffeewala",
  location: "Chennai",
  teas: ["Masala Tea","Kashmiri Kahwa","Milk Tea","Elaichi Tea"],
  coffees: ["Filter Coffee","Black Coffee","Latte"],
  snacks: ["Samosa","Bread Omelette","Sandwich"],
  map: "Chennai Chai & Coffeewala"
},
{
  name: "Beach Road Tea Stall",
  location: "Chennai",
  teas: ["Strong Tea","Lemon Tea","Black Tea"],
  coffees: ["Cold Coffee","Milk Coffee"],
  snacks: ["Sundal","Bajji","Murukku"],
  map: "Beach Road Tea Stall Chennai"
},
{
  name: "Metro Tea & Coffee Hub",
  location: "Chennai",
  teas: ["Green Tea","Rose Tea","Herbal Tea"],
  coffees: ["Cappuccino","Latte"],
  snacks: ["Puff","Cookies","Sandwich"],
  map: "Metro Tea & Coffee Hub Chennai"
},
{
  name: "Night Owl Chai Shop",
  location: "Chennai",
  teas: ["Strong Tea","Masala Tea"],
  coffees: ["Black Coffee","Strong Coffee"],
  snacks: ["Bread Omelette","Bun"],
  map: "Night Owl Chai Shop Chennai"
},
{
  name: "Royal Tea Lounge",
  location: "Chennai",
  teas: ["Cardamom Tea","Milk Tea","Ginger Tea"],
  coffees: ["Filter Coffee","Latte","Cappuccino"],
  snacks: ["Cutlet","Samosa","Puff"],
  map: "Royal Tea Lounge Chennai"
},
{
  name: "Anna Nagar Tea Point",
  location: "Chennai",
  teas: ["Strong Tea","Milk Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Vada","Samosa"],
  map: "Anna Nagar Tea Point Chennai"
},
{
  name: "T Nagar Chai Stall",
  location: "Chennai",
  teas: ["Masala Tea","Elaichi Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Cutlet","Bun"],
  map: "T Nagar Chai Stall Chennai"
},
{
  name: "Besant Nagar Beach Tea",
  location: "Chennai",
  teas: ["Strong Tea","Lemon Tea"],
  coffees: ["Cold Coffee"],
  snacks: ["Sundal","Bajji"],
  map: "Besant Nagar Beach Tea Chennai"
},
{
  name: "Mount Road Tea Shop",
  location: "Chennai",
  teas: ["Strong Tea","Black Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Bun","Biscuit"],
  map: "Mount Road Tea Shop Chennai"
},
{
  name: "Guindy Chai Point",
  location: "Chennai",
  teas: ["Milk Tea","Ginger Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Cutlet"],
  map: "Guindy Chai Point Chennai"
},
{
  name: "Velachery Tea Corner",
  location: "Chennai",
  teas: ["Masala Tea","Strong Tea"],
  coffees: ["Strong Coffee"],
  snacks: ["Vada","Bajji"],
  map: "Velachery Tea Corner Chennai"
},
{
  name: "Porur Tea Kada",
  location: "Chennai",
  teas: ["Strong Tea"],
  coffees: ["Milk Coffee"],
  snacks: ["Murukku","Mixture"],
  map: "Porur Tea Kada Chennai"
},
{
  name: "OMR Tea Stop",
  location: "Chennai",
  teas: ["Ginger Tea","Lemon Tea"],
  coffees: ["Cold Coffee"],
  snacks: ["Bun","Cutlet"],
  map: "OMR Tea Stop Chennai"
},
{
  name: "Tambaram Tea Shop",
  location: "Chennai",
  teas: ["Milk Tea","Elaichi Tea"],
  coffees: ["Filter Coffee"],
  snacks: ["Samosa","Vada"],
  map: "Tambaram Tea Shop Chennai"
},
{
  name: "Adyar Green Leaf Cafe",
  location: "Chennai",
  teas: ["Green Tea","Herbal Tea"],
  coffees: ["Latte","Cappuccino"],
  snacks: ["Cookies","Sandwich"],
  map: "Adyar Green Leaf Cafe Chennai"
}

];


/* ===============================
   SEARCH TYPE (LOCKED TO PLACE)
   =============================== */
function getSearchType() {
  return "PLACE";
}

/* ===============================
   FILTER RESULTS
   =============================== */
function filterResults(query) {
  query = query.replace(/\+/g, " ").trim().toLowerCase();
  currentQuery = query;

  var box = document.getElementById("results");
  var loader = document.getElementById("loader");

  if (loader) {
    loader.classList.remove("hidden");
    box.innerHTML = "";
    box.appendChild(loader);
  }

  setTimeout(function () {
    if (loader) loader.classList.add("hidden");

    history.pushState(
      { view: "LIST", query: query },
      "",
      window.location.pathname + "?q=" + encodeURIComponent(query)
    );

    updateResultTitle("Popular Tea Shops in " + query.toUpperCase());
    showShopList(query);
  }, 500);
}

/* ===============================
   SHOW SHOP LIST (PLACE ONLY)
   =============================== */
function showShopList(query) {
  var box = document.getElementById("results");
  var homeBtn = document.getElementById("backToHome");

  if (homeBtn) homeBtn.style.display = "block";

  box.innerHTML = "";
  var found = false;

  query = query.trim().toLowerCase();

  for (var i = 0; i < teaShops.length; i++) {
    var shop = teaShops[i];

    if (shop.location.trim().toLowerCase() === query) {
      found = true;

      box.innerHTML +=
        '<div class="shop-card">' +
          '<div class="card-top">' +
            '<h3>' + shop.name.replace(/</g,"&lt;") + '</h3>' +
            '<span class="badge">Open Now</span>' +
          '</div>' +
          '<p class="card-location">📍 ' + shop.location + '</p>' +
          '<div class="card-tags">' +
            '<span>🍵 Tea</span>' +
            '<span>☕ Coffee</span>' +
            '<span>🥐 Snacks</span>' +
          '</div>' +
          '<button class="details-btn" onclick="showShopDetails(\'' + shop.name + '\')">' +
            'View Details' +
          '</button>' +
        '</div>';
    }
  }

  if (!found) {
    box.innerHTML =
      '<div class="empty-state">' +
        '<h3>No tea shops found in ' + query.toUpperCase() + '</h3>' +
        '<button onclick="history.back()">← Go Back</button>' +
      '</div>';
  }
}


/* ===============================
   SHOW SHOP DETAILS
   =============================== */
function showShopDetails(name) {
  var box = document.getElementById("results");
  var homeBtn = document.getElementById("backToHome");

  if (homeBtn) homeBtn.style.display = "none";

  history.pushState(
    { view: "DETAIL", shop: name },
    "",
    window.location.pathname + "?shop=" + encodeURIComponent(name)
  );

  box.innerHTML = "";

  for (var i = 0; i < teaShops.length; i++) {
    var shop = teaShops[i];

    if (shop.name === name) {
      box.innerHTML =
        '<div class="results-header">' +
          '<button class="back-btn" onclick="history.back()">← Back</button>' +
        '</div>' +
        '<div class="shop-card detail-card">' +
          '<h2>' + shop.name + '</h2>' +
          '<p><b>Location:</b> ' + shop.location + '</p>' +
          '<div class="detail-group"><b>Teas:</b> ' + shop.teas.join(", ") + '</div>' +
          '<div class="detail-group"><b>Coffees:</b> ' + shop.coffees.join(", ") + '</div>' +
          '<div class="detail-group"><b>Snacks:</b> ' + shop.snacks.join(", ") + '</div>' +
          '<button class="direction-btn" onclick="openMap(\'' + shop.map + '\')">' +
            'Get Directions' +
          '</button>' +
        '</div>';
    }
  }
}

/* ===============================
   MAP
   =============================== */
function openMap(place) {
  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(place),
    "_blank"
  );
}

/* ===============================
   AUTO LOAD FROM URL
   =============================== */
window.onload = function () {
  var q = new URLSearchParams(window.location.search).get("q");
  if (q) filterResults(q);
};

/* ===============================
   BACK BUTTON HANDLING
   =============================== */
window.onpopstate = function (event) {
  if (!event.state) {
    window.location.href = "index.html";
    return;
  }

  if (event.state.view === "LIST") {
    showShopList(event.state.query);
  }

  if (event.state.view === "DETAIL") {
    showShopDetails(event.state.shop);
  }
};

function goHome() {
  window.location.href = "index.html";
}

loader.classList.remove("hidden");

setTimeout(function () {
  loader.classList.add("hidden");
  showShopList(query);
}, 700);
