let tabGroup = document.querySelectorAll('.tab')
let foodGroup = document.querySelectorAll('.foods .item')

for (let i = 0; i < tabGroup.length; i++) {
    tabGroup[i].addEventListener('click', function (event) {
        for (let k = 0; k < foodGroup.length; k++) {
            if (event.target.innerHTML === foodGroup[k].dataset.food) {
                foodGroup[k].style.display = 'block'
            }else{
                foodGroup[k].style.display = 'none'
            }
        }
    })
}

