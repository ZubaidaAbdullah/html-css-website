
    $(document).ready(function(){
        // Activate Carousel
        $("#carouselExampleControls").carousel();
        
        // Enable Carousel Indicators
        $(".item1").click(function(){
            $("#carouselExampleControls").carousel(0);
        });
        $(".item2").click(function(){
            $("#carouselExampleControls").carousel(1);
        });
        $(".item3").click(function(){
            $("#carouselExampleControls").carousel(2);
        });
        
        // Enable Carousel Controls
        $(".left").click(function(){
            $("#carouselExampleControls").carousel("prev");
        });
        $(".right").click(function(){
            $("#carouselExampleControls").carousel("next");
        });
    });

 