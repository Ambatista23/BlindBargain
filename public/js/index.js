
// Get references to page elements
var $newItem = $("#item-text");
var $newItemDescription = $("#item-description");
var $newCategory = $("#item-category");
var $newPrice = $("#item-price");
var $submitBtn = $("#submit");
var $deleteItemList = $("#delete-item-list");

// for new user
var $submitNewUser = $("real-login")

// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function(Inventory) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/inventory",
      data: JSON.stringify(Inventory)
    });
  },
//working on posting a new user..
//make a route for this user..
  saveUser: function(Users){
    return $.ajax({
      type: "POST",
      url:"/api/user",
      data: JSON.stringify(Users)
    });
  },

  getItem: function() {
    return $.ajax({
      url: "api/examples",
      // url: "/api/item/",
      type: "GET"
    });
  },
  deleteItem: function(id) {
    
    return $.ajax({
      url: "api/inventory/" + id,
      type: "DELETE"
    });
    console.log("hello")
  }
};

// refreshInventory gets new examples from the db and repopulates the list inside index.hdb
var refreshInventory = function() {
  API.getItem().then(function(Inventory) {
    var $newInventory = Inventory.map(function(Inventory) {
      var $a = $("<a>")
        .text(Inventory.product_name)
        .attr("href", "/example/" + Inventory.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Inventory.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $deleteItemList.empty();
    $deleteItemList.append($newInventory);
  });
};

var handleNewUserSubmit = function(event) {
  event.preventDefault();

  var newUser = {
    first_name: $newName.val().trim(),
    last_name: $newLast.val().trim(),
    username: $newUserName.val().trim(),
    passcode: $newPass.val().trim()
  };
  if (!(newUser.first_name && newUser.last_name && newUser.username && newUser.passcode)) {
    alert("you must fill out all input!")
    return;
  }
  API.saveUser(newUser).then(function(){
    location.reload();
  });

  $newName.val("");
  $newLast.val("");
  $newUserName.val("");
  $newPass.val("");

};


// handleFormSubmit is called whenever we submit a new Item.
// Save the new item to the db and refresh the list
var handleFormSubmit = function(event) {
  
  event.preventDefault();

  var postItem = {
    product_name: $newItem.val().trim(),
    description: $newItemDescription.val().trim(),
    category: $newCategory.val().trim(),
    price: $newPrice.val().trim()
  };

  if (!(postItem.product_name && postItem.description && postItem.category && postItem.price)) {
    alert("You must fill out all input!");
    return;
  }

  API.saveItem(postItem).then(function() {
    location.reload();
  });

  
   $newItem.val("");
   $newItemDescription.val("");
   $newCategory.val("");
   $newPrice.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteItem(idToDelete).then(function() {
    refreshInventory();
  });
};

// // Add event listeners to the submit and delete buttons
$submitNewUser.on("click", handleFormSubmit )
$submitBtn.on("click", handleFormSubmit);
$deleteItemList.on("click", ".delete", handleDeleteBtnClick);