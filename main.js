
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBookToList(book) {
		const list = document.getElementById('book-list');
		const row = document.createElent('tr');
		row.innerHTML = `

		<td>${book.title}</td>
		<td>${book.title}</td>
		<td>${book.title}</td>
		<td><a href="" class="delete">X</a></td>

		`;
		list.appendChild(row);

	}

	showAlert(message, className){
		const div = document.createElement('div');

		//Add ClassName

		div.classNsme = 'alert ${className}';

		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('container');

		//Get Form

		const form = document.querySelector('.#book-form');

		//Insert alert

		container.insertBefore(div, form);

		
	}
} 