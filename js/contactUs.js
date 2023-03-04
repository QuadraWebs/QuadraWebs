const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const question = document.getElementById('question');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked");

    //Mail Format
    let ebody = `
    <b>Name: </b>${fname.value}&nbsp;${lname.value}<br>
    <b>Email: </b>${email.value}<br>
    <b>Phone Number: </b>${phoneNumber.value}<br>
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
