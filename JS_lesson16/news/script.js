let category = ['business','entertainment','general','health','science','sports','technology'],
    language = 'ua',
    country = 'ua'

let $news = document.querySelector('.news')
    
function template(image, title,author,published, description,url ){
    image = image?image:'https://dess.gov.ua/wp-content/uploads/2020/05/placeholder.png'
    author = author ? author + ', ':''
    description = description ? description:''
    published = published ? published:''
    return `<article class="row">
    <div class="col-2 image">
        <img src="${image}" alt="">
    </div>
    <div class="col-10 content">
        <h3 class="title">
            ${title}
        </h3>
        <p><span class="author">${author}</span><span class="published">${published}</span></p>
        <p class="description">${description}</p>
        <a href="${url}" class="btn btn-link" target="_blank">read more...</a>
    </div>
</article>`
}


function loadNews(category = 'business'){
    let url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=d3fd566f95154fa0a64ecfcfa9053f08`
    
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.articles)
        data = data.articles
        let datalist = ''
        for (item of data){
            datalist += template(item.urlToImage, item.title,item.author,item.publishedAt, item.description,item.url )
        }
        $news.innerHTML = datalist

    })

}

function addButtons(){
    let $buttons = document.querySelector('.buttons')
    for(item of category){
        let btn = document.createElement('BUTTON')
        btn.classList.add('btn', 'btn-primary')
        btn.textContent = item.toUpperCase()
        $buttons.append(btn)
    }
    let $btnList = document.querySelectorAll('.buttons button')
    for(btn of $btnList){
        btn.addEventListener('click', function(){
            loadNews(this.textContent.toLowerCase())
        })
    }
}
addButtons()
loadNews()