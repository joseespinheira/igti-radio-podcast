// var myRange = document.querySelector('#myRange');
// var myValue = document.querySelector('#myValue');
// var myUnits = 'myUnits';
// var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
// var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

// myValue.parentElement.style.left = px + 'px';
// myValue.parentElement.style.top = myRange.offsetHeight + 'px';
// myValue.innerHTML = myRange.value + ' ' + myUnits;

// myRange.oninput = function () {
//     let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
//     myValue.innerHTML = myRange.value + ' ' + myUnits;
//     myValue.parentElement.style.left = px + 'px';
// };
var currentFrequencie = '87.5';
var inputFrequencie = null;
var divPodcast = null;

function start(){
    function handleChangeFrequencie(e){
        currentFrequencie = e.target.value;
        inputFrequencie.value = currentFrequencie;

        findPodcast();
    }
    inputFrequencie = document.querySelector("#inputFrequecie");
    divPodcast = document.querySelector(".podcast");

    window.addEventListener('input', handleChangeFrequencie);
}

function findPodcast(){

    var findPodcast = null

    for(var i = 0; i < realPodcasts.length; i++){
        var currentPodcast = realPodcasts[i];
        if(currentPodcast.id == currentFrequencie){
            findPodcast = true;
            break;
        }
    }

    if(findPodcast){
        renderPodcast(currentPodcast)
    }else{
        divPodcast.innerHTML = 'Nenhum Podcast encontrado.';
    }

}

function renderPodcast(currentPodcast){
    divPodcast.innerHTML = '';
    var img = document.createElement('img');
    img.src = './img/' + currentPodcast.img;
    img.alt = 'Logo do podcast' + currentPodcast.title;
    img.classList.add('logoPodcast');

    var title = document.createElement('h2');
    title.textContent = currentPodcast.title;

    var description = document.createElement('p');
    description.textContent = currentPodcast.description;

    divPodcast.appendChild(img);
    divPodcast.appendChild(title);
    divPodcast.appendChild(description);
}

start();