let myLibrary = []
document.querySelector('.addNew').addEventListener('click', showForm)
document.querySelector('.cancel').addEventListener('click', cancelForm)
document.querySelector('.submit').addEventListener('click', submitForm)
document.querySelector('.showLibrary').addEventListener('click', toggleLibrary)
// document.querySelector('.readNotRead').addEventListener('click', toggleRead) use this on the cards
// document.querySelector('.deleteEntry').addEventListener('click', deleteBook) use this on the cards

function showForm(){
  document.querySelector('.popoutForm').classList.remove('hidden')
}
function cancelForm(){
  document.querySelector('.popoutForm').classList.add('hidden')
  document.querySelector('form').reset()
}
function submitForm(){
  let formTitle = document.querySelector('.formTitle').value
  let formAuthor = document.querySelector('.formAuthor').value
  let formLength = document.querySelector('.formLength').value
  let formReadStatus = document.querySelector('input[name=readStatus]:checked').value

  if(formTitle === "" || formAuthor === "" || formLength === ""){
    alert("Please fill the whole form")
  }
  else{
    newBook = new Book(formTitle, formAuthor, formLength, formReadStatus)
    addBook(newBook)
    document.querySelector('.popoutForm').classList.add('hidden')
    document.querySelector('form').reset()
  }

}
function toggleLibrary(){
  document.querySelector('.library').classList.toggle('hidden')

}
function Book(title, author, length, read){
  this.title = title
  this.author = author
  this.length = length
  this.read = read
  this.info = () => console.log(`${this.title} by ${this.author}. ${this.length} long. Has ${this.read}`)
}
function addBook(newBook){
  myLibrary.push(newBook)
  updateLibrary()
}
function updateLibrary(){
  // if(myLibrary != myLibrary){
    document.querySelector('.library').innerHTML = ""
    for(i=0; i<myLibrary.length; i++){
      document.querySelector('.library').innerHTML +=
      `<div class="bookCard cardNumber${i}">
        <ul class="bookDetails">
          <li class="title">${myLibrary[i].title}</li>
          <li class="author">${myLibrary[i].author}</li>
          <li class="length">${myLibrary[i].length}</li>
          <li class="read">Has ${myLibrary[i].read}</li>
        </ul>
        <div class="cardButtons">
          <input type="button" class="btn readNotRead${i}" value="Read/not read">
          <input type="button" class="btn deleteEntry${i}" value="Delete entry">
        </div>
      </div>`
    }
  // }
}
function toggleRead(){
  console.log("need to do code")
}
function deleteBook(){
  console.log("needs code")
}
let hobbit = new Book("The Hobbit", "Tolkien", "320", "been read")
addBook(hobbit)
let fellowship = new Book("Fellowship of the Ring", "Tolkien", "398", "been read")
addBook(fellowship)
let towers = new Book("Two Towers", "Tolkien", "327", "been read")
addBook(towers)
let king = new Book("Return of the King", "Tolkien", "412", "been read")
addBook(king)
