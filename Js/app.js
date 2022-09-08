console.log('HELLO WORLD!')
var hour=new Date().getHours()
console.log(hour)


    if(hour>=6 && hour<=12 ){
        alert('Sabahiniz Xeyir')
        document.body.style.backgroundColor ='yellow'
        
            
    }
    else if(hour>=12 && hour<=18){
        alert('Gunortaniz Xeyir')
        document.body.style.backgroundColor = 'pink'


    }
    else if(hour>=18 || hour<=6){
        alert('Axsaminiz Xeyir')
        document.body.style.backgroundColor ='darkpink'


    }
