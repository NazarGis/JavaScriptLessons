let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-06-21&sortBy=publishedAt&apiKey=d3fd566f95154fa0a64ecfcfa9053f08`

async function getInfo(url){
    let response = await fetch(url)
    let obj = await response.json()
    obj = obj.articles
    let container = document.createElement('DIV')
    for(let i = 0; i < obj.length; i++){
        let article = document.createElement('ARTICLE')
        let title = document.createElement('H3')
            title.textContent = obj[i].title
        let img = document.createElement('IMG')
            img.setAttribute('src', obj[i].urlToImage)
            img.style.width = '100%'
        let desc = document.createElement('P')
            desc.textContent = obj[i].description
        let readMore = document.createElement('A')
            readMore.setAttribute('href', obj[i].url)
            readMore.textContent = 'Read more...'
        article.append(title, img, desc, readMore)
        container.append(article)
    }
    document.querySelector('.wrapper').append(container)
    container.style.display = 'grid'
    container.style.gridTemplateColumns = 'repeat(3,1fr)' 
    container.style.gridAutoRows = 'minmax(200px, auto)'
    container.style.gridGap = '10px'


    // let data = obj.articles
    // console.log(data)
}

getInfo(url)