if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Introducing TelescopeXXX",
		url: "http://sachagreif.com/introducing-telescope/",
		author: "Sacha Greif"
	});
	
	Posts.insert({
		title: "Meteor",
		url: "http://meteor.com/",
		author: "Tom Coleman"
	});

	Posts.insert({
		title: "The Meteor Book",
		url: "http://themeteorbook.com/",
		author: "Tom Coleman"
	});
}