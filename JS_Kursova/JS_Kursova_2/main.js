let $content = document.querySelector('content'),
    $category = document.querySelectorAll('.category')
    
//---------- NEWS ----------//

class News{
    constructor(title, description, img, link, date,source){
        this.title = title
        this.description = description
        this.img = img
        this.link = link
        this.date = date
        this.source = source
    }
    printDate(){
        return new Date(this.date).toLocaleString()
    }
    print(){
        
        let article = document.createElement('ARTICLE')
            article.classList.add('row')
        let title = document.createElement('H3')
            title.textContent = this.title
        let description = document.createElement('P')
            description.textContent = this.description
        let link = document.createElement('A')
            link.textContent = this.source
            link.setAttribute('href', this.link)
            link.setAttribute('target', '_blanc')
        let date = document.createElement('I')
            date.classList.add('published')
            date.textContent = this.printDate()
        let content_div = document.createElement('DIV')
            content_div.classList.add('col-lg-7', 'col-12')
            content_div.append(title, link, date, description)
        let image = document.createElement('IMG')
        let img_url = ''
        if(this.img == null){
            img_url = './img/placeholder.jpg'
        }
        else{
            img_url = this.img
        }
            image.setAttribute('src', img_url)
            let img_div = document.createElement('DIV')
                img_div.classList.add('col-lg-5', 'image', 'col-12')
                img_div.append(image)
            article.append(content_div, img_div)
            return article
    }
}

function loadNews(category = 'general'){
    let url_news = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=d3fd566f95154fa0a64ecfcfa9053f08`
    fetch(url_news)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.articles)
        addNews(data.articles)
    })
}

function addNews(articles){
    for(item of articles){
        let article = new News(item.title, item.description, item.urlToImage, item.url, item.publishedAt,item.source.name)
        $content.append(article.print())
    }
}

//----------- MENU ----------//

let burger_btn = document.querySelector('.burger_btn'),
    burger_menu = document.querySelector('.burger-menu ul')

burger_btn.addEventListener('click', ()=>{
    if(burger_menu.style.display == 'block'){
        burger_menu.style.display = 'none'
    }
    else{
        burger_menu.style.display = 'block'
    }
})

let category_arr = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']


for(let i=0; i < $category.length; i++){
    $category[i].addEventListener('click', ()=>{
       
        $content.innerHTML = ''
        if( i >= category_arr.length ){
            loadNews(category_arr[i-category_arr.length])
        }
        else{
            loadNews(category_arr[i])
        }

        var categories = document.getElementById('categories').children
        for(let j=0; j < categories.length; j++){
            console.log(categories[j]);
            categories[j].style.backgroundColor = "#389fc3";
        }
        $category[i].classList.add('selected-item')
    })
    $category[i].addEventListener('mouseenter', function(){
        this.style.backgroundColor = '#035a98'
    })
    $category[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = ''
    })
}


//---------- EXCHANGE ----------//

let urlPrivat = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`,
    $exchange_div = document.querySelectorAll('.exchange div')
    
document.querySelector('.exch_title').innerHTML = `Курс валют станом на ${new Date().toLocaleDateString()}`
fetch(urlPrivat)
.then(response=>response.json())
.then(data=>{
    for(item of data){
        $exchange_div[0].innerHTML += item.ccy + '<br>'
        $exchange_div[1].innerHTML += item.base_ccy + '<br>'
        $exchange_div[2].innerHTML += (+item.buy).toFixed(2) + '<br>'
        $exchange_div[3].innerHTML += (+item.sale).toFixed(2) + '<br>'
    }  
})


//---------- WEATHER ----------

let date_field = document.querySelector('.date'),
    city_field = document.querySelector('.city h1'),
    temp_field = document.querySelector('.current'),
    temp_high_field = document.querySelector('.high'),
    temp_low_field = document.querySelector('.low'),
    icon_field = document.querySelector('.icon img'),
    forcast_field = document.querySelector('.icon p')

let city = 'Rivne'

city_field.textContent = city

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&appid=c295ac63fa38cfede024dee515d70611`

function set_time(){
    let today = new Date()

    let time = `${today.getHours()<10?'0'+today.getHours()
    :today.getHours()}:${today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes()}`

    const days = ["Неділя","Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" ]
    let day = days[today.getDay()]

    const month = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня' ,'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня']
    let date = `${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`
    date_field.innerHTML = `${day} <br> ${time} <br> ${date}`

}

function setWeather(url){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        let weather = data.weather[0].description
        forcast_field.textContent = weather
        let temp = parseInt(data.main.temp-273)
        temp_field.innerHTML = `${temp}&deg;`
        let temp_max = parseInt(data.main.temp_max-273)
        temp_high_field.innerHTML = `МАКС: ${temp_max}&deg;`
        let temp_min = parseInt(data.main.temp_min-273)
        temp_low_field.innerHTML = `МІН: ${temp_min}&deg;`
        let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        icon_field.setAttribute('src', icon)
    })
}

function geoFindMe() {
    let urlWeather = ''; 
    function success(pos) {
        var crd = pos.coords;
        let lat = crd.latitude.toFixed(2);
        let lon = crd.longitude.toFixed(2);
        urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ua&appid=c295ac63fa38cfede024dee515d70611`
        setWeather(urlWeather);
    };


    function error(err){
        console.warn(`ERROR(${err.code}): ${err.message}`);
        urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&appid=c295ac63fa38cfede024dee515d70611`;
        setWeather(urlWeather);
    };
   
    navigator.geolocation.getCurrentPosition(success, error);

}

setInterval(()=>{
    set_time()
},1000)



geoFindMe()
setInterval(()=>{
    geoFindMe()
},150000)
loadNews()



