class Person {
    constructor(age) {
        this.age = age
    }
    greeting() {
        console.log("inside greeting")
    }
    getAge() {
        console.log(this.age)
    }
}

let user = new Person(20)

user.greeting()
user.getAge()