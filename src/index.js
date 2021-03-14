module.exports =  function toReadable (number) {
    let num ;
    let str = String(number).split('')
    let text = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let desatki = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred']
    let sotki = ['hundred','thousand']
    // for ( let i = 0; i <= number; i++ ){
    //      num[i]= text[i];
      
    // }
    if (Number(number) == 0){
        return 'zero'
    }else if (Number(number)  > 0 && Number(number) <= 19){
    //  number = String(number).split('')
     console.log(number);
     return `${text[number]}`.trim()
    } else if(Number(number) >=20 && Number(number) < 30){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    } else if(Number(number) >=30 && Number(number) < 40){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    }  else if(Number(number) >=40 && Number(number) < 50){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    }  else if(Number(number) >=50 && Number(number) < 60){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    } else if(Number(number) >=60 && Number(number) < 70){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    } else if(Number(number) >=70 && Number(number) < 80){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    } else if(Number(number) >=80 && Number(number) < 90){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    } else if(Number(number) >=90 && Number(number) < 100){
     return `${desatki[str[0]]} ${text[str[1]]}`.trim()
    } else if(Number(number) >=100 && Number(number) < 110){
     return `${text[str[0]]} ${sotki[0]} ${text[str[2]]}`.trim()
    } else if(Number(number) >=110 && Number(number) < 120 || Number(number) >=210 && Number(number) < 220 || Number(number) >=310 && Number(number) < 320 || Number(number) >=410 && Number(number) < 420 || Number(number) >=510 && Number(number) < 520 || Number(number) >=610 && Number(number) < 620 || Number(number) >=710 && Number(number) < 720 || Number(number) >=810 && Number(number) < 820 || Number(number) >=910 && Number(number) < 920) {
      return `${text[str[0]]} ${sotki[0]} ${text[str[1]+str[2]]}`.trim()
    } else if(Number(number) >=120 && Number(number) < 130){
      return `${text[str[0]]} ${sotki[0]} ${desatki[str[1]]} ${text[str[2]]}`.replace(/\s+/g, ' ').trim()
    } else if(Number(number) >=130 && Number(number) < 1000){
      return `${text[str[0]]} ${sotki[0]} ${desatki[str[1]]} ${text[str[2]]}`.replace(/\s+/g, ' ').trim()
    }
    
  }
