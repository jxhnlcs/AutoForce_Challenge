/* Datasheet */

(() => {
  const nav = document.querySelectorAll('.technical-table__car-data .car-data--header-item')
  const contents = document.querySelectorAll('.car-data--content-item')
  
  const changeContent = (navItems, navItem, contentItems) => {
    Array.prototype.forEach.call(navItems, (item) => {
      item.classList.remove('active')
    })
    
    navItem.classList.add('active')
    
    const ref = navItem.getAttribute('data-technical-ref')
    Array.prototype.forEach.call(contentItems, (item) => {
      item.classList.remove('active')
      if(item.classList.contains(ref))
        item.classList.add('active')
    })
  }
  
  Array.prototype.forEach.call(nav, (navItem) => {
    navItem.addEventListener('click', (e) => {
      changeContent(nav, navItem, contents)
    })
  })
})()

/* Gallery */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 14000)

function nextImage(){
  count++
  if(count>6){
    count = 1
  }
  document.getElementById("radio"+count).checked = true;
}

/*Site finalizado 05/02/2023 - 21:16
Por John Lucas
*/