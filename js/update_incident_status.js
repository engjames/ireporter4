function update_status(incident_id, user_id){
    //Modal for the add Products
 // Get the modal
 var modal = document.getElementById('simpleModal');
 
 // Get the button that opens the modal
 var modalBtn  = document.getElementById(incident_id);
 document.getElementById('incident_id').value = incident_id; 
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


function get_new_status(){
    new_status = document.getElementById("status").value;
    incident_id = document.getElementById("incident_id").value;
    const data = {"status":new_status}

    var update_incident_url=SERVER_PATH+"redflags/"+incident_id+"/status";
        fetch(update_incident_url, {
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
                var msg = document.getElementById('mess');
                msg.style.display="block";
                msg.innerHTML = "Succefully updated the record incident"
                setInterval(function(){
                    msg.style.display="none"
                    
                },5000);
                // window.location.href = 'admin_manage_redflags.html';
                
            })

    }

