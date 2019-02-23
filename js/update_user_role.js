function update_user(user_id){
    //Modal for the add Products
 // Get the modal
 var modal = document.getElementById('simpleModal');
 
 // Get the button that opens the modal
 var modalBtn  = document.getElementById("user_id");
 document.getElementById('user_id').value = user_id; 
 // Get the <span> element that closes the modal
 var closeBtn = document.getElementsByClassName("closeBtn")[0];
 
 //listen for click
 modalBtn.addEventListener('click', openModal);
 
 //listen for close click
 closeBtn.addEventListener('click', closeModal);
 
 //listen for outside click
 window.addEventListener('click', clickOutside);
 
 
 // When the user clicks the button, open the modal
 function openModal(){
     modal.style.display = "block";
 } 
 
 //function to close modal
 function closeModal(){
 
     modal.style.display = 'none';
 }
 
 //function to close modal if outside click
 
 function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
     
 }
 
 function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }}
}


function get_new_role(){
    new_role = document.getElementById("user_status").value;
    user_id = document.getElementById("user_id").value;
    const data = {"user_status":new_user_status}

    var update_user_url=SERVER_PATH+"users/"+user_id+"/status";
        fetch(update_user_url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "auth_token":  localStorage.getItem("auth-token")
            },
        
            cache: 'no-cache',
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(result => {
                alert(JSON.stringify(result))
                window.location.href = 'admin_get_all_users.html';
                
            })

    }

