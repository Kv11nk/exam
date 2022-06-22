let liActiv = document.querySelectorAll('.activ')
let arrow = document.querySelectorAll('.arrow')
let body = document.querySelector('body')
let h2 = document.querySelectorAll('h2')

for(let i = 0; i < liActiv.length; i++){
        let thisLink = liActiv[i].previousElementSibling;
        let subMenu = liActiv[i].nextElementSibling;
        let thisActiv = liActiv[i];
    liActiv[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
    });
}

document.querySelector('#elastic').oninput = function(){        //поиск в таблице
    let val = this.value.trim();
    if (val != '' || val == ''){
            ElementSearch(h2);
    }
    else{
        CloseItems(h2);
    }

    function ElementSearch(items){
        items.forEach(function (elem) {
            if(elem.innerText.search(val) == -1){
                elem.parentNode.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.parentNode.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            }
        })
    }

    function CloseItems(items){
        items.forEach(function (elem) {
            elem.parentNode.classList.add('hide');
            elem.innerHTML = elem.innerText;
        })
    }
}