const arrayA = [[],[]]

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

function toggleState(button, arrayElement) {
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
    updateButtonState(button, arrayElement);
    for(let relatedElement of arrayElement.relatedElements){
        console.log(relatedElement)
    }
    // aktualisiere alle betroffene elements

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
        button.addEventListener("click", () => toggleState(button, array[i]));
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

        for (const elementString of lineResult[1].split("+")) {
            const element = document.createElement("span");
            element.classList.add("equationElement")
            element.innerText = elementString

            const regex = /a\[(\d)\]_(\d)/g

            var match = regex.exec(elementString)
            element.firstSubElement = { arrayIndex: match[1], index: match[2] }
            arrayA[element.firstSubElement.arrayIndex][element.firstSubElement.index].relatedElements.push(element)

            match = regex.exec(elementString)
            element.secondSubElement = { arrayIndex: match[1], index: match[2] }
            if ((element.firstSubElement.arrayIndex == 0 && element.firstSubElement.index == 0)) {
                console.log(`${element.firstSubElement.arrayIndex}_${element.firstSubElement.index}=${elementString}`)
            }

            row.appendChild(element)
        }
        textContainer.appendChild(row)
    }
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