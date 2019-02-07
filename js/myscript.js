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
   //red-flag-category = 1
   //intervention-category = 0
   alert(incident_id+"-->"+category);
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
               
            }
            else{
               alert(JSON.stringify(result.error))
            }
           
         })
  }
}
       
