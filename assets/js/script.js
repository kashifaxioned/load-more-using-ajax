/* Author: 

*/

// initializing elements

let contentItem = $(".content-list")
let listData = []
$(".load-btn").click(showList)

// calling function for load data
showList()

// declaring function for load data
function showList() {

  let listCount;
  let showItem = $(".content-item")
  let numOfItemsToShow = 5

  // selecting how many elements should be selected
  if (showItem.length !== 0) listCount = showItem.length
  else listCount = 0


  // let xhr = new XMLHttpRequest()
  // xhr.open('GET', "https://jsonplaceholder.typicode.com/photos", true)

  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     listData = JSON.parse(xhr.responseText)
  //     for (let i = listCount; i < listCount + numOfItemsToShow; i++) {
  //       const x = listData[i];
  //       if (x.id < listCount) {
  //         break;
  //       } else {
  //         contentItem.append(`
  //       <li class="content-item">
  //       <h2>${x.id}</h2>
  //       <img src=${x.url} alt=${x.id}/>
  //        </li>
  //       `)
  //       }
  //     }
  //   }
  // }
  // xhr.send()

  // Using jquery ajax

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    success:  (xhr) => {  
        listData = xhr
        for (let i = listCount; i < listCount + numOfItemsToShow; i++) {
          const x = listData[i];
          if (x.id < listCount) {
            break;
          } else {
            contentItem.append(`
          <li class="content-item">
          <h2>${x.id}</h2>
          <img src=${x.url} alt=${x.id}/>
           </li>
          `)
          }
      }
    }
  })
}
