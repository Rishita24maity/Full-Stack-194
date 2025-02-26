let form=document.getElementById("userForm")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phoneNumber =document.getElementById("number").value;
    let password=document.getElementById("password").value;
    let confrimPassword=document.getElementById("confirmPassword").value;

    let obj={
        name,email,phoneNumber,password,confrimPassword
    }
    if(obj.password!==obj.confrimPassword){
        return alert("Password do not match")
    }
    let tr=document.createElement("tr")
     let td1=document.createElement("td");
    td1.innerText=obj.name;

    let td2=document.createElement("td");
    td2.innerText=obj.email;

    let td3=document.createElement("td");
    td3.innerText=obj.phoneNumber;

    let td4=document.createElement("td");
    td4.innerText=obj.password;

    let td5=document.createElement("td");
    td5.innerText=obj.confrimPassword;

    tr.append(td1,td2,td3,td4,td5)
    document.getElementById("tbody").append(tr);

    document.getElementById("name").value;
    document.getElementById("email").value;
    document.getElementById("number").value;
    document.getElementById("password").value;
    document.getElementById("confirmPassword").value;
});