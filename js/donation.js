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

let count = 0;
/* other work */
document.getElementById('Donate-one').addEventListener('click', function(){
    count += 1;
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
    if(addDonation < addMyBalance && typeof (Number)){
        document.getElementById('donation-balance').innerText = addDonation;
        document.getElementById('my-balance').innerText = decreaseMyBalance;
        document.getElementById('input-field').value = ' ';
        /* donation successful pages see */
        const donationSuccessful =  document.getElementById('donate-successful');
        donationSuccessful.classList.remove('hidden');
        /* close successful btn */
        document.getElementById('close-successful-btn').addEventListener('click', function(){
            const closeSuccessfulBtn = document.getElementById('donate-successful');
            closeSuccessfulBtn.classList.add('hidden');

             /* history field */
           
             const historyItem = document.createElement('div');
           
             historyItem.classList.add(
                "bg-white",
                "max-w-7xl",
                "mx-auto",
                "p-4",
                "round-lg"
             );
             
             historyItem.innerHTML = `
             <p class="text-lg font-medium">serial: ${count}</p>
              <p class="text-lg font-medium"> $${addInput} is Donate for Flood at Noakhali, Bangladesh</p>
              <p class="text-xs font-normal">${new Date()}</p>
             
             `
             const historyAdd = document.getElementById('history-add');
             historyAdd.appendChild(historyItem)
        })

        
    }else{
        alert('invalid amount')
    }

})


/* history and home page btn work */
const historyAdd = document.getElementById('history-add');
const addHidden = document.getElementById('add-hidden');
const adds = document.getElementById('history');
const backHome = document.getElementById('back-home');
document.getElementById('history').addEventListener('click', function(){
    
    addHidden.classList.add('hidden');
    adds.classList.add('bg-primaryColor')
    backHome.classList.remove('bg-primaryColor')
    backHome.classList.add('border-2')
    historyAdd.classList.remove('hidden')

})
document.getElementById('back-home').addEventListener('click', function(){

     addHidden.classList.remove('hidden');
     adds.classList.add('bg-primaryColor');
     adds.classList.remove('bg-primaryColor');
     backHome.classList.add('bg-primaryColor');
     historyAdd.classList.add('hidden')
})