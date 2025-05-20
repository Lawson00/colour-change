var index = 0;
let colorSet = ['red','blue','brown','orange','violet'];
let colorSetTwo = ['green','gold','purple','grey','pink'];
let outText = document.getElementById('coloroutsyd');
let inText = document.getElementById('colorinsyd');
let changeBtn = document.getElementById('changeColor');


changeBtn.addEventListener('click', function(ev){
    var newIndex = index++;

    document.getElementsByTagName("body")[0].style.background = colorSet[newIndex];
    outText.innerHTML = colorSet[newIndex];
    outText.style.color = colorSet[newIndex];

    document.querySelector(".cont").style.background = colorSetTwo[newIndex];
    inText.innerHTML = colorSetTwo[newIndex];
    inText.style.color = colorSet[newIndex];
    
    if(index > colorSet.length -1){
        index = 0;
    }
})

