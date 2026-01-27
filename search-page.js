var currentQuery = "";

var teaShops = [

  /* ================= ANTHIYUR ================= */

  {
    name: "Anand Tea & Coffee Stall",
    location: "Anthiyur",
    teas: ["Strong Tea","Masala Tea","Ginger Tea","Elaichi Tea"],
    coffees: ["Filter Coffee","Milk Coffee","Strong Coffee"],
    snacks: ["Vada","Biscuit","Bun","Murukku"],
    map: "Anand Tea & Coffee Stall Anthiyur"
  },
  {
    name: "Sri Murugan Tea Kadai",
    location: "Anthiyur",
    teas: ["Strong Tea","Masala Tea","Milk Tea"],
    coffees: ["Filter Coffee","Black Coffee"],
    snacks: ["Samosa","Vada","Cutlet"],
    map: "Sri Murugan Tea Kadai Anthiyur"
  },
  {
    name: "Village Chai & Coffee Point",
    location: "Anthiyur",
    teas: ["Strong Tea","Ginger Tea","Black Tea"],
    coffees: ["Instant Coffee","Milk Coffee"],
    snacks: ["Biscuit","Bun","Mixture"],
    map: "Village Chai & Coffee Point Anthiyur"
  },
  {
    name: "Morning Star Cafe",
    location: "Anthiyur",
    teas: ["Green Tea","Herbal Tea","Lemon Tea"],
    coffees: ["Latte","Cappuccino","Cold Coffee"],
    snacks: ["Cookies","Sandwich","Puff"],
    map: "Morning Star Cafe Anthiyur"
  },

  /* ================= ERODE ================= */

  {
    name: "Raja Tea & Coffee Stall",
    location: "Erode",
    teas: ["Masala Tea","Ginger Tea","Elaichi Tea","Strong Tea"],
    coffees: ["Filter Coffee","Strong Coffee","Milk Coffee"],
    snacks: ["Samosa","Vada","Bajji"],
    map: "Raja Tea & Coffee Stall Erode"
  },
  {
    name: "Green Leaf Tea & Coffee House",
    location: "Erode",
    teas: ["Green Tea","Herbal Tea","Rose Tea"],
    coffees: ["Latte","Cappuccino","Black Coffee"],
    snacks: ["Cookies","Puff","Sandwich"],
    map: "Green Leaf Tea & Coffee House Erode"
  },
  {
    name: "City Chai & Coffee Centre",
    location: "Erode",
    teas: ["Strong Tea","Masala Tea","Milk Tea"],
    coffees: ["Instant Coffee","Bru Coffee"],
    snacks: ["Bonda","Cutlet","Bun"],
    map: "City Chai & Coffee Centre Erode"
  },
  {
    name: "Evening Tea & Coffee Corner",
    location: "Erode",
    teas: ["Ginger Tea","Lemon Tea","Black Tea"],
    coffees: ["Milk Coffee","Strong Coffee"],
    snacks: ["Biscuit","Mixture","Murukku"],
    map: "Evening Tea & Coffee Corner Erode"
  },
  {
    name: "Street Chai & Coffee Spot",
    location: "Erode",
    teas: ["Elaichi Tea","Strong Tea"],
    coffees: ["Filter Coffee"],
    snacks: ["Bajji","Vada"],
    map: "Street Chai & Coffee Spot Erode"
  },

  /* ================= SALEM ================= */

  {
    name: "Salem Tea & Coffee Point",
    location: "Salem",
    teas: ["Masala Tea","Rose Tea","Milk Tea"],
    coffees: ["Filter Coffee","Milk Coffee"],
    snacks: ["Samosa","Cutlet","Puff"],
    map: "Salem Tea & Coffee Point"
  },
  {
    name: "Highway Tea & Coffee Stop",
    location: "Salem",
    teas: ["Strong Tea","Ginger Tea","Elaichi Tea"],
    coffees: ["Black Coffee","Strong Coffee"],
    snacks: ["Vada","Bajji","Bonda"],
    map: "Highway Tea & Coffee Stop Salem"
  },
  {
    name: "Hill View Tea & Coffee Cafe",
    location: "Salem",
    teas: ["Green Tea","Herbal Tea","Lemon Tea"],
    coffees: ["Latte","Cappuccino","Cold Coffee"],
    snacks: ["Cookies","Sandwich"],
    map: "Hill View Tea & Coffee Cafe Salem"
  },
  {
    name: "Central Chai & Coffee House",
    location: "Salem",
    teas: ["Strong Tea","Black Tea"],
    coffees: ["Instant Coffee","Nescafe Coffee"],
    snacks: ["Biscuit","Murukku","Mixture"],
    map: "Central Chai & Coffee House Salem"
  },
  {
    name: "Evening Brew Cafe",
    location: "Salem",
    teas: ["Masala Tea","Ginger Tea"],
    coffees: ["Milk Coffee","Cold Coffee"],
    snacks: ["Bun","Cutlet"],
    map: "Evening Brew Cafe Salem"
  },

  /* ================= CHENNAI ================= */

  {
    name: "Chennai Chai & Coffeewala",
    location: "Chennai",
    teas: ["Masala Tea","Kashmiri Kahwa","Milk Tea"],
    coffees: ["Filter Coffee","Black Coffee","Latte"],
    snacks: ["Samosa","Bread Omelette","Sandwich"],
    map: "Chennai Chai & Coffeewala"
  },
  {
    name: "Beachside Tea & Coffee Corner",
    location: "Chennai",
    teas: ["Strong Tea","Lemon Tea","Black Tea"],
    coffees: ["Cold Coffee","Milk Coffee"],
    snacks: ["Sundal","Bajji","Murukku"],
    map: "Beachside Tea & Coffee Corner Chennai"
  },
  {
    name: "Metro Tea & Coffee Hub",
    location: "Chennai",
    teas: ["Green Tea","Herbal Tea","Rose Tea"],
    coffees: ["Cappuccino","Latte","Nescafe Coffee"],
    snacks: ["Cookies","Puff","Sandwich"],
    map: "Metro Tea & Coffee Hub Chennai"
  },
  {
    name: "Night Owl Chai & Coffee",
    location: "Chennai",
    teas: ["Strong Tea","Masala Tea"],
    coffees: ["Black Coffee","Strong Coffee"],
    snacks: ["Bread Omelette","Bun"],
    map: "Night Owl Chai & Coffee Chennai"
  },
  {
    name: "Royal Tea & Coffee Lounge",
    location: "Chennai",
    teas: ["Cardamom Tea","Elaichi Tea","Milk Tea"],
    coffees: ["Filter Coffee","Latte","Cappuccino"],
    snacks: ["Cutlet","Samosa","Puff"],
    map: "Royal Tea & Coffee Lounge Chennai"
  }

];



/* ===============================
   Decide what user searched
   =============================== */
function getSearchType(query) {
  query = query.toLowerCase();

  if (query.includes("near")) return "NEAR";

  for (var i = 0; i < teaShops.length; i++) {
    if (teaShops[i].name.toLowerCase().includes(query)) {
      return "SHOP";
    }
  }

  for (var i = 0; i < teaShops.length; i++) {
    if (teaShops[i].location.toLowerCase() === query) {
      return "PLACE";
    }
  }

  return "ITEM";
}


function filterResults(query) {
  query = query.replace(/\+/g, " ").trim().toLowerCase();
  currentQuery = query;

  var box = document.getElementById("results");
  var loader = document.getElementById("loader");

  // Show loader
  loader.classList.remove("hidden");
  box.innerHTML = "";
  box.appendChild(loader);

  // Simulate loading delay (real apps do this)
  setTimeout(function () {

    loader.classList.add("hidden");

    history.pushState(
      { view: "LIST", query: query },
      "",
      window.location.pathname + "?q=" + encodeURIComponent(query)
    );

    var type = getSearchType(query);

    if (type === "SHOP") {
      showShopDetails(query);
    } else {
      showShopList(query, type);
    }

  }, 700); // 0.7 second smooth delay
}



function showShopList(query, type) {
  var box = document.getElementById("results");
  box.innerHTML = "";
  var found = false;

  for (var i = 0; i < teaShops.length; i++) {
    var shop = teaShops[i];
    var match = false;

    if (type === "PLACE" && shop.location.toLowerCase() === query) {
      match = true;
    }

    if (type === "NEAR") {
      match = true;
    }

    if (type === "ITEM") {
      var items = shop.teas.concat(shop.coffees, shop.snacks);
      for (var j = 0; j < items.length; j++) {
        if (items[j].toLowerCase().includes(query)) {
          match = true;
        }
      }
    }

    if (match) {
      found = true;
      box.innerHTML +=
  '<div class="shop-card">' +

    '<div class="card-top">' +
      '<h3>' + shop.name + '</h3>' +
      '<span class="badge">Open Now</span>' +
    '</div>' +

    '<p class="card-location">📍 ' + shop.location + '</p>' +

    '<div class="card-tags">' +
      '<span>🍵 Tea</span>' +
      '<span>☕ Coffee</span>' +
      '<span>🥐 Snacks</span>' +
    '</div>' +

    '<button onclick="showShopDetails(\'' + shop.name + '\')" class="details-btn">' +
      'View Details' +
    '</button>' +

  '</div>';

    }
  }

  if (!found) {
  box.innerHTML = `
  <div class="empty-state">
    <i class="fa-solid fa-mug-saucer"></i>
    <h3>No tea shops found</h3>
    <p>Try searching with one of these popular options</p>

    <div class="empty-chips">
      <span onclick="filterResults('Masala Tea')">Masala Tea</span>
      <span onclick="filterResults('Samosa')">Samosa</span>
      <span onclick="filterResults('Erode')">Erode</span>
    </div>

    <button onclick="history.back()">← Go Back</button>
  </div>
`;



  }
}


function showShopDetails(name) {
  // Save DETAIL view in history
  history.pushState(
    { view: "DETAIL", shop: name },
    "",
    window.location.pathname + "?shop=" + encodeURIComponent(name)
  );

  var box = document.getElementById("results");
  box.innerHTML = "";

  for (var i = 0; i < teaShops.length; i++) {
    var shop = teaShops[i];

    if (shop.name.toLowerCase().includes(name.toLowerCase())) {
      box.innerHTML =
  '<div class="results-header">' +
    '<button onclick="history.back()" class="back-btn">← Back </button>' +
  '</div>' +

  '<div class="shop-card detail-card">' +
    '<h2>' + shop.name + '</h2>' +

    '<p class="detail-location">' +
      '<b>Location:</b> ' + shop.location +
    '</p>' +

    '<div class="detail-group">' +
      '<span class="label">Teas</span>' +
      '<p>' + shop.teas.join(", ") + '</p>' +
    '</div>' +

    '<div class="detail-group">' +
      '<span class="label">Coffees</span>' +
      '<p>' + shop.coffees.join(", ") + '</p>' +
    '</div>' +

    '<div class="detail-group">' +
      '<span class="label">Snacks</span>' +
      '<p>' + shop.snacks.join(", ") + '</p>' +
    '</div>' +

    '<button class="direction-btn" data-place="' + shop.map + '" onclick="openMap(this.dataset.place)">' +
      'Get Directions' +
    '</button>' +
  '</div>';
    }
  }
}




/* ======================================================
   READ QUERY FROM URL
   ====================================================== */
function getQuery() {
  return new URLSearchParams(window.location.search).get("q") || "";
}


function openMap(place) {
  var url =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(place);

  window.open(url, "_blank");
}

/* ======================================================
   AUTO SEARCH ON PAGE LOAD (FROM HOME PAGE)
   ====================================================== */

window.onload = function () {
  // Get search query from URL
  var q = getQuery();

  // If query exists, run search logic
  if (q) {
    filterResults(q);
  }
};


window.onpopstate = function (event) {
  if (!event.state) {
    // No state → go home
    window.location.href = "index.html";
    return;
  }

  if (event.state.view === "LIST") {
    showShopList(event.state.query, getSearchType(event.state.query));
  }

  if (event.state.view === "DETAIL") {
    showShopDetails(event.state.shop);
  }
};

