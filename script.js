const listItems = [
    { id: 1, name: 'Somayeh', family: 'Dodangeh' },
    { id: 2, name: 'Sara', family: 'Damirchi' },
    { id: 3, name: 'Azadeh', family: 'Dodangeh' },
    { id: 4, name: 'Leili', family: 'Dodangeh' },
    { id: 5, name: 'Neda', family: 'Dodangeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

let userListContainer =document.querySelector('#list')
let paginationContainer =document.querySelector('#pagination')


let currentPage = 1
let rowsCount = 5

function displayUsersList (allUsersArray, usersContainer, rowsCount, currentPage){
    usersContainer.innerHTML = ''
    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginetedUsers = allUsersArray.slice(startIndex, endIndex)
    // console.log(paginetedUsers);

    paginetedUsers.forEach(function(user){
        let userElement = document.createElement('div')
        userElement.classList.add('item')

        userElement.innerHTML = user.name + ' ' + user.family

        // console.log(userElement);
        usersContainer.appendChild(userElement)
    })



} 

function setupPagination(allUsersArray, pagesContainer, rowsCount){
    pagesContainer.innerHTML = '' 
    let pageCount = Math.ceil(allUsersArray.length / rowsCount)   
    for (i=1 ; i<pageCount +1 ; i++ ){
       let btn = paginationButtonGenerator(i, allUsersArray)
       pagesContainer.appendChild(btn)
    }

}

function paginationButtonGenerator(page, allUsersArray){
    let button = document.createElement ('button')
    button.innerHTML = page

    if(page === currentPage){
        button.classList.add ('active')
    }

    button.addEventListener('click', function(){
        currentPage = page
        displayUsersList (allUsersArray, userListContainer, rowsCount, currentPage)

        let prevPage= document.querySelector('button.active')
        prevPage.classList.remove('active')
        button.classList.add ('active')

          
    })

    
    return button

}


displayUsersList (listItems, userListContainer, rowsCount, currentPage)
setupPagination(listItems, paginationContainer, rowsCount)


