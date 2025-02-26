document.getElementById('addMoneySection').style.display = 'none'
document.getElementById('cashOutSection').style.display = 'none'
document.getElementById('moneyTransferSection').style.display = 'none'
document.getElementById('bonusSection').style.display = 'none';
document.getElementById('payBillSection').style.display = 'none';
document.getElementById('latestPaymentSection').style.display = 'none';


document.getElementById('add-money-box').addEventListener('click', () => {
    console.log('hi')
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('latestPaymentSection').style.display = 'none';
    document.getElementById('addMoneySection').style.display = 'block'
    document.getElementById('moneyTransferSection').style.display = 'none'
    document.getElementById('bonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'

})
document.getElementById('cash-out-box').addEventListener('click', () => {
    console.log('hi')
    document.getElementById('cashOutSection').style.display = 'block';
    document.getElementById('latestPaymentSection').style.display = 'none';
    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('moneyTransferSection').style.display = 'none'
    document.getElementById('bonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'

})
document.getElementById('transfer-money-box').addEventListener('click', () => {
    console.log('hi')
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('latestPaymentSection').style.display = 'none';
    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('moneyTransferSection').style.display = 'block'
    document.getElementById('bonusSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'

})


document.getElementById('bonus-box').addEventListener('click', () => {
    console.log('hi')
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('latestPaymentSection').style.display = 'none';
    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('moneyTransferSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'
    document.getElementById('bonusSection').style.display = 'block'

})
document.getElementById('pay-bill-box').addEventListener('click', () => {
    console.log('hi')
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('latestPaymentSection').style.display = 'none';
    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('moneyTransferSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'block'
    document.getElementById('bonusSection').style.display = 'none'

})
document.getElementById('transaction-box').addEventListener('click', () => {
    console.log('hi')
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('latestPaymentSection').style.display = 'block';
    document.getElementById('addMoneySection').style.display = 'none'
    document.getElementById('moneyTransferSection').style.display = 'none'
    document.getElementById('payBillSection').style.display = 'none'
    document.getElementById('bonusSection').style.display = 'none'

})
