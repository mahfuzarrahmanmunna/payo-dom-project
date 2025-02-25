let login_btn = document.getElementById('login-btn')
login_btn.addEventListener('click', (event) => {
    event.preventDefault();

    const accountNumber = document.querySelector('#inp1').value;
    const pinNumber = document.querySelector('#inp2').value;

    if (accountNumber.length >= 11) {
        if (pinNumber === '1234') {
            window.location.href = './main.html'
        }
        else {
            alert("incorrect pin")
        }
    }
    else {
        alert('wrong number')
    }
})
