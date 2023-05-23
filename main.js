// Get the items array from the JSON string.
const data = `{
    "items": [
      {
        "name": "Pepperoni pizza",
        "description": "This is a leftover pepperoni pizza. Very tasty!",
        "price": 20,
        "url": "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg"
      },
      {
        "name": "Pet bird",
        "description": "A very cute budgie.",
        "price": 50,
        "url": "https://www.rspca.org.au/sites/default/files/blog-image/shutterstock_685368169.jpg"
      },
      {
        "name": "Chocolate icecream",
        "description": "Nothing's better than chocolate icecream for dessert",
        "price": 8,
        "url": "https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg"
      }
    ]
  }`;

const parsingdata = JSON.parse(data);
// Add the items to the list.
parsingdata.items.forEach((item) => {
  const li = document.createElement("li");
  li.innerText =
    "Name: " +
    item.name +
    "\n" +
    "Description: " +
    item.description +
    "\n" +
    "Price: " +
    item.price +
    "\n";
  document.getElementById("items").appendChild(li);
  const img = document.createElement("img");
  img.src = item.url;
  img.height = 150;
  document.getElementById("items").appendChild(img);

  // Add a delete button to the list item.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteItem.bind(null, li));
  deleteButton.addEventListener("click", deleteItem.bind(null, img));
  li.appendChild(deleteButton);

  const lineBreak = document.createElement("lineBreak");
  lineBreak.innerText = "\n" + "\n" + "\n";
  document.getElementById("items").appendChild(lineBreak);
});

function addItem() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const dummyImg = document.getElementById("url").value;

  if (
    name.trim() !== "" &&
    description.trim() !== "" &&
    price.trim() !== "" &&
    dummyImg.trim() !== ""
  ) {
    const item = {
      name,
      description,
      price,
    };
    const items = document.getElementById("items");
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = document.getElementById("url").value;
    img.height = 150;

    li.appendChild(document.createTextNode("Name: " + item.name));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode("Description: " + item.description));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode("Price: " + item.price));
    li.appendChild(document.createElement("br"));
    items.appendChild(li);
    items.appendChild(img);

    // Add a delete button to the list item.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteItem.bind(null, li));
    deleteButton.addEventListener("click", deleteItem.bind(null, img));
    li.appendChild(deleteButton);
  } else {
    alert("Please enter all the required fields.");
  }
}

function deleteItem(li) {
  li.remove();
  img.remove();
}

document.getElementById("submit").addEventListener("click", addItem);

document.getElementById("deleteAll").addEventListener("click", () => {
  // Remove all the items from the list
  document.getElementById("items").innerHTML = "";
});
