const arr = [1, 2, 3]
arr.forEach(element => {
    console.log(element ** 2)
});
const text = arr.map((el) => {
    console.log(el * 10)
})

// Типы данных
const string = "Любой текст"
const number = 52
const boolean = true
const nulL = null
const un = undefined
const symbol = Symbol('unique');
const bigInt = 9007199254740991n;
const object = {
    key: "value",
    method: function () { }
}
const arr1 = [1, 2, 3]
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
let exponentiation = 2 ** 3; // 8

// Сравнения
10 == '10'; // true (нестрогое)
10 === '10'; // false (строгое)
10 != '10'; // false
10 !== '10'; // true
5 > 3; // true
5 < 3; // false
5 >= 5; // true
5 <= 4; // false

// Логические
true && false; // false (И)
true || false; // true (ИЛИ)
!true; // false (НЕ)

// Function Declaration
function greet(name) {
    return `Привет, ${name}`
}
console.log(greet("Имя"))

// Function Expression
const main = function (name) {
    return `Привет, ${name}`
}

// Стрелочные функции (ES6+)
const arrow = (name) => `Привет, ${name}`

// Остаточные параметры
// function sum(...nums){
//     return nums.reduce((acc, num) => acc + num, 0)
// }

// Объекты и прототип
const person = {
    age: 30,
    fullName() {
        return `${this.age}`
    }
}

person.age
person["age"]
person.age = 31
person.job = "Программист"
delete person.age
console.log(person)

// Работа с массивами
const num = [1, 2, 3]
const evens = num.filter(n => n % 1 === 0)
console.log(evens)
const first = num.find(n => n % 2 === 0)
//const sorted = [...numbers].sort((a, b) => a - b);

// Свертка
//const sum = numbers.reduce((acc, num) => acc + num, 0);

// Классы
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Привет меня зовут ${this.name}`)
    }

    static info() {
        console.log(`Привет`)
    }
}

// Создание объекта
const bob = new Person("name", 21)
console.log(bob.age)

bob.greet()
Person.info()

class Test extends Person {
    constructor(name, position) {
        super(name)
        this.position = position
    }

    dave() {
        super.greet()
    }
}

const test = new Test("Арсений", "Программист")
console.log(test.dave())

// Инкапсуляция
class Culture {
    #culture = 0

    increment() {
        this.#culture++
    }

    get value() {
        return this.#culture
    }
}

const zero = new Culture()
zero.increment()
zero.increment()
zero.increment()
console.log(zero.value)

function add(a, b) {
    return a + b
}

let sum1 = add(10, "15")
console.log(sum1)

const minus = function () {

}

const plus = () => console.log("+")
plus()

function multy(factor) {
    return function (x) {
        return x * factor
    }
}
const two = multy(2)
console.log(two(20))

function counter() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}

const inc = counter()
inc()
inc()

function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}

async function data(url) {
    const res = await fetch(url)
}

const square = (num) => num * num;

const greeter = (name) => console.log(`Привет, ${name}`);

const element = document.querySelector("#element")

const p = document.querySelector(".element")

// p.innerText = "text"
// p.innerHTML = "<h1>text</h1>"
// p.classList.add("red")
// p.classList.remove("green")
// p.classList.toggle("dark")
// p.classList.contains("big")

// element.addEventListener("fullscreenchange")
// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {
//     alert("Заскамили")
// })

// const input = document.querySelector("name")
// const out = document.querySelector("out")
// input.addEventListener("input", () => {
//     out.innerText = input.value
// })

// const login = document.querySelector("login")
// login.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const email = email.value.trim()

//     if (email === ""){
//         alert("Email")
//     }else{
//         alert("Not email")
//         login.reset()
//     }
// })

// element.removeEventListener()

document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeBtn")
    if (!themeBtn) return

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme")

        const isDark = document.body.classList.contains("dark-theme")
        if (isDark) {
            localStorage.setItem("darkTheme", "true")
        } else {
            localStorage.removeItem("darkTheme")
        }
    })

    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
    }
})

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка сети")
        }
        return response.json()
    })
    .catch(error => {
        console.error(error)
    })

async function posts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!response.ok) {
            throw new Error("Ошибка сети")
        }
    } catch (error) {
        console.error(error)
    }
}

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        const posts = await response.json()

        const postsContainer = document.getElementById("posts")

        posts.forEach(post => {
            const postElement = document.createElement("div")
            postElement.className = "post"

            postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `

            postsContainer.appendChild(postElement)
        })
    } catch (error) {
        console.error(error)
    }
}

document.getElementById("postForm").addEventListener("submit", async function (e) {
    e.preventDefault()

    const title = document.getElementById("title").value
    const body = document.getElementById("body").value

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            },
            body: JSON.stringify({ title, body, userId: 1 })
        })
        const newPost = await response.json()
        alert('Пост создан! ID: ' + newPost.id);
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h3>${newPost.title}</h3><p>${newPost.body}</p><hr>`;
        document.getElementById("posts").prepend(postElement);
        document.getElementById('postForm').reset();
    } catch (error) {
        console.error(error)
    }
})

fetchPosts()