$(document).ready(function() {
  //page piling script here
  $("#pagepiling").pagepiling({
    anchors: ["home", "about", "projects", "contact"],
    menu: "#menu",
    navigation: {
      textColor: "#000",
      position: "right",
      tooltips: ["Home", "About", "Projects", "Contact"]
    }
  });

  //animate the home page elements when the page loads using anime.js
  const tl = anime.timeline({
    easing: "easeOutExpo"
  });

  tl.add({
    targets: "#name-header",
    translateX: [75, 0],
    opacity: [0, 1]
  }).add({
    targets: ".nav-link",
    translateX: [-55, 0],
    opacity: [0, 1],
    offset: "-=1000"
  });

  //animate the submit button using anime.js
  let submit = document.getElementById("submit-btn");

  function animateButton(scale, duration, elasticity) {
    anime({
      targets: submit,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }

  function enterButton() {
    anime.remove(submit);
    animateButton(1.12, 800, 400);
  }

  function leaveButton() {
    anime.remove(submit);
    animateButton(1.0, 600, 300);
  }

  submit.addEventListener("mouseenter", enterButton, false);
  submit.addEventListener("mouseleave", leaveButton, false);

  //submit event handler

  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();
  let status = $("#form-status");
  let button = $("#submit-btn");

  function formSuccess() {
    button.attr("display: none ");
    status.innerHTML = "Thanks!";
  }

  function formError() {
    status.innerHTML = "Oops! There was a problem.";
  }

  button.on("click", function(event) {
    event.preventDefault();
    if (
      email.length > 5 &&
      email.includes("@") &&
      email.includes(".") &&
      name.length > 1 &&
      message.length > 1
    ) {
      formSuccess();
    } else {
      formError();
    }
  });

  $("#pagepiling").show();
});
