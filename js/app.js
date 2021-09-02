const loadData = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = "";
    document.getElementById('displaybook').textContent = "";
   const url =`https://openlibrary.org/search.json?q=${searchText}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayShowBook(data.docs))
  
}

const displayShowBook = books => {
    const displayBook = document.getElementById('displaybook');
     books.forEach( book =>{
     console.log(book);
     const div = document.createElement('div');
     div.classList.add('col','w-50');
     div.innerHTML = `
     <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
     <div class="card mb-3 text-center">
     <h1 class="card-header bg-dark
     border-light text-light">Book Name: ${book.title}</h1>
     <div class="card-body text-success bg-dark">
       <h2 class="card-title">Book Author: ${book.author_name[0]}</h2>
       <h4 class="card-text">First Publish: ${book.first_publish_year}</h4>
     </div>
     <h4 class="card-footer bg-dark text-secondary">Publisher: ${book.publisher[0]}</h4>
   </div>`
   displayBook.appendChild(div);

 })
}

   


