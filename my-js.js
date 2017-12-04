function indexFunction() {
	var x = document.getElementById("index");
		x.style.display = "block";
	var y = document.getElementById("gioi_thieu");
		y.style.display = "none";
	var z = document.getElementById("che_thai_nguyen");
		z.style.display = "none";
}

function gtFunction() {
	var x = document.getElementById("index");
		x.style.display = "none";
	var y = document.getElementById("gioi_thieu");
		y.style.display = "block";
	var z = document.getElementById("che_thai_nguyen");
		z.style.display = "none";
}

function ctnFunction() {
	var x = document.getElementById("index");
		x.style.display = "none";
	var y = document.getElementById("gioi_thieu");
		y.style.display = "none";
	var z = document.getElementById("che_thai_nguyen");
		z.style.display = "block";
}


  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

$(document).ready(function() {
      $("#submit").click(function() {
        $(".output").append("<tr><td>" + $("#form_ma").val() +"</td><td>" + $("#form_ten").val() +"</td><td>" + $("#form_sanxuat").val() +"</td><td>" + $("#form_sudung").val() +"</td><td>" + $("#form_soluong").val() +"</td><td>" + $("#form_gia").val() +"</td></tr>")
      });
    });
