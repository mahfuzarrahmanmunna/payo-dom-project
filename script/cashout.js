document.querySelector('#add-money').addEventListener('click', (event) => {
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let convertAmount = parseFloat(amount);
    let pin = document.getElementById('pinNumber').value;
    let convertedPin = parseInt(pin);
    let mainBalance = document.getElementById('main-balance').innerText;
    let convertedMainBalance = parseFloat(mainBalance);
    if (amount && pin) {
        if (convertedPin === 1234) {
            let nowBalance = convertedMainBalance - convertAmount;
            document.getElementById('main-balance').innerText = nowBalance
        }
    } else {
        alert('please enter amount')
    }
})