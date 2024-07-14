
const input = document.getElementById("input")
const output = document.getElementById("output")

function Action(event) {

    if (event == 'upper') {
        output.innerText = input.value.toUpperCase()
    }
    else if (event == 'lower') {
        output.innerText = input.value.toLowerCase()
    }
    else if (event == 'charcnt') {
        output.innerText = `The Length is ${input.value.length}`
    }
    else{
        const arr = input.value.split(" ")
        output.innerText = `Word Count Is ${arr.length}`
    }
}
