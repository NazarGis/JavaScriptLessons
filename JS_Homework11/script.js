//----------- task 1

let car = function(producer = 'unknown', model = 'unknown', produceDate = 'unknown', speed = 'unknown'){
    return{
        'producer': producer,
        'model': model,
        'produceDate': produceDate,
        'speed': speed + 'km/h',
        'info': function(){
            alert('Car information:' +'\n'+'Producer: '+ this.producer+'\n'+'Model: '+this.model+'\n' +'Produce date: '+this.produceDate +'\n'+'Speed: ' + this.speed)
            
        },
        'travelTime': function(dist){
            let travelTime = dist/speed
            if (travelTime % 4 >= 0){
                travelTime = travelTime + Math.trunc(travelTime/4)
            }
            return  'Time to travel:' + travelTime + 'h'
        }
    }
}
let chevrolet = car('Chevrolet', 'Volt', '2020','90')
console.log(chevrolet)
chevrolet.info()
console.log(chevrolet.travelTime(720))

//----------- task 2

let drib = function(chyselnyk, znamennyk){
    return{
        'chyselnyk':chyselnyk,
        'znamennyk':znamennyk
    }
}
let drib1 = drib(1,4),
drib2 = drib(10,12)
console.log(drib1)
console.log(drib2)

function sum(obj1,obj2){
    let resultChys,
        resultZnam
    if(obj1.znamennyk % obj2.znamennyk == 0){
        resultZnam = obj1.znamennyk
        resultChys = obj1.chyselnyk + obj1.znamennyk/obj2.znamennyk*obj2.chyselnyk
    }
    else if(obj2.znamennyk % obj1.znamennyk == 0){
        resultZnam = obj2.znamennyk
        resultChys = obj2.chyselnyk + obj2.znamennyk/obj1.znamennyk*obj1.chyselnyk
    }
    else{
        resultZnam = obj1.znamennyk*obj2.znamennyk
        resultChys = obj2.znamennyk*obj1.chyselnyk+obj1.znamennyk*obj2.chyselnyk
    }
    console.log('Результат суми дробів: '+resultChys+'/'+resultZnam)
    
}
function rizn(obj1,obj2){
    let resultChys,
        resultZnam
    if(obj1.znamennyk % obj2.znamennyk == 0){
        resultZnam = obj1.znamennyk
        resultChys = obj1.chyselnyk - obj1.znamennyk/obj2.znamennyk*obj2.chyselnyk
    }
    else if(obj2.znamennyk % obj1.znamennyk == 0){
        resultZnam = obj2.znamennyk
        resultChys = obj2.chyselnyk - obj2.znamennyk/obj1.znamennyk*obj1.chyselnyk
    }
    else{
        resultZnam = obj1.znamennyk*obj2.znamennyk
        resultChys = obj2.znamennyk*obj1.chyselnyk-obj1.znamennyk*obj2.chyselnyk
    }
    console.log('Різниця дробів: '+resultChys+'/'+resultZnam)
    
}
function dob(obj1, obj2){
    console.log(`Добуток дробів: ${obj1.chyselnyk*obj2.chyselnyk}/${obj1.znamennyk*obj2.znamennyk}`)
}
function dil(obj1, obj2){
    console.log(`Частка дробів: ${obj1.chyselnyk*obj2.znamennyk}/${obj1.znamennyk*obj2.chyselnyk}`)
}
    
function nsd (x, y) {
	if (y > x) return nsd(y, x);        
	if (!y) return x;                   
	return nsd(y, x % y);               
}
function skoroch(obj){
    let resultChys = obj.chyselnyk/nsd(obj.chyselnyk,obj.znamennyk),
        resultZnam = obj.znamennyk/nsd(obj.chyselnyk,obj.znamennyk)
        console.log('Скорочений дріб: ' + resultChys+'/'+resultZnam)
}

sum(drib1,drib2)
rizn(drib1,drib2)
dob(drib1, drib2)
dil(drib1,drib2)
skoroch(drib2)

//----------- task 3
let resSec, hrs, min, sec
let time = function(hours, minutes, seconds){
    return{
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds,
        'timeInfo':function(){
            alert('Time: '+this.hours+':'+this.minutes+':'+this.seconds)
        },
        'offsetSec': function(scnds){
            resSec = this.hours*3600 + this.minutes*60 + this.seconds + scnds
            hrs = Math.floor(resSec/3600)
            min = Math.floor(resSec%3600/60)
            sec = resSec-hrs*3600-min*60
            if(hrs < 10){hrs = '0'+hrs}
            if(min < 10){min = '0'+min}
            if(sec < 10){sec = '0'+sec}
            console.log('Time: ' + hrs +':'+ min +':'+ sec)
        },
        'offsetMin': function(mnts){
            resSec = this.hours*3600 + this.minutes*60 + this.seconds + mnts*60
            hrs = Math.floor(resSec/3600)
            min = Math.floor(resSec%3600/60)
            sec = resSec-hrs*3600-min*60
            if(hrs < 10){hrs = '0'+hrs}
            if(min < 10){min = '0'+min}
            if(sec < 10){sec = '0'+sec}
            console.log('Time: ' + hrs +':'+ min +':'+ sec)
        },
        'offsetHrs': function(hou){
            resSec = this.hours*3600 + this.minutes*60 + this.seconds + hou*3600
            hrs = Math.floor(resSec/3600)
            min = Math.floor(resSec%3600/60)
            sec = resSec-hrs*3600-min*60
            if(hrs == 24){hrs = '00'}
            if(hrs > 24 ){hrs = Math.floor(hrs/24)}
            if(hrs < 10){hrs = '0'+hrs}
            if(min < 10){min = '0'+min}
            if(sec < 10){sec = '0'+sec}
            console.log('Time: ' + hrs +':'+ min +':'+ sec)
        },
        
    }
}

let time1 = time(14,45,15)
time1.timeInfo()
time1.offsetSec(47)
time1.offsetMin(15)
time1.offsetHrs(11)

