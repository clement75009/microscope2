/*
Template.postItem.helpers({
	domain: function(){
		return this.url.split('/')[2] ;
	}
});


*/

Template.postItem.helpers({
	domain: function(){
	var a = document.createElement('a');
   	a.href = this.url;
    return a.hostname;
	}
})

