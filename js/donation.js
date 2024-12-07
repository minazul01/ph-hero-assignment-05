/* global function */
function inputField(id){
    const inputFieldAdd = document.getElementById(id).value;
    const changeStringToNumber = parseFloat(inputFieldAdd);
    return changeStringToNumber;
}
function elementField(id){
    const elementFieldAdd = parseFloat(document.getElementById(id).innerText);
    return elementFieldAdd;
}


/* other work */
document.getElementById('Donate-one').addEventListener('click', function(){
    const addInput = inputField('input-field');
    const addDonationBalance = elementField('donation-balance');
    const addMyBalance = elementField('my-balance')
    /* add in the function in the donation and decrease my balance */
    const addDonation = addDonationBalance + addInput;
    const decreaseMyBalance = addMyBalance - addInput;
    /* add input value in the donation balance and decrease my balance  */
    // document.getElementById('donation-balance').innerText = addDonation;
    // document.getElementById('my-balance').innerText = decreaseMyBalance;
    // document.getElementById('input-field').value = ' ';
    if(addDonation < addMyBalance && typeof (Number) && !addDonation === nag){
        document.getElementById('donation-balance').innerText = addDonation;
        document.getElementById('my-balance').innerText = decreaseMyBalance;
        document.getElementById('input-field').value = ' ';
        
    }else{
        alert('invalid amount')
    }

})


/* history and home page btn work */
const addHidden = document.getElementById('add-hidden');
const adds = document.getElementById('history');
const backHome = document.getElementById('back-home');
document.getElementById('history').addEventListener('click', function(){
    
    addHidden.classList.add('hidden');
    adds.classList.add('bg-primaryColor')
    backHome.classList.remove('bg-primaryColor')
    backHome.classList.add('border-2')
})
document.getElementById('back-home').addEventListener('click', function(){

     addHidden.classList.remove('hidden');
     adds.classList.add('bg-primaryColor');
     adds.classList.remove('bg-primaryColor');
     backHome.classList.add('bg-primaryColor')
})