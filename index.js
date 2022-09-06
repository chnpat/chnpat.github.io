const form = document.getElementById('contact_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to server here

  // 👇️ Reset form here
  form.reset();
});

function copyText(name) {
    /* Get the text field */
    var copyText = document.getElementById(name);
  
    /* Select the text field */
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    var myAlert = document.getElementById('copied_alert')
    myAlert.style.display = 'block';
    /* Alert the copied text */
    // alert("Copied the text!");
  }