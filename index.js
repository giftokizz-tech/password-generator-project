const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("passwordone-el")
let password2 = document.getElementById("passwordtwo-el")

function gnerateRandomPassword(){
    let password = ""
    for (i = 0; i < 15; i++){
        randomPassword = Math.floor(Math.random() * characters.length)
        password += characters[randomPassword]
    }
    return password
}

function getRandomPassword(){
    password1.textContent = gnerateRandomPassword()
    password2.textContent = gnerateRandomPassword()
}

function copyPassword(id){
    let copy = document.getElementById(id)
    let copytext = copy.textContent
    navigator.clipboard.writeText(copytext)
    copy.textContent = "copied..!"
}
