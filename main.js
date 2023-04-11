// function to get a valid cookie to use the api

// TODO: add getCookie function
async function getValidCookie() {
  const url = "https://www.vinted.de/"
  var response = (await fetch(url))
  var newCookie = ""
  for (i = 0; i < response.headers.get("Set-Cookie").split(" ").length; i++) {
    if(response.headers.get("Set-Cookie").split(" ")[i].startsWith("_vinted_fr_session")) {
      newCookie = response.headers.get("Set-Cookie").split(" ")[i]
      break
    }
  }
  return newCookie
}

// main function to scrape vinted for a given item

async function getVintedItems(query) {
  var cookie = await getValidCookie()
  var current_page = 1
  var response = await fetch(`https://www.vinted.de/api/v2/catalog/items?page=${current_page.toString}&per_page=500&search_text=${query}`, {method: "GET", 
  headers: {
    "Cookie": cookie
  }})
  var jsonData = await response.json();
  console.log(jsonData);

  current_page = current_page + 1

  while (jsonData["pagination"]["current_page"] != jsonData["pagination"]["total_pages"]) {
    var response = await fetch(`https://www.vinted.de/api/v2/catalog/items?page=${current_page.toString}&per_page=500&search_text=${query}`, {method: "GET", 
  headers: {
    "Cookie": cookie
  }})
  var jsonData = await response.json();
  console.log(jsonData);
  current_page = current_page + 1
  console.log(current_page)

  };
}

getVintedItems("lol")