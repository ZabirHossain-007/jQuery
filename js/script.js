// jquery code will goes here

$(document).ready(function(){
    // for alert message
    $(".btn2").on("click", function(){
        alert("Welcome To Jquery.")
    })

    // for show and hide text
    $("#hide").on("click",function(){
        $("#text1").hide();
    });

    $("#show").on("click",function(){
        $("#text1").show();
    });

    $("#toggle1").on("click",function(){
        $("#text1").toggle();
    });

    // for fadein/ fadeout/ and fade toggle
    $("#fadeHide").on("click",function(){
        $("#text2").fadeOut(1000);
    });

    $("#fadeShow").on("click",function(){
        $("#text2").fadeIn(1000);
    });

    $("#fadeToggle").on("click",function(){
        $("#text2").fadeToggle(1500);
    });

    // Slide Toggler for question and answer
    $(".question").on("click",function(){
        $(".answer").slideToggle();
    })

    // jquery for animation
    $(".btnCustom").on("click",function(){
        $("#box").animate({left: '500px'});
    });

    $(".btnCustom2").on("click",function(){
        $("#box").animate({height: 'toggle'},"slow");
    });

    // for animatio stop 
    $("#flip").on("click",function(){
        $("#panel").slideDown(5000)
    });
    $("#stop").on("click",function(){
        $("#panel").stop()
    });

    // for callback Function
        $("#callText").click(function(){
          $("#text3").hide("slow", function(){
            alert("The paragraph is now hidden");
          });
        });
    
        // for chaining method

        $("#chain").on("click",function(){
            $("#text4").css("color","red").slideUp(2000).slideDown(2000);
        });

        // for set method
    
            $("#btn1").click(function(){
              $("#test1").text("Hello world!").css("color","green");
            });
            $("#btn2").click(function(){
              $("#test2").html("<b>Hello world!</b>");
            });
            $("#btn3").click(function(){
              $("#test3").val("Tom & Jerry");
            });

            // for css property and font change
            $(".fontChange").on("click",function(){
                $(".text5").css({"fontSize":"30px", "color":"orange"});
            });
        


});