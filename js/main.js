//listen for form submit
document.getElementById('myform').addEventListener('submit',saveBookmark);


function saveBookmark(event){

	var sitename = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	var bookmark = {
		name : sitename,
		site : siteUrl
	}

    /*
	localStorage.setItem('xcv','sdsad');
	localStorage.getItem('xcv');
	localStorage.removeItem('xcv');
	*/

	if(localStorage.getItem('bookmarks') === null){

		bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

	}else{

		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	}
//stop form from submitting
   event.preventDefault();
}




function fetchbookmarks(){
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	var bookmarkresults = document.getElementById('bookmarkresults');

    bookmarkresults.innerHTML = '';

    for(i= 0; i <= bookmarks.length; i++ ){

    	var name = bookmarks[i].name;
    	var url = bookmarks[i].site;
 
    	 // bookmarkresults.innerHTML += 

    }

}