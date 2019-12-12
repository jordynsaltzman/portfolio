$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['home', 'about', 'projects', 'contact'],
        menu: '#menu',
        navigation: {
            'textColor': '#000',
            'position': 'right',
            'tooltips':['Home', 'About', 'Projects', 'Contact']
        }
    });
    
});