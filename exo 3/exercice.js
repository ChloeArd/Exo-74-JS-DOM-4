let libButton = document.getElementById('lib-button');

let libIt = function() {
    let storyDiv = document.getElementById("story");
    let noun = document.getElementById('noun');
    let adjective = document.getElementById('adjective');
    let name = document.getElementById('person');
    noun.innerHTML = "éléphant";
    adjective.innerHTML = "délicieux";
    name.innerHTML = "Roger";
    storyDiv.innerHTML = "J'ai manger un(e) " + noun + " c'était " + adjective + " et il s'appelait " + name + " .";
};

libButton.addEventListener('click', libIt);





























getComputedStyle()







