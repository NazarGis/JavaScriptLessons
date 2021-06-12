//-----------1

function min_max(n1,n2){
    if(n1 > n2){
        return 1;
    }
    else if ( n1 < n2){
        return -1;
    }
    else {
        return 0;
    }
}
alert(min_max (8,7));

//-----------2

function fact(x){
    let s = 1;
    for ( let i = 1; i <= x; i++){
        s = s*i;
    }
    return s;
}
alert(fact(5));

//-----------3

function join(x1,x2,x3){
    let number;
    return number = x1*100 + x2*10 + x3;    
}
alert(join(1,9,3));

//-----------4

function square(a,b){
    let sq ;
    sq = a*b;
    if(b == undefined){
        sq= a*a;    
    }
    return sq;
}
alert(square(8,12));

//-----------5

function perf_numb(n5){
    let sum = 0;
    for( let i = 1; i < n5; i++){
        if ( n5 % i == 0){
            sum +=i;   
        }
    }
    if ( sum == n5){
        return 'Число досконале!'
    }
    else{
        return 'Число не досконале!'
    }
}
alert(perf_numb(6));

//-----------6

function perf_minmax(min,max){
    for(let i = min; i <= max; i++){
        if(perf_numb(i) == 'Число досконале!'){
            alert("Досконале число із заданого діапазону: "+i);
        }
    }
}
perf_minmax(1,496);

//-----------7

function time(h,m,sec){
    let t;
    if( h < 10){
        h = "0"+h;
    }
    if( m < 10){
        m = "0"+m;
    }
    if( sec < 10){
        sec = "0"+sec;
    }
    if( m == undefined){
        m = "00"
    }
    if(sec == undefined){
        sec = "00";
    }
    return t = h+":"+m+":"+sec;
}
alert(time(15,8,47));

//-----------8

function time_sec(hours, minutes, seconds){
    if( minutes == undefined){
        minutes = 0;
    }
    if(seconds == undefined){
        seconds = 0;
    }
    return hours*3600 + minutes*60 + seconds;
}
alert(time_sec(14,15)+" секунд");

//----------9

function sec_to_time(secn){
    
    let h1;
    let m1;
    let s1;
    h1 = Math.floor(secn/3600);
    m1 = Math.floor((secn - h1*3600)/60);
    s1 = Math.floor(secn - h1*3600 - m1*60);
    if( h1 < 10){
        h1 = "0"+h1;
    }
    if( m1 < 10){
        m1 = "0"+m1;
    }
    if( s1 < 10){
        s1 = "0"+s1;
    }
    return h1+":"+m1+":"+s1;
}
alert(sec_to_time(8888));

//---------- 10

function date_odds(fdh,fdm,fds,sdh,sdm,sds){

    let t1 = time_sec(sdh,sdm,sds)-time_sec(fdh,fdm,fds);
    let t2 = sec_to_time(t1);
    return t2;
    
}
alert(date_odds(15,36,30,18,40,15));