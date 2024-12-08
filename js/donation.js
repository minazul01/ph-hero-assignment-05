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
    if(addDonation < addMyBalance && typeof (Number) && addDonation > 0){
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
        alert('invalid amount');
        document.getElementById('input-field').value = ' ';
    }

})
/* history and home page btn work */
const threeHistory = document.getElementById('three-successful-btn');
const twoHistory = document.getElementById('history-two-add');
const historyAdd = document.getElementById('history-add');
const addHidden = document.getElementById('add-hidden');
const adds = document.getElementById('history');
const backHome = document.getElementById('back-home');
document.getElementById('history').addEventListener('click', function(){
    
    addHidden.classList.add('hidden');
    adds.classList.add('bg-primaryColor');
    backHome.classList.remove('bg-primaryColor');
    backHome.classList.add('border-2');
    historyAdd.classList.remove('hidden');
    twoHistory.classList.remove('hidden');

})
document.getElementById('back-home').addEventListener('click', function(){

     addHidden.classList.remove('hidden');
     adds.classList.add('bg-primaryColor');
     adds.classList.remove('bg-primaryColor');
     backHome.classList.add('bg-primaryColor');
     historyAdd.classList.add('hidden');
     twoHistory.classList.add('hidden');
     threeHistory.classList.add('hidden');
})







/* donation two section */

/* donate now btn */
document.getElementById('donate-two-btn').addEventListener('click', function(){
    const donationTwoDonateAmount = elementField('donation-two-donate-amount');
    const addMyBalance = elementField('my-balance');
    const donationTwoInputField = inputField('donation-two-input');
    const addDonationBalance = donationTwoDonateAmount + donationTwoInputField;
    const increaseMyBalance = addMyBalance - donationTwoInputField;
    /* condition */
    if(addDonationBalance < addMyBalance && typeof (Number) && addDonationBalance > 0){
        document.getElementById('donation-two-donate-amount').innerText = addDonationBalance;
        document.getElementById('my-balance').innerText = increaseMyBalance;
        document.getElementById('donation-two-input').value = '';
        /* donation successful pages */
        const succefulBnt = document.getElementById('donate-successful-btn');
        succefulBnt.classList.remove('hidden');

         /* close successful btn */
         document.getElementById('close-two-successful-btn').addEventListener('click', function(){
            succefulBnt.classList.add('hidden');
            /* history add */
            const historyTwoItem = document.createElement('div');
           
             historyTwoItem.classList.add(
                "bg-white",
                "max-w-7xl",
                "mx-auto",
                "p-4",
                "round-lg"
             );
             
             historyTwoItem.innerHTML = `
              <p class="text-lg font-medium"> $${donationTwoInputField} Donate for Flood at Feni, Bangladesh</p>
              <p class="text-xs font-normal">${new Date()}</p>
             
             `
             const historyAdd = document.getElementById('history-two-add');
             historyAdd.appendChild(historyTwoItem)
         })

    }else{
        alert('invalid amount');
        document.getElementById('donation-two-input').value = '';
    }
})











/* donation three */
document.getElementById('three-btn').addEventListener('click', function(){
    const donationTwoDonateAmount = elementField('three-donation');
    const addMyBalance = elementField('my-balance');
    const donationTwoInputField = inputField('three-donation-input');

    const addDonationBalance = donationTwoDonateAmount + donationTwoInputField;
    const increaseMyBalance = addMyBalance - donationTwoInputField;
    /* condition */
    // console.log(donationTwoDonateAmount, addMyBalance,donationTwoInputField)
   if( donationTwoInputField < addMyBalance && donationTwoInputField > 0 && typeof (Number)){
    document.getElementById('three-donation').innerText = addDonationBalance;
    document.getElementById('my-balance').innerText = increaseMyBalance;
    document.getElementById('three-donation-input').value = '';

    /* successful btn */
    const threeSuccessfulBtn = document.getElementById('three-successful-btn');
    threeSuccessfulBtn.classList.remove('hidden');
    /* successful btn remove */
    document.getElementById('three-close-successful-btn').addEventListener('click', function(){
        threeSuccessfulBtn.classList.add('hidden');

        /* history add */
        const historyTwoItem = document.createElement('div');
           
        historyTwoItem.classList.add(
           "bg-white",
           "max-w-7xl",
           "mx-auto",
           "p-4",
           "round-lg"
        );
        
        historyTwoItem.innerHTML = `
         <p class="text-lg font-medium"> $${donationTwoInputField} Donate for Flood at Quota, Bangladesh</p>
         <p class="text-xs font-normal">${new Date()}</p>
        
        `
        const historyAdd = document.getElementById('history-two-add');
        historyAdd.appendChild(historyTwoItem)

    })
   }else{
    alert('invalid amount');
    document.getElementById('three-donation-input').value = '';
   }
})
