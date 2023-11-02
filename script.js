function process() {
    var username = document.getElementById("nameBox").value;
    var subject = document.getElementById("subjectBox").value;
    var phone = document.getElementById("phoneBox").value;
    var mail = document.getElementById("emailBox").value;
    var message = document.getElementById("messageBox").value;

    document.getElementById("content").innerHTML = `
    <br> <br> <br>
    Hello <b><span class="blue">${username} </span></b>,<br>
    we have got your message, our admin will <br>   
    contact with you very soon through this <br> <b><span class="blue">${mail} </span></b><br>`;
}
