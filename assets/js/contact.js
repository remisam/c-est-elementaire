const message = "Merci";

let contact = document.getElementById('send');
if (contact != null) {
  contact.addEventListener("click", function (event) {
    event.preventDefault();
    alert(message);
  });
}