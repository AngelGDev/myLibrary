document.querySelector('.popoutButton').addEventListener('click', openForm)
document.querySelector('.cancel').addEventListener('click', closeForm)
document.querySelector('.submit').addEventListener('click', addBook)
document.querySelector('.displayLibrary').addEventListener('click', displayMyLibrary)

function openForm(){
  document.querySelector('.formContainer').reset()
  document.querySelector('.popoutForm').classList.remove('hidden')
  document.querySelector('.popoutButton').classList.add('hidden')
}
function closeForm(){
  document.querySelector('.popoutForm').classList.add('hidden')
}
let myLibrary = []
function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages. ${this.read} `
//   this.delete = () =>
}
function addNewBook(newBook){
  myLibrary.push(newBook)
}
function addBook(){
  document.querySelector('.popoutForm').classList.add('hidden')
  document.querySelector('.popoutButton').classList.remove('hidden')
  let newTitle = document.querySelector('.newTitle').value
  let newAuthor = document.querySelector('.newAuthor').value
  let newPages = document.querySelector('.newPages').value
  let newRead = document.querySelector('.newRead').value

  newBook = new Book(newTitle, newAuthor, newPages, newRead)
  addNewBook(newBook)

}

function displayMyLibrary(){
  document.querySelector('.library').classList.remove('hidden')
  for(let i = 0; i<myLibrary.length; i++){
    document.querySelector('table').innerHTML +=
      `<tr class="i${myLibrary[i].index}">
              <td>${myLibrary[i].title}</td>
              <td>${myLibrary[i].author}</td>
              <td>${myLibrary[i].pages}</td>
              <td>${myLibrary[i].read}</td>
              <td><button type="button" class="btn delete">Delete</button></td>
          </tr>`
  }
}
