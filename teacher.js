class Teacher {
    constructor (name , id, subject) {
        this.name = name
        this.id = id
        this.subject = subject

    }
    displaydetails(){
        console.log(`id : ${this.id} , Name : ${this.name} , subject : ${this.subject}`)
    }
}


let teacher1 = new Teacher(101, "pragati sharma", "mathematics")
teacher1.displaydetails()