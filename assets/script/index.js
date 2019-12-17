$(document).ready(function () {
    $('#pagepiling').pagepiling({
        anchors: ['home', 'about', 'projects', 'contact'],
        menu: '#menu',
        navigation: {
            'textColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'About', 'Projects', 'Contact']
        }
    });

    const tl = anime.timeline({
        easing: 'easeOutExpo',
    })

    tl.add({
        targets: '#name-header',
        translateX: [75, 0],
        opacity: [0, 1],
    }).add({
        targets: '.nav-link',
        translateX: [-55, 0],
        opacity: [0, 1],
        offset: '-=1000'
    });

   
    var submit = document.getElementById("submit-btn");

    function animateButton(scale, duration, elasticity) {
        anime.remove(submit);
        anime({
          targets: submit,
          scale: scale,
          duration: duration,
          elasticity: elasticity
        });
      };
      
      function enterButton() { animateButton(1.12, 800, 400) };
      function leaveButton() { animateButton(1.0, 600, 300) };
      submit.addEventListener('mouseenter', enterButton, false);
      submit.addEventListener('mouseleave', leaveButton, false);




      var projectBtn = document.getElementById("viewprojects");

    function animateProjButton(scale, duration, elasticity) {
        anime.remove(projectBtn);
        anime({
          targets: projectBtn,
          scale: scale,
          duration: duration,
          elasticity: elasticity
        });
      };
      
      function enterProjButton() { animateProjButton(1.05, 800, 50) };
      function leaveProjButton() { animateProjButton(1.0, 600, 300) };
      projectBtn.addEventListener('mouseenter', enterProjButton, false);
      projectBtn.addEventListener('mouseleave', leaveProjButton, false);
      
      
      
});