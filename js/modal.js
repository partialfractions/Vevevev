$(document).ready(function() {
  // Get the modal
  var projectsModal = document.getElementById('projectsModal');
  var interestsModal = document.getElementById('interestsModal');
  var contactModal = document.getElementById('contactModal');

  // Get the button that opens the modal
  var projectsBtn = document.getElementById("projects");
  var interestsBtn = document.getElementById("interests");
  var contactBtn = document.getElementById("contact");

  // Get the <span> element that closes the modal
  var spanProj = document.getElementsByClassName("close")[1];
  var spanInt = document.getElementsByClassName("close")[0];
  var spanCon = document.getElementsByClassName("close")[2];

  // When the user clicks on projects, open the modal
  projectsBtn.onclick = function() {
      projectsModal.style.display = "block";
  }

  interestsBtn.onclick = function() {
      interestsModal.style.display = "block";
  }

  contactBtn.onclick = function() {
      contactModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  spanProj.onclick = function() {
      projectsModal.style.display = "none";
  }

  spanInt.onclick = function() {
      interestsModal.style.display = "none";
  }

  spanCon.onclick = function() {
      contactModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == interestsModal || event.target == projectsModal || event.target == contactModal) {
        projectsModal.style.display = "none";
        interestsModal.style.display = "none";
        contactModal.style.display = "none";
      }
  }

});
