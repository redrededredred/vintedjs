// function to get a valid cookie to use the api

// TODO: add getCookie function

// main function to scrape vinted for a given item

async function getVintedItems(query) {
  var current_page = 1
  var response = await fetch(`https://www.vinted.de/api/v2/catalog/items?page=${current_page.toString}&per_page=500&search_text=${query}`, {method: "GET", 
  headers: {
    "Cookie": "anon_id=b659bf06-9cc8-443b-bbf2-f6370874ca16; v_udt=a3NSMmNlQ2U1aDNteWtmdmVTaEJwUUtyaVIxRThRY1ZCZDJ1NVE9PS0teVpEaGNYNEoyTEU2ZTE0Vy0tbDNLY3MwbWNrK2tCS2ZGVG5sVWZVZz09; v_sid=2b503339ab1afaa2f3c1bf65ec7e327b; _vinted_fr_session=bEdzbThHcDQ3N1Yrelkvek1jNXdBbGpyRWlqZmprMGFRTFFEb3dzTkZxdzQrY1c0NEo1b0h6R3ZnVzlzQi9DZzJRZWZwR2FFUElMTGF3SU9OTGMvSWVxMUhZUk9jOUV2bGxvWHpFYVRIUE0xR3JxYXZwaEwreDlHNlpiVFp3ZTVLcTF3M3QwSitYaVZJSCt0cys3aDc4RE9HaWJyaVVxUjNISkdMVkxwTkhUa0ZuTFYzWlluUEsxU2lxNTlSQUJTM21iSTBKMkxWS2x0U1d3ZExod3dKMkxEakNuWlZmMmdGNkd3YzA2UkNDU0Y2T1laV1diNHVDTEk5bzB1MFV3TG1xaXhxN1gyRTBxZjVjR2Q4d2ZOTzAzc3o1M01aVWhNTDl6USs1RW1Md2FWWGZYUlIvcmtJY0F2R3JQWWtDcWlzQXk1UjRiZzNUam5yMm0yMk9uS1IxRkI0MTFSUHhMSGJ6QnZuMzJlbjlSa3FCUUpzTU5Uc3AxSlFtVUxyeEI4N29YSXFGa1lLdkZwSk9WRS9BQndLcGtNeE42VEFSNWtCRGdvdm8rYy91c0JuV0QzYzdIWnYzeXdsSkI1bW5tWUVSb1M0VHJQUExPMmErdmNlQUZJTUVYWTVsV2VzajF2ZkE1amdLYW5LR2JQRW1OZjZCL1pGTGxTWjNXNVQxMm5veHMrME5HYU9GLzhwVERkdWtLaGVBQXBjNmRsUFhCRTRqYlNSb3FvNUJFc1FWUkErcDVhNzZreHNIM0xKbzIycS9pUmdrNWNCdzFFOTViWTczZnVieTRTb2JLUmpOUGVQQWdtNEFoa05rTVVMckNtZy9SU1A4ZVNiSXNZcEc3L3JBZEVvZjQxcloxVTBCOHpCZ2hHVE9oL0IvaTEzL1cyNGV6T3ZueVZmWUttWkVZc1owMVYxZ2JRSkgvRkRvZnAwdzlTdWV5aVJqS3ZjWXJDZ1ZkT3FhblloSUR1R3p4bjgwdmQ0K3BYQkFkMjZBVU8vbVZhNTFpSU9DY1UwQklOcXdNc29LUHllWGtFWW1idGFhN3RnUWJYTmYvTHBSVHZRZ0RkaXBpV2lGclhwQWF5dU5VNktmTitWOVFpelZJSzFycFpxVWZmS3RscEdQUmhWbmVOOVB4VHpaNGhQSVVXMjVGbzRVck8xZ3A4L0NWMW1oN2ZUTnhVQXUzMU1mT1BwRDh3NlFpMmlHbXB4aEdvb3pEZndDTmNLMlRkN0t1THZvb1NvY3RDak5tRGZOUXFsOEZZcjg5anZxbnU1MFByTG9TN2JUY0V6Tk5uOHl3UkNRUithM25xN1RzY1kyMEhBMjBpR0RvbTYwU0IxMVMvb3BadmYxSXNQYnJhUnBpWHlmZlV1Q2xpU2p1Q3pha2dZZDU3ZThRUjlCNlY4bnJUdkxWUDZIYkhsSnJXa2pjWUlBSlUxeFQ0QStKblU1UjdtV0Urc0IrL1V2eEVnOE5kVkdBZHppRzljWjhld0tGQUduQmU2eWZCRzZRPS0tZkpXdGF5cTJ4cGVHVXp2WDdQKy9FZz09--fbe5d8e0eff412fb594382867a79f5e3436908dc; viewport_size=1600; ab.optOut=This-cookie-will-expire-in-2024; __cf_bm=gsnnlKXSh6O1cNyPxoqqvjFS7JMoI2PNdINHh9v8oTg-1680705371-0-AQiE655YRHoPF23jZmWRwL77s1XlabSm1qKfQFUXylt/+Ql0mNSwb8+dSxpYjg/3EIryYorWdpxRQIjFAZ0P3l9lITnBk90CoakAigfkzIBv"
  }})
  var jsonData = await response.json();
  console.log(jsonData);

  current_page = current_page + 1

  while (jsonData["pagination"]["current_page"] != jsonData["pagination"]["total_pages"]) {
    var response = await fetch(`https://www.vinted.de/api/v2/catalog/items?page=${current_page.toString}&per_page=500&search_text=${query}`, {method: "GET", 
  headers: {
    "Cookie": "anon_id=b659bf06-9cc8-443b-bbf2-f6370874ca16; v_udt=a3NSMmNlQ2U1aDNteWtmdmVTaEJwUUtyaVIxRThRY1ZCZDJ1NVE9PS0teVpEaGNYNEoyTEU2ZTE0Vy0tbDNLY3MwbWNrK2tCS2ZGVG5sVWZVZz09; v_sid=2b503339ab1afaa2f3c1bf65ec7e327b; _vinted_fr_session=bEdzbThHcDQ3N1Yrelkvek1jNXdBbGpyRWlqZmprMGFRTFFEb3dzTkZxdzQrY1c0NEo1b0h6R3ZnVzlzQi9DZzJRZWZwR2FFUElMTGF3SU9OTGMvSWVxMUhZUk9jOUV2bGxvWHpFYVRIUE0xR3JxYXZwaEwreDlHNlpiVFp3ZTVLcTF3M3QwSitYaVZJSCt0cys3aDc4RE9HaWJyaVVxUjNISkdMVkxwTkhUa0ZuTFYzWlluUEsxU2lxNTlSQUJTM21iSTBKMkxWS2x0U1d3ZExod3dKMkxEakNuWlZmMmdGNkd3YzA2UkNDU0Y2T1laV1diNHVDTEk5bzB1MFV3TG1xaXhxN1gyRTBxZjVjR2Q4d2ZOTzAzc3o1M01aVWhNTDl6USs1RW1Md2FWWGZYUlIvcmtJY0F2R3JQWWtDcWlzQXk1UjRiZzNUam5yMm0yMk9uS1IxRkI0MTFSUHhMSGJ6QnZuMzJlbjlSa3FCUUpzTU5Uc3AxSlFtVUxyeEI4N29YSXFGa1lLdkZwSk9WRS9BQndLcGtNeE42VEFSNWtCRGdvdm8rYy91c0JuV0QzYzdIWnYzeXdsSkI1bW5tWUVSb1M0VHJQUExPMmErdmNlQUZJTUVYWTVsV2VzajF2ZkE1amdLYW5LR2JQRW1OZjZCL1pGTGxTWjNXNVQxMm5veHMrME5HYU9GLzhwVERkdWtLaGVBQXBjNmRsUFhCRTRqYlNSb3FvNUJFc1FWUkErcDVhNzZreHNIM0xKbzIycS9pUmdrNWNCdzFFOTViWTczZnVieTRTb2JLUmpOUGVQQWdtNEFoa05rTVVMckNtZy9SU1A4ZVNiSXNZcEc3L3JBZEVvZjQxcloxVTBCOHpCZ2hHVE9oL0IvaTEzL1cyNGV6T3ZueVZmWUttWkVZc1owMVYxZ2JRSkgvRkRvZnAwdzlTdWV5aVJqS3ZjWXJDZ1ZkT3FhblloSUR1R3p4bjgwdmQ0K3BYQkFkMjZBVU8vbVZhNTFpSU9DY1UwQklOcXdNc29LUHllWGtFWW1idGFhN3RnUWJYTmYvTHBSVHZRZ0RkaXBpV2lGclhwQWF5dU5VNktmTitWOVFpelZJSzFycFpxVWZmS3RscEdQUmhWbmVOOVB4VHpaNGhQSVVXMjVGbzRVck8xZ3A4L0NWMW1oN2ZUTnhVQXUzMU1mT1BwRDh3NlFpMmlHbXB4aEdvb3pEZndDTmNLMlRkN0t1THZvb1NvY3RDak5tRGZOUXFsOEZZcjg5anZxbnU1MFByTG9TN2JUY0V6Tk5uOHl3UkNRUithM25xN1RzY1kyMEhBMjBpR0RvbTYwU0IxMVMvb3BadmYxSXNQYnJhUnBpWHlmZlV1Q2xpU2p1Q3pha2dZZDU3ZThRUjlCNlY4bnJUdkxWUDZIYkhsSnJXa2pjWUlBSlUxeFQ0QStKblU1UjdtV0Urc0IrL1V2eEVnOE5kVkdBZHppRzljWjhld0tGQUduQmU2eWZCRzZRPS0tZkpXdGF5cTJ4cGVHVXp2WDdQKy9FZz09--fbe5d8e0eff412fb594382867a79f5e3436908dc; viewport_size=1600; ab.optOut=This-cookie-will-expire-in-2024; __cf_bm=gsnnlKXSh6O1cNyPxoqqvjFS7JMoI2PNdINHh9v8oTg-1680705371-0-AQiE655YRHoPF23jZmWRwL77s1XlabSm1qKfQFUXylt/+Ql0mNSwb8+dSxpYjg/3EIryYorWdpxRQIjFAZ0P3l9lITnBk90CoakAigfkzIBv"
  }})
  var jsonData = await response.json();
  console.log(jsonData);
  current_page = current_page + 1
  console.log(current_page)

  };
}