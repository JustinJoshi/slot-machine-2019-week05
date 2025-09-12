let points = 100000000000
let power1 = 0
let point = document.querySelector("#points")
let nami = false
let peak = false
let investment = 0
let mult = 4
let whichRoll = true
let luffyRolls = 0
let zoroRolls = 1
let namiMult = .1
let namiDoubleMult = 10
let namiDoubleEffectIsOn = false


document.querySelector('h2').addEventListener('click', roll)
document.querySelector('h3').addEventListener('click', roll1)
document.querySelector("#points").innerText = `${points}`
document.querySelector('#awakenLuffy').addEventListener('click', function(e){
    e.stopPropagation()
    luffyRolls += 1
    points -= 30000
    setInterval(() => {
        if(whichRoll === true){
            for(let i = 1; i <= luffyRolls * zoroRolls; i++){
                roll()
            }
        }else if(whichRoll === false){
            for(let i = 1; i <= luffyRolls * zoroRolls; i++){
                roll1()
            }
        }
    }, 5000);
    point.innerText = points
})
document.querySelector('#awakenZoro').addEventListener('click', function(e){
    e.stopPropagation()
    zoroRolls = 5
    points -= 30000
    point.innerText = points
})
document.querySelector('#awakenNami').addEventListener('click', function(e){
    e.stopPropagation()
    namiMult = namiMult * 3
    namiIsDouble = true
    namiDoubleEffectIsOn = true
})
document.querySelector('#piece').addEventListener('click', win)

document.querySelector("#power1").addEventListener('click', function(){
    mult -= 1
    points -= 6000
    point.innerText = `${points}`
})
document.querySelector('#power2').addEventListener('click', function () {
    power1 = 5
    points -= 2000
    point.innerText = `${points}`
})

document.querySelector('#power3').addEventListener('click', function () {
    if (peak === false) {
        let amount = prompt('How much will you invest?')
        if (amount === 'one piece' && peak == false) {
            alert('I like the way you think. Your investment now doubled')
            peak = true
        } else if (isNaN(+amount) === true && peak == false) {
            alert('Why are you entering a word? Try again.')
        } else {
            nami = true
            investment = +amount
            console.log(investment)
            points -= 10000
        }
    }
    if (peak === true) {
            let amount1 = prompt('How much will you invest? You get double your investment.')
            if (isNaN(+amount1) === true) {
                alert('Try again')
            }else{
                investment = +amount1 * 2
                alert(`You invested ${investment} points`)
                console.log(investment)
                nami = true
                points -= 10000
            }
        }
    document.querySelector('#investment').innerText = `Investment: ${investment}`
    point.innerText = points
})



function roll() {
    let first = document.querySelector('#first')
    let second = document.querySelector('#second')
    let third = document.querySelector('#third')


    first.innerText = Math.floor(Math.random() * mult)
    second.innerText = Math.floor(Math.random() * mult)
    third.innerText = Math.floor(Math.random() * mult)

    let firstAns = +first.textContent
    let secondAns = +second.textContent
    let thirdAns = +third.textContent
    console.log(firstAns, secondAns, thirdAns)

    document.querySelector('p').innerText = ''


    if (firstAns === secondAns && firstAns === thirdAns && secondAns === firstAns && secondAns === thirdAns && thirdAns === firstAns && thirdAns === secondAns) {
        document.querySelector('p').innerText = 'win'
        points += 50 * 5
    } else {
        points -= 50
    }
    if (power1 > 0) {
        points += 50
        power1 -= 1
    }
    if (nami == true) {
        points += investment * namiMult
    }
    
    document.querySelector("#points").innerText = `${points}`
    whichRoll = true
}

function roll1() {
    let first = document.querySelector('#first')
    let second = document.querySelector('#second')
    let third = document.querySelector('#third')


    first.innerText = Math.floor(Math.random() * 4)
    second.innerText = Math.floor(Math.random() * 4)
    third.innerText = Math.floor(Math.random() * 4)

    let firstAns = +first.textContent
    let secondAns = +second.textContent
    let thirdAns = +third.textContent
    console.log(firstAns, secondAns, thirdAns)

    document.querySelector('p').innerText = ''

    if (firstAns === secondAns && firstAns === thirdAns && secondAns === firstAns && secondAns === thirdAns && thirdAns === firstAns && thirdAns === secondAns) {
        document.querySelector('p').innerText = 'win'
        points += 500 * 10
    } else {
        points -= 500
    }
    if (power1 > 0) {
        points += 500
        power1 -= 1
    }
    if (nami === true && namiDoubleEffectIsOn === false) {
        points += investment * namiMult
    }else if (namiDoubleEffectIsOn === true){
        let num = Math.floor(Math.random() * 1)
        console.log(num)
        if(num === 0){
            points += investment * namiMult * 2
            console.log('Double Points!')
        }
    }
    document.querySelector("#points").innerText = `${points}`
    whichRoll = false
}

function win(){
    if(points === 100000000000){
        alert('Wow')
        alert('You actually did it..')
        alert('Honestly, I did not think you could do it..')
        alert('But today, you proved me wrong')
        alert('You proved to have dedication equal to that of luffy himself')
        alert('And for that, I shall reward you for all your incredibly hard work')
        let ans = confirm('Are you ready to witness your reward? The fruits of your labor is so near. Are you prepared?')
        if(ans === true){
            alert('Okay, here it is.')
            alert("I hope you're ready")
            alert("It's coming.. can you feel it?")
            alert("I can hear the earth shaking")
            alert("Can you feel it?")
            alert("Can you hear it?")
            alert("The sound..")
            alert("of...")
            document.querySelector('body').innerHTML = ''
            document.querySelector('body').innerHTML = '<div class="byeaj"><img src="img/peak.jpg"> </div>'
        }
    }
}