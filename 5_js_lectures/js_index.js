// console.log('Hello World');
// console.error('error');
// console.warn('warn');

// var let const
// let age = 30;
// age = 31;
// console.log(age)

// This is a comment

// // data types
// const name = 'John'
// const age = 30
// const rating = 4.5
// const isCool = true
// const x = null
// const y = undefined
// let z
//
// console.log(typeof z)

// Strings
// const name = 'John'
// const age = 30
//
// console.log('My name is '+ name +  ' and I am ' + age)
// console.log(`My name is ${name} and I am ${age}`)
//
// const hello = `My name is ${name} and I am ${age}`
// console.log(hello)

// const s = 'Hello World';
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 7))
// console.log(s.substring(0, 7).toUpperCase())
// console.log(s.split(''))
// const s = 'techno, it, computers, code';
// console.log(s.split(', '))

//Arrays
// const numbers = new Array(1, 2, 3, 4, 5)
// const numbers = [1, 2, 3, 4, 5]
// const arr1 = ['apple', 1, true]
// console.log(arr1[1])
// const fruits = ['apple', 'orange', 'banana']
// fruits.push('grapes')
// fruits.unshift('melon')
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('bla'))

//Object Literals
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.email = 'john@gmail.com'
// console.log(person)
// console.log(person.firstName)
// console.log(person.hobbies[1])
//
// const {firstName, lastName, address: {city}} = person
// console.log(firstName)
// console.log(city)

// Arrays of Objects
// const todos = [
//     {
//         id: 1,
//         text: 'do homework',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'do dishes',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'meeting',
//         isCompleted: false
//     }
// ]
// console.log(todos)
// console.log(todos[1].text)
//
// const todosJSON = JSON.stringify(todos)
// console.log(todosJSON)
// console.log(typeof todosJSON)

// For
// for(let i=0; i < 10; i++){
//     console.log(`For loop number ${i}`)
// }
// let i = 0
// while(i < 10){
//     console.log(`While loop number: ${i}`)
//     i++
// }

// for(let i=0; i < todos.length; i++){
//     console.log(todos[i].text)
// }
//
// for (let todo of todos) {
//     console.log(todo.id)
// }
//
// todos.forEach(function(todo) {
//     console.log(todo.text)
// })
//
// // const todoText = todos.map(function(todo) {
// //     return todo.text
// // })
// // console.log(todoText)
//
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {return todo.text})
// console.log(todoCompleted)


// const x = 10
// const y = 10
//
// if(x > 5 || y > 10){
//     console.log('x > 5 || y > 10')
// } else if(x > 10){
//     console.log('greater than 10')
// } else {
//     console.log(`x not 10`)
// }

// const x = 10
// const color = x > 10 ? 'red' : 'blue'
// console.log(color)
// const color = 'red'
// switch(color){
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is not red or blue')
//         break
// }

// const addNums = num1 => num1 + 5
// console.log(addNums())
//
// todos.forEach(todo => console.log(todo))

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
// }
// Person.prototype.getBirthYear = function () {
//         return this.dob.getFullYear()
// }
// Person.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`
// }
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }
//     getBirthYear() {
//         return this.dob.getFullYear()
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// console.log(person1)
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())
// console.log(person1.dob.getFullYear())

// console.log(window)

// alert()
// window.alert()
// window.console.log('aaa')
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.localStorage)
// console.log(window.document)

//single element
// console.log(document.getElementById('my-form'))
// const form = document.getElementById('my-form')
// console.log(form)

// console.log(document.querySelector('#my-form'))
// console.log(document.querySelector('.block'))
// console.log(document.querySelector('form'))
//
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))
// console.log(document.querySelectorAll('.item'))

// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item))

// const ul = document.querySelectorAll('.items')[0]
// const ul = document.querySelector('.items')
// console.log(ul)
// // ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// btn.style.background = 'red'
// const btn = document.querySelector('.btn')
//
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })
//
//
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList  = document.querySelector('.users')

const onSubmit = (e) => {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter all fields'
        msg.classList.add('error')
        setTimeout(() => {
            msg.innerHTML = ''
            msg.classList.remove('error')
        }, 1000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
        userList.appendChild(li)
        // Clear fields
        nameInput.value = ''
        emailInput.value = ''
    }
}
myForm.addEventListener('submit', onSubmit)







