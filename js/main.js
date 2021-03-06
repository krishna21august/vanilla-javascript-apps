//listen for form submit
document.getElementById('myform').addEventListener('submit',saveBookmark);


	function saveBookmark(event){

		var sitename = document.getElementById('siteName').value;
		var siteUrl = document.getElementById('siteUrl').value;

	    /*
		localStorage.setItem('xcv','sdsad');
		localStorage.getItem('xcv');
		localStorage.removeItem('xcv');		
		*/


        if(!validateForm(sitename,siteUrl)){
     
			return false;
		}


		var bookmark = {
			name : sitename,
			site : siteUrl
		}




		if(localStorage.getItem('bookmarks') === null){

			bookmarks = [];
			bookmarks.push(bookmark);
			localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

		}else{

			var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
			bookmarks.push(bookmark);
			localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
		}

		function validateForm(sitename,siteUrl){

		if(!sitename || !siteUrl){
			alert('Please Fill in the form');
			return false;
		}

		var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);

        if(!siteUrl.match(regex)){
        	alert('Please use a valid Email');
        	return false;
        }

		return true;


    }

	//stop form from submitting
	   fetchbookmarks();
	   event.preventDefault();
	}



	function deleteBookmark(url){
   		//get bookmarks from localstorage
   		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      
   		//loopthrough
   		for(var i= 0; i < bookmarks.length; i++){
          if(bookmarks[i].site == url){
 		    bookmarks.splice(i,1);	

          }
   		}

   		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


   		document.getElementById('myform').reset();

   		fetchbookmarks();

	}



	function fetchbookmarks(){
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	var bookmarkresults = document.getElementById('bookmarkresults');

    bookmarkresults.innerHTML = '';

    for(i= 0; i < bookmarks.length; i++ ){

    	var name = bookmarks[i].name;
    	var url = bookmarks[i].site;
 
    	 bookmarkresults.innerHTML += '<div class="well">'+
    	 							  '<h3>'+name+'<a href="'+url+'" class="btn btn-default" target = "_blank" >Visit</a>'+
    	 							  '<a href="#" class="btn btn-danger" onclick ="deleteBookmark(\''+url+'\')" >Delete</a>'+
    	 							  '</h3>'+
    	 							  '</div>';

    
    }


}