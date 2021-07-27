let $showText = document.querySelector('.showText')

// fetch(url)
// .then(response=>response.json())
// .then(data=>{
//     for(item of data.items){
//         let $option = document.createElement('OPTION')
//         $option.textContent = item.family
//         printText.fontFamily.append($option)
//     }  
// })

class PrintMachine{
    constructor (text, size, color, font){
        this.text = text
        this.size = size
        this.color = color
        this.font = font
    }
    print(){
        let $p = document.createElement('P')
        $p.style.fontSize = this.size + 'px'
        $p.style.color = this.color
        $p.style.fontFamily = `${this.font}`
        $p.textContent = this.text
        $showText.append($p)
    }
}

printText.print.addEventListener('click', (e)=>{
    e.preventDefault()
    let printTxt = new PrintMachine(printText.txt.value = 'Print text', printText.fontSize.value, printText.fontColor.value, printText.fontFamily.value)
    printTxt.print()
})
