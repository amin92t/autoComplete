const searchWrapper = document.querySelector('.wrapper')
const searchInput = document.querySelector('.input-search')
const suggestionBox = document.querySelector('.suggestion-box')

searchInput.addEventListener('keyup',event=>{
    let searchValue = event.target.value
    // console.log(searchValue)

    if(searchValue){
    let filterItems = suggestions.filter(word=>{
       return word.toLowerCase().includes(searchValue.toLowerCase())
    })
        // console.log(filterItems)
        searchWrapper.classList.add('active')
        displayItems(filterItems)
    }else{
        searchWrapper.classList.remove('acitve')
    }

})

function displayItems(itemsArray){
    let customListItem
    let itemLists = itemsArray.map(item=>{
        return '<li>' + item + '</li>'
    })
    customListItem = itemLists.join('')
    // console.log(itemLists)
    suggestionBox.innerHTML = customListItem
    selectItem()
}

function selectItem(){
    let selectedItem = suggestionBox.querySelectorAll('li')
    selectedItem.forEach(item=>{
        item.addEventListener('click',(event)=>{
            // console.log(event)
            searchInput.value = event.target.textContent
        })
    })
}