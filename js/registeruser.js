function RegisterUser(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var usertype = document.getElementById('usertype').value;
    var isAdmin = false;
    if(usertype === "admin"){
        isAdmin = true;
    }
    
    if(firstname != "" && lastname != "" && email != "" && password != ""){
        const data = {"firstname":firstname, "lastname":lastname, "email":email, "password":password, "isAdmin":isAdmin};
        // alert(JSON.stringify(data));
        var register_url=SERVER_PATH+"auth/signup";
        fetch(register_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        
            cache: 'no-cache',
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(result => {
                // if(result.status === 201){
                //    alert(JSON.stringify(result))
                // }
                // else{
                //     alert(JSON.stringify(result))
                // }
                alert(JSON.stringify(result))
                
            })

    }
    else{
        alert("Lastname or firstname or email or isadmin should not be empty ");
    }
    
        
}
