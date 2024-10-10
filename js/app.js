
//    Start navbar
    // start top navbar
        function dropbtn(e){
            // console.log(e.target);

            // console.log(e.target.parentElement.nextElementSibling);
            e.target.parentElement.nextElementSibling.classList.toggle("show");
        }
    //  end top navbar
//    end navbar



$(document).ready(function(){
    //    Start navbar
        // start left sidebar
        $(".sidebarlinks").click(function(){
            $(".sidebarlinks").removeClass("currents");
            $(this).addClass("currents");
            
        });
        // end left sidebar
    //    end navbar

});