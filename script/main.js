let addMoneyBtn = document.querySelector('#addMoney')
addMoneyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = './addmoney.html'
})

let addMoney = document.querySelector('#add-money');
addMoney.addEventListener('click', (event) => {
    event.preventDefault();
    let amount = document.querySelector('#amount').value;
    const convertAmount = parseFloat(amount)
    console.log(typeof convertAmount)
    let pinNumber = document.querySelector('#pinNumber').value;
    if (pinNumber === '1234') {
        // window.location.href = 
        alert('this is correct')
    }
    else {
        alert('incorrect')
    }
})