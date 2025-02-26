document.querySelector('#add-money-btn').addEventListener('click', (event) => {
    event.preventDefault();
    let pinNumber = document.querySelector("#pinNumber").value;
    let amount = document.querySelector('#amount').value;
    let convertAmount = parseFloat(amount);
    const mainBalance = document.querySelector('#main-balance').innerText;
    let convertMainBalance = parseFloat(mainBalance);
    if (amount && pinNumber) {
        if (pinNumber === '1234') {
            let sum = convertAmount + convertMainBalance
            document.querySelector('#main-balance').innerText = sum
        }
        else {
            alert('please enter valid pin number')
        }
    } else {
        alert('Enter amount')
    }
})