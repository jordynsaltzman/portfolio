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


    let submit = document.getElementById("submit-btn");
    

    function animateButton(scale, duration, elasticity) {
        anime({
            targets: submit,
            scale: scale,
            duration: duration,
            elasticity: elasticity
        });
    };


    function enterButton() {
        anime.remove(submit);
        animateButton(1.12, 800, 400)
    };

    function leaveButton() { 
        anime.remove(submit);
        animateButton(1.0, 600, 300) 
    };

    submit.addEventListener('mouseenter', enterButton, false);
    submit.addEventListener('mouseleave', leaveButton, false);


    let projectBtn = document.getElementById("viewprojects");

    function viewProjects(scale, duration, elasticity) {
        anime({
            targets: projectBtn,
            scale: scale,
            duration: duration,
            elasticity: elasticity
        });
    };
    
    function enterProjButton() {
        anime.remove(projectBtn);
        viewProjects(1.12, 800, 50)
    };

    function leaveProjButton() { 
        anime.remove(projectBtn);
        viewProjects(1.0, 600, 300) 
    };

    projectBtn.addEventListener('mouseenter', enterProjButton, false);
    projectBtn.addEventListener('mouseleave', leaveProjButton, false);

});