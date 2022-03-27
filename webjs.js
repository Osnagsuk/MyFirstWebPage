function NightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === '야간모드'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = '주간모드';
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
        alist[i].style.color = 'powderblue';
        i++;
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = '야간모드';
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
        alist[i].style.color = 'blue';
        i++;
        }
    }
}