var btnAdd = document.querySelector('.btn-add');
var btnRemove = document.querySelectorAll('.btn-close');
var contactItems = document.querySelectorAll('ul.contact-list')[0];


btnRemove.forEach(function(btn){
	var parentNode = btn.parentNode;
	btn.addEventListener('click', function(){
		console.log(btn);
		this.parentNode.classList.add('hidden');
	});
});

btnAdd.addEventListener('click', function(e){
	var contactToAdd = this.parentNode;
	var inputsToBeCleared = contactToAdd.children
	var clonedContact = contactToAdd.cloneNode(true);
	
	// NO button action if text fields are empty & resetting the inputs
	for(var i=0; i<inputsToBeCleared.length-1; i++){
		if(inputsToBeCleared[i].value === ""){
			alert('Please, don\'t leave any field blank! :) ');
			return false;
		} else {
			inputsToBeCleared[i].value = '';
		}
	}
	// adding new contact list upon click
	contactItems.appendChild(clonedContact);

	// adding "readonly" & removing "placeholder" attribute
	var addedContact = contactItems.lastElementChild.children;
	for(var i=0; i<addedContact.length-1; i++){
		// addedContact[i].removeAttribute('placeholder');
		addedContact[i].setAttribute('readonly','readonly');
	}

	// removing "Add Contact" and adding "X" button
	var addedContactBtn = addedContact[addedContact.length-1]
	addedContactBtn.value = 'X';
	addedContactBtn.classList.remove('btn-add');
	addedContactBtn.classList.add('btn-close');
	addedContactBtn.addEventListener('click', function(){
		console.log(this);
		this.parentNode.classList.add('hidden');
	});
});