document.getElementById('transfer-btn').addEventListener('click', (event) => {
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let convertedAmount = parseFloat(amount);
    let pin = document.getElementById('pinNumber').value;
    let convertedPin = parseInt(pin);
    let mainBalance = document.getElementById('main-balance').innerText;
    let convertedMainBalance = parseFloat(mainBalance)
    if (amount && pin) {
        if (convertedPin === 1234) {
            let totalBalance = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = totalBalance;
        } else {
            alert('please enter valid pin number')
        }
    } else {
        alert('please enter amount')
    }
})