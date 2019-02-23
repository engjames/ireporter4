function loginUser(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const data = {"email":email, "password":password};

    var login_url=SERVER_PATH+"auth/login";
    fetch(login_url, {
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
            if(result.status === 200){
                if(result.data[0]['user']['isadmin'] == "false"){
                    localStorage.setItem("auth-token",result.data[0]['token']);
                    window.location.href = 'user_incidents.html';
                }
                else{
                    localStorage.setItem("auth-token",result.data[0]['token']);
                    window.location.href = 'admin_manage_redflags.html';
                }
            }
            else{
                alert(JSON.stringify(result));
            }
            
        })
        
}
