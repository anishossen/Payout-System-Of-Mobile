
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const inputMoney = document.getElementById('input-money').value ;
    const inputPin = document.getElementById('input-pin').value ;
    // step : 2
    if(inputPin === '12345'){
        // step : 1
        const balance = document.getElementById('main-balance').innerText;
        // step : 2
        const convertMoney = parseInt(inputMoney);
        const convertBalance = parseInt(balance);

        const addedBalance = convertMoney + convertBalance;
        // step : 3
        document.getElementById('main-balance').innerText = addedBalance;
    }
    else{
        alert('Please type valid number')
    }

})