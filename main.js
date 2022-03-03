//кнопка наверх
window.addEventListener('scroll', function() {
    let currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 200) {
      document.getElementById('toTop').style.opacity = currScrollPos2 *  2;
    }
    else  {
        document.getElementById('toTop').style.opacity = -currScrollPos2 *  2;
      }
  }
);

//вторая задача
function alerted(){
  function getDayInfo(date){
    let len2 = prompt ('Введите дату через точку','03.03.2022');
    let arr = len2.split( '.',);//поделила дату на массивы

    switch (arr[1])//заменила число месяца на слова
    {
      case '01': fMonth="января "; break;
      case '02': fMonth="февраля "; break;
      case '03': fMonth="марта "; break;
      case '04': fMonth="апреля "; break;
      case '05': fMonth="мая "; break;
      case '06': fMonth="июня "; break;
      case '07': fMonth="июля "; break;
      case '08': fMonth="августа "; break;
      case '09': fMonth="сентября "; break;
      case '10': fMonth="октября "; break;
      case '11': fMonth="ноября "; break;
      case '12': fMonth="декабря "; break;
    }
  //нахожу неделю по счету
    function getWeeks(year, month) {
      let l=new Date(arr[1] +'.' +arr[0] +'.'+ arr[2]);
      return Math.ceil( (l.getDate()- (l.getDay()?l.getDay():7))/7 )+1;
    } 
    //нахожу день недели
    let days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ];
    let d = new Date(arr[1] +'.' +arr[0] +'.'+ arr[2]);
    let n = d.getDay();
    return days[n] +', ' + getWeeks() + ' неделя '+ fMonth+ arr[2] + ' года ';
  }
  alert(getDayInfo());
}