const handleSubmit =() =>{
    console.log("vshbgdh")
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let phno=document.getElementById("phno").value
    let pass=document.getElementById("password").value
    let cpass=document.getElementById("confirmpassword").value

    console.log(name);
    console.log(email);
    console.log(phno);
    console.log(pass);
    console.log(cpass);
    alert("password doesn't match")
    if(pass==cpass)
    {
        console.log("passwords match")
    }
    else{
        alert("password doesn't match")
    }

}