// DESCDRUCTURING
        // const person = {
        //     name: "Tomasz",
        //     surname: "Prazniewski",
        //     age: 33,
        //     greet() {
        //         console.log(`Hi i am ${this.name} ${this.surname} ate age of ${this.age}`)
        //     }
        // }

        // const printName = ({name}) => {
        //     console.log(name)
        //     person.greet()
        // }
        // printName(person)

        // const {name, surname, age} = person


        // const hobbies= ['Coding', 'Cycking']

        // const [hobby1, hobby2] = hobbies

        // console.log(hobby1)

// SPREAD & REST OPERATOR // spread operator creates a copy of the array of the existing values || immutabiliy We never change the existing values !

    const hobbies = ['coding', 'cycling']
    const copiedArr = [...hobbies] //copy of the old arr

    console.log(copiedArr)

    const person = {
        name: "tomasz",
        surname: "prazniewski",
        age: 33
    }

    const copiedObj = {...person} //copy of the old obj
    const copiedObj2 = {...person, name:"NEW Thomas"} //copy of the old obj

    console.log(copiedObj)
    console.log(copiedObj2)

const toArr= (...args) => args

console.log(toArr(1,2,3,4,5,6,7,8))