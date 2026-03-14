const list = document.querySelector('#list');
const submit = document.querySelector('#submit');
const num = document.querySelector('#num-input');
const text = document.querySelector('#text-input');

/**
 * Show an Ionic alert by creating an ion-alert element directly.
 * The deprecated <ion-alert-controller> element is no longer used.
 */
function showAlert(header, message) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.message = message;
    alert.buttons = ['Okay'];

    document.body.appendChild(alert);
    alert.present();

    alert.onDidDismiss().then(() => alert.remove());
}

submit.addEventListener('click', () => {
    const textVal = (text.value || '').toString().trim();
    const numVal = Number(num.value);

    if (textVal.length === 0 || isNaN(numVal) || numVal < 1 || numVal > 5 || !Number.isInteger(numVal)) {
        showAlert('Invalid Inputs', 'Enter a name and a whole-number rating between 1 and 5.');
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = textVal + ' | Rating: ' + numVal + '/5';
    newItem.style.fontFamily = 'Arial, Helvetica, sans-serif';
    newItem.style.fontWeight = 'bold';
    list.appendChild(newItem);

    text.value = '';
    num.value = '';
});
