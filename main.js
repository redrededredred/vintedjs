// function to get a valid cookie to use with the api
async function getValidCookie() {

  const url = "https://www.vinted.de/"
  var response = await fetch(url)
  var allCookies = response.headers.get("Set-Cookie").split(" ")

  for (i = 0; i < allCookies.length; i++) {
    
    if(allCookies[i].startsWith("_vinted_fr_session")) {
      return allCookies[i]
    }
  }
}

// main function to scrape vinted for a given item 
async function getVintedItems(query) {
  // TODO: return the json instead of logging it for later use
  var cookie = await getValidCookie()
  var current_page = 1
  var url = `https://www.vinted.de/api/v2/catalog/items?page=${current_page.toString}&per_page=500&search_text=${query}`
  var data = new Array
  //this part looks stupid but it should work 


  do {
    var response = await fetch(`https://www.vinted.de/api/v2/catalog/items?page=${current_page.toString}&per_page=500&search_text=${query}`, {method: "GET", 
  headers: {
    "Cookie": cookie
  }})

  var jsonData = await response.json();
  console.log(jsonData);
  data.join(jsonData)
  current_page = current_page + 1
  console.log(current_page)
  } while (current_page != jsonData["pagination"]["total_pages"])
  
 return data
}

