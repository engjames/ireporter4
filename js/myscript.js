function addIncidentRecord(){
   //Modal for the add Products
// Get the modal
var modal = document.getElementById('simpleModal');

// Get the button that opens the modal
var modalBtn  = document.getElementById("modalBtn");

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
   	modal2.style.display = 'none';
   }
	
}

}

function mydeleteFunction(incident_id, category) {  
   var response = confirm("Are you sure you want to delete this incident?");
   if (response === true){
      
      if(category === 1){
         var delete_url=SERVER_PATH+"redflags/"+incident_id;
      }
      else{
         var delete_url=SERVER_PATH+"interventions/"+incident_id;
      }
     

      fetch(delete_url, {
         method: 'DELETE',
         headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            "auth_token":  localStorage.getItem("auth-token")
         },
         cache: 'no-cache'
         
      })
         .then((res) => res.json())
         .then(result => {
            if(result.status === 200){
               alert("Incident with id "+incident_id+" has been deleted")
               window.location.href = 'user_incidents.html';
            }
            else{
               alert(JSON.stringify(result.error))
            }
           
         })
  }
}





function EditIncidentRecord(incident_id, user_id, location){
   //Modal for the add Products
// Get the modal
var modal = document.getElementById('EditModal');

// // Get the button that opens the modal
var modalBtn  = document.getElementById(incident_id);
var comment = document.getElementById("e"+incident_id).value;
document.getElementById('location_comment_id').value = incident_id;
document.getElementById('edit_comment').value = comment;
document.getElementById('edit_long').value = parseInt(location[0]);
document.getElementById('edit_lat').value = parseInt(location[1]);


var closeBtn = document.getElementsByClassName("closeEditBtn")[0];

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
   }
	
}

}

function save_changes(){
   var comment = document.getElementById('edit_comment').value;
   var longitude = document.getElementById('edit_long').value;
   var latitude = document.getElementById('edit_lat').value;
   var incident_id = document.getElementById('location_comment_id').value;

   if(comment == "" || longitude =="" || latitude==""){
      alert("Comment/location are empty")
   }
   else{
      var location = [longitude,latitude]
      const data = {"comment":comment, "location":String(location)};
   
      var save_changes_url=SERVER_PATH+"interventions/"+incident_id+"/comment";
      fetch(save_changes_url, {
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
            window.location.href = 'user_incidents.html';
              
          })
   
   }
  
}
       
