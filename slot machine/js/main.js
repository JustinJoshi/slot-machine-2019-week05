
document.querySelector('h2').addEventListener('click', roll)

function roll(){
    let first = document.querySelector('#first')
    let second = document.querySelector('#second')
    let third = document.querySelector('#third')
    let firstAns = +first.textContent
    let secondAns = +second.textContent
    let thirdAns = +third.textContent

    first.innerText = Math.floor(Math.random() * 5)
    second.innerText = Math.floor(Math.random() * 5)
    third.innerText = Math.floor(Math.random() * 5)

    document.querySelector('p').innerText = ''
    if(firstAns == secondAns == thirdAns){
        document.querySelector('p').innerText = 'win'
    }
}