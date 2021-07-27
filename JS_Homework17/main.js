
let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`,
    urlPrivat = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`,
    $info = document.querySelectorAll('.info div'),
    $title = document.querySelector('.title')
    

fetch(url)
.then(response=>response.json())
.then(data=>{
    for(item of data){
        let $optionFirstList = document.createElement('OPTION')
        $optionFirstList.textContent = `${item.txt} (${item.cc})`
        exchange.firstCCList.append($optionFirstList)
        let $optionSecondList = document.createElement('OPTION')
        $optionSecondList.textContent = `${item.txt} (${item.cc})`
        exchange.secondCCList.append($optionSecondList)
        $optionFirstList.setAttribute('value', item.rate)
        $optionSecondList.setAttribute('value', item.rate)
        $title.textContent = `Курс валют станом на ${item.exchangedate}`
    }
    exchange.convert.addEventListener('click', (e)=>{
        e.preventDefault()
        let exch = ((exchange.firstCCList.value/exchange.secondCCList.value)*exchange.firstvalue.value).toFixed(2)
        exchange.secondvalue.setAttribute('placeholder', exch)  
    })
})

fetch(urlPrivat)
.then(response=>response.json())
.then(data=>{
    for(item of data){
        $info[0].innerHTML += item.ccy + '<br>'
        $info[1].innerHTML += item.base_ccy + '<br>'
        $info[2].innerHTML += (+item.buy).toFixed(2) + '<br>'
        $info[3].innerHTML += (+item.sale).toFixed(2) + '<br>'
    }  
})