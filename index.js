let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

let generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>`~"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword = () => {
    const newPasword = generatePassword(passwordLength.value)
    password.value = newPasword
}

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charshet=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'password.txt')
}