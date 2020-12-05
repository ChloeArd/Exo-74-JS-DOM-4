let libButton = document.getElementById('lib-button');

let libIt = function() {
    let storyDiv = document.getElementById("story");
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let name = document.getElementById('person').value;
    storyDiv.innerHTML = "J'ai manger un(e) " + noun + " c'était " + adjective + " et il s'appelait " + name + " .";
};



libButton.addEventListener('click', libIt);

