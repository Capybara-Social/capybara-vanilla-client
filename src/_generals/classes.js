class User{
	constructor(name, color ,image, username, id){
		this.name = name;
		this.image = image;
		this.color = color;
		this.username = username;
		this.id = id;
	}
}

class Post{
	constructor(user, text, multimedia, id, sponsor){
		if(!(user instanceof User)) throw Error("Invalid Post");
		this.user = user;
		if(text.length > 512) throw Error("Invalid Post");
		this.text = text;
		if(!(multimedia instanceof Array) || multimedia.length > 4) throw Error("Invalid Post");
		if(multimedia.length > 0 && multimedia.filter(x => !(Object.prototype.hasOwnProperty.call(x, "uri") || Object.prototype.hasOwnProperty.call(x, "type"))) > 0) throw Error("Invalid Post");
		this.multimedia = multimedia;
		this.id = id;
		this.sponsor = sponsor;
	}
}

export {User, Post};