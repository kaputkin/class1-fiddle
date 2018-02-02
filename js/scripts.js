var theHeader = document.getElementById("header");
var myButton = document.getElementById("darkbutton");
var color = 1;

	$('.darkbutton').click(function(){
		var $this = $(this);

    //Effects when LIGHTS ON
    $("#header").css("background-color", "transparent");
    $("body").css("background-color", "#9c9c9c");
    $("body").css("background-position", "0px 0px");
    $(".body").css("color", "black");
    $(".moosebutton").css("color", "black")
    $(".moosebutton").css("border-color", "black")
    $(".moosebutton:hover").css("border-color", "white")

    $(".moosebutton:hover").css("background-color", "grey")

		$this.toggleClass('darkbutton');
		if($this.hasClass('darkbutton')){
			$this.text('LIGHTS OFF');
		} else {

//Effects when LIGHTS OFF
      $this.text('LIGHTS ON');
      $("#header").css("background-color", "black");
      $("body").css("background-color", "black");
      $("body").css("background-image");
      $(".body").css("color", "white");
      $(".moosebutton").css("color", "white")
      $(".moosebutton").css("border-color", "white")

		}
	});

	$('.moosebutton').click(function(){
    $('.img-circle').toggle();
		var $this = $(this);
		$this.toggleClass('moosebutton');
		if($this.hasClass('moosebutton')){
			$this.text('SHOW ME A MOOSE');
		} else {
			$this.text('TAKE AWAY THE MOOSE');
		}
	});
