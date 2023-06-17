const custName = document.getElementById('Contact-1-Name');
const email = document.getElementById('Contact-1-Email');
const question = document.getElementById('Contact-1-Message');
const submit = document.getElementsByClassName('form-contact')[0];

console.log(custName);

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked");

    //Mail Format
    let ebody = `
    <b>Name: </b>${custName.value}<br>
    <b>Email: </b>${email.value}<br>
    <b>Question: </b>${question.value}<br>
    `

    Email.send({
        SecureToken : "371cd294-400e-49df-b53d-8900abed8f98",
        To : 'quadrawebs@gmail.com', 
        From : "quadrawebs@gmail.com",
        Subject : "Enquires from" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});