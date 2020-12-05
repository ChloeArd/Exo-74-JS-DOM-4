//Votre code ci dessous
let catPic = document.getElementById('cat-pic');

function changeText() {
    document.getElementById('cat-chat').innerHTML = "Miaouuuuuu !"
}

catPic.addEventListener("mousemove", changeText);
