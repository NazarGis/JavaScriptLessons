let rect = function(x1, y1, x2, y2, id, color = 'black'){
    return{
        'x1': x1<x2 ? x1 : x2, 
        'y1': y1<y2 ? y1 : y2, 
        'x2': x1>x2 ? x1 : x2, 
        'y2': y1>y2 ? y1 : y2,
        'id':id,
        'draw': function(){
            let figure = document.createElement('div')
            figure.setAttribute('id', id)
            figure.style.width = this.width() + 'px'
            figure.style.height = this.height() + 'px'
            figure.style.top = this.y1 + 'px'
            figure.style.left = this.x1 + 'px'
            figure.style.backgroundColor = color
            document.querySelector('.canvas').append(figure)
            return "Figure was added"
        },
        'width': function(){
            return Math.abs(this.x2 - this.x1)
        },
        'height': function(){
            return Math.abs(this.y2 - this.y1)
        },
        'moveX': function(x){
            this.x1 = this.x1 + x
            this.x2 = this.x2 + x
            document.getElementById(this.id).style.left = this.x1 + 'px'
        },
        'moveY': function(y){
            this.y1 = this.y1 + y
            this.y2 = this.y2 + y
            document.getElementById(this.id).style.top = this.y1 + 'px'
        },
        'moveXY': function(x,y){
            this.x1 = this.x1 + x
            this.x2 = this.x2 + x
            document.getElementById(this.id).style.left = this.x1 + 'px'
            this.y1 = this.y1 + y
            this.y2 = this.y2 + y
            document.getElementById(this.id).style.top = this.y1 + 'px'
        },
        'setColor': function(cl){
            document.getElementById(this.id).style.backgroundColor = cl
        }
    }
}
function change_color(object, color){
    object.setColor(color)
}


rect_1 = new rect(100, 100, 300, 300,'r1', 'green')
rect_1.draw()

rect_1.setColor('red')
change_color(rect_1, 'blue')

let buttonX = document.querySelector('.btnX').addEventListener('click', function(event){
    rect_1.moveX(+document.getElementsByName('xCoord')[0].value)
})
let buttonY = document.querySelector('.btnY').addEventListener('click', function(event){
    rect_1.moveY(+document.getElementsByName('yCoord')[0].value)
})
let buttonXY = document.querySelector('.btnXY').addEventListener('click', function(event){
    rect_1.moveXY(+document.getElementsByName('xCoord')[0].value, +document.getElementsByName('yCoord')[0].value)
})