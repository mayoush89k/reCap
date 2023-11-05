const obj={
    name: "John",
    age: 30,
    getName: function () {
        console.log(this.name);
    },
    introduce: function(){
        console.log(`Welcome to ${this.name} that his age is ${this.age}`);
    },
    changeName: function (newName){
        this.name = newName
        console.log(`Welcome ${this.name}`);
    },
    newName: () => {
        this.name = newName
        console.log(`Welcome ${this.name}`);
    }
}
// ! regularFunction = have This Keyword
// const obj2 = {
//     name: "New Name"
// }

// obj2.getName = obj.getName

//undefined called function because of this method
// const getNewName = obj.getName
// getNewName()

obj.getName();
obj.introduce();
obj.changeName("George")
// obj.newName() // arrow function return this as undefined 


const obj2 = {
    name: "New Name",
    age: 25
}

obj2.introduce = obj.introduce
obj2.introduce()