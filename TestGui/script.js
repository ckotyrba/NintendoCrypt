const arrayA = [[], []]

for (let i = 0; i < 32; i++) {
    arrayA[0].push({
        data: undefined,
        relatedElements: []
    })
    arrayA[1].push({
        data: undefined,
        relatedElements: []
    })
}

const array1Container = document.getElementById("array1-container");
const array2Container = document.getElementById("array2-container");
const textContainer = document.getElementById("text-container");



function toggleState(button, array, index) {
    let arrayElement = array[index]
    switch (arrayElement.data) {
        case 0:
            arrayElement.data = 1;
            break;
        case 1:
            arrayElement.data = undefined;
            break;
        case undefined:
            arrayElement.data = 0;
            break;
    }
    button.setAttribute("data-state", arrayElement.data);

    for (let relatedElement of arrayElement.relatedElements) {
        console.log(relatedElement)
        let arrayElement1 = arrayA[relatedElement.firstSubElement.arrayIndex][relatedElement.firstSubElement.index].data
        let arrayElement2 = arrayA[relatedElement.secondSubElement.arrayIndex][relatedElement.secondSubElement.index].data

        if (arrayElement1 == '0' || arrayElement2 == '0') {
            relatedElement.setAttribute("data-state", "0")
        }
        else if (arrayElement1 == '1' && arrayElement2 == '1') {
            relatedElement.setAttribute("data-state", "1")
        } else {
            relatedElement.setAttribute("data-state", "undefined")
        }


    }

}

function updateButtonState(button, arrayElement) {
    switch (arrayElement.data) {
        case 0:
            button.setAttribute("data-state", "0");
            break;
        case 1:
            button.setAttribute("data-state", "1");
            break;
        default:
            button.setAttribute("data-state", "undefined");
            break;
    }
}

function createButtons(container, array) {
    const label = document.createElement("span");
    label.classList.add("label");
    label.innerText = "a[" + (container === array1Container ? "0" : "1") + "]: ";
    container.appendChild(label);

    for (let i = array.length - 1; i >= 0; i--) {
        const button = document.createElement("button");
        button.innerText = i;
        updateButtonState(button, array[i]);
        button.addEventListener("click", () => toggleState(button, array, i));
        container.appendChild(button);
    }
}

function createEquations() {
    const lines = input.split('\n');
    for (const line of lines) {
        const row = document.createElement("div");
        row.classList.add("equationContainer")

        // print result b
        const lineResult = line.split("=")
        row.appendChild(createResultBLabel(lineResult[0]))

        const equal = document.createElement("span")
        equal.innerText = "="
        row.appendChild(equal)

        for (let elementString of lineResult[1].split("+")) {
            const element = document.createElement("span");
            element.classList.add("equationElement")
            element.innerText = elementString

            let matchArray = extractElements(elementString)

            element.firstSubElement = { arrayIndex: matchArray[0][1], index: matchArray[0][2] }
            arrayA[element.firstSubElement.arrayIndex][element.firstSubElement.index].relatedElements.push(element)

            element.secondSubElement = { arrayIndex: matchArray[1][1], index: matchArray[1][2] }
            arrayA[element.secondSubElement.arrayIndex][element.secondSubElement.index].relatedElements.push(element)

            row.appendChild(element)
        }
        textContainer.appendChild(row)
    }
}

function extractElements(elementString) {
    var regex = /a\[([0-9]+)\]_([0-9]+)/g
    let matches = elementString.matchAll(regex);
    let matchArray = []
    for (const match of matches) {
        matchArray.push(match)
    }
    return matchArray;
}

function createResultBLabel(bString) {
    const resultBLabel = document.createElement("span")
    resultBLabel.innerText = bString;
    resultBLabel.classList.add("equationElement")

    const array = arrayIndex(bString)
    const index = elementIndex(bString)

    resultBLabel.setAttribute("data-state", getBit(b[array], index))
    return resultBLabel
}

function arrayIndex(elementString) {
    return elementString.includes("[0]") ? 0 : 1;
}

function elementIndex(elementString) {
    return elementString.split('_')[1];
}


function getBit(number, bitPosition) {
    return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}

createButtons(array1Container, arrayA[0]);
createButtons(array2Container, arrayA[1]);
createEquations();