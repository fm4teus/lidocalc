const displayElement = document.querySelector("section#display")
const formElement = document.querySelector("form")
const weightElement = document.querySelector("input#weight")
const buttonElement = document.querySelector("button")

buttonElement.addEventListener("click",calculate)

const adultDosagePerKg = 4.4
const tubeCapacity = 36 
const maxDosage = 300

function calculate(){
    displayElement.innerHTML = ""
    
    weight = Number.parseFloat(weightElement.value) 
    if (Number.isNaN(weight)){
        return false
    }

    dosage = weight * adultDosagePerKg 
    if(dosage > maxDosage){
        dosage = maxDosage
    }

    tubeCount = truncateHalf( dosage / tubeCapacity )

    displayElement.appendChild(document.createTextNode(`${tubeCount} tubetes`))
    displayElement.appendChild(document.createElement("br"))
    
    const tubeCountContainer = document.createElement("div")
    tubeCountContainer.setAttribute("class","tube-count-container")
    for(i=0; i<tubeCount; i++){
        const tubeContainer = document.createElement("div")
        tubeContainer.setAttribute("class","tube-container")
        const tubeElement = document.createElement("img")
        tubeElement.setAttribute("src","assets/test-tube-5-svgrepo-com.svg")
    
        if(i+1>tubeCount){
            tubeContainer.setAttribute("class","tube-container half")
        }
        tubeContainer.appendChild(tubeElement)
        tubeCountContainer.appendChild(tubeContainer)
    }
    displayElement.appendChild(tubeCountContainer)
}

function truncateHalf(number){
    return Math.trunc(number*2)/2
}