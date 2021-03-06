let $table = document.createElement('TABLE'),
    $add_ships = document.createElement('INPUT'),
    $root = document.querySelector('.root');

    $add_ships.setAttribute('type', 'checkbox');
    $add_ships.setAttribute('checked', 'checked');
    
    let build = $add_ships.checked;

function build_table(place,table){
    place.innerHTML = table.innerHTML = '';
    for( let i = 0; i<= 10; i++){
        let $tr = document.createElement('TR');
        for( let i = 0; i<= 10; i++){
            let $td = document.createElement('TD');
            $tr.append($td);
        }
        table.append($tr);
    }
    place.append(table, $add_ships);
    
    battle_place = [];
    fill_table(table, battle_place);
    
    $add_ships.addEventListener('click', function(){
        if ($add_ships.hasAttribute('checked')){
            $add_ships.removeAttribute('checked')
        }
        else{
            $add_ships.setAttribute('checked', 'cheked');
        }
        build = $add_ships.checked;
        console.log(build);
    })

    build_ships(table, battle_place,build)
    shoot(table, battle_place,build);
    
}


function fill_table(table, array){
    let first_row = 'РЕСПУБЛІКА'.split('')
    for (let i = 1; i <= 10; i++){
        table.childNodes[0].childNodes[i].textContent = first_row[i-1];

    }
    for (let i = 1; i <= 10; i++){
        table.childNodes[i].childNodes[0].textContent = i;
    }
    for (let i = 1; i <= 10; i++){
        let row = []
        for(let j=1; j<=10; j++){
            table.childNodes[i].childNodes[j].textContent = 0;
            row.push(0);
        }
        array.push(row);
    }
    console.log(array);
}


function shoot(table, array){
    for (let i = 1; i <= 10; i++){
        for(let j=1; j<=10; j++){
            table.childNodes[i].childNodes[j].addEventListener('click', function(){
                if(!build){
                this.textContent = '*'; 
                if(array[i-1][j-1] == 1){
                this.classList.remove('ship')
                this.classList.add('destroy')
            }
            else{
                this.classList.add('shoot')
            }
                array[i-1][j-1] = '*';
                console.log(array);
                }
            })
        }
    }
}

function build_ships(table, array){
    for (let i = 1; i <= 10; i++){
        for(let j=1; j<=10; j++){
            table.childNodes[i].childNodes[j].addEventListener('click', function(){
                if(build){
                this.textContent = '1'; 
                this.classList.add('ship')
                array[i-1][j-1] = '1';
                console.log(array);
                }
            })
            table.childNodes[i].childNodes[j].addEventListener('contextmenu', function(event){
                if(build){
                event.preventDefault()
                this.textContent = '0'; 
                array[i-1][j-1] = '0';
                console.log(array);
                }
            })
        }
    }
}

build_table($root, $table);
