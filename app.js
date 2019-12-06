const list = document.querySelector('#list');
const submit = document.querySelector('#submit');
const num = document.querySelector('#num-input');
const text = document.querySelector('#text-input');
const alertion = document.querySelector('ion-alert-controller');

submit.addEventListener('click', () => {
    const textval = text.value;
    const numval = num.value;

    if ( textval.trim().length <=0 || numval.trim().length <=0 || numval>5 || numval <1){
        alertion.create({
            message: "Put Rating between 1 and 5 and fill all fields",
            header: "Invalid Inputs",
            buttons: ['Okay']
        }).then( alertElement => {
            alertElement.present();
        });
        return;
    }
    const newitem = document.createElement('ion-item');
    newitem.textContent = textval +' | Rating: '+numval+'/5';
    newitem.style.fontFamily = "Arial, Helvetica, sans-serif";
    newitem.style.fontWeight = "bold";
    list.appendChild(newitem);
    text.value = '';
    num.value = '';
})
