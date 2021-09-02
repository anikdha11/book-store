const total = document.getElementById('total-result');
const errorDiv = document.getElementById('error');

const loadData = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // searchfield clear
  searchField.value = "";
  //total result handle
  total.style.display = 'none';
  document.getElementById('displaybook').textContent = "";
  errorDiv.innerText = '';
  //handle empty invaild input
  if (searchText === "" || searchText === false ) {
    errorDiv.innerText = 'Please filled it with valid book name';
    
  }
  else {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displayShowBook(data.docs))
  }
}

const displayShowBook = books => {
  const displayBook = document.getElementById('displaybook');
  books.forEach(book => {
    total.style.display = 'block';
    // handle empty input
     errorDiv.innerText = '';
     //total result handle
    total.innerText = `Total result:${books.length}`;
    // create div
    const div = document.createElement('div');
    div.classList.add('col', 'w-25', 'shadow-lg', 'h-max');
    div.innerHTML = `
     <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
     <div class="card mb-3 text-center">
     <h1 class="card-header bg-dark
      text-light">${book.title}</h1>
     <div class="card-body text-success bg-dark">
          <h2 class="card-title">${book.author_name[0] ? book.author_name[0] : 'not avaiable'}</h2>
          <h4 class="card-text">First Publish: ${book.first_publish_year ? book.first_publish_year : 'not avaiable'}</h4>
     </div>
     <h4 class="card-footer bg-dark text-secondary">Publisher: ${book.publisher[0]}</h4>
   </div>`
    displayBook.appendChild(div);
    
  })
}






