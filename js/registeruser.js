function RegisterUser(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isAdmin = false;
    
    if(firstname != "" && lastname != "" && email != "" && password != ""){
        const data = {"firstname":firstname, "lastname":lastname, "email":email, "password":password, "isAdmin":isAdmin};
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
                if(result.status === 201){
                    var msg = document.getElementById('messages');
                    msg.style.display="block";
                    msg.innerHTML = "User successfully created"
                    setInterval(function(){
                        msg.style.display="none"
                        
                    },5000);
                    
                }
                else{
                    var mssg = document.getElementById('message');
                    mssg.style.display="block";
                    mssg.innerHTML = "Wrong email format or password should be more than five "
                    setInterval(function(){
                        mssg.style.display="none"
                        
                    },5000);
                }
                
            })

    }
    else{
        var mssg = document.getElementById('message');
        mssg.style.display="block";
        mssg.innerHTML = "All fields should be filled or password should be more than five "
        setInterval(function(){
            mssg.style.display="none"
            
        },5000);
    }
    
        
}
