class Person {
	constructor({name, age}) {
		this.name = name || 'nameless'
		this.age = age || 0
	}
	say() {
		console.log('hehe')
	}
}

class Children extends Person {
	constructor() {
		super({})
		console.log(this.name, this.age)
	}
	
}

let a = new Children({name: ''})

console.log(a)
a.say()