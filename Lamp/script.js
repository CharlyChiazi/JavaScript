document.getElementById("toggleButton").addEventListener("click", function() {
    var lamp = document.getElementById("lamp");
    if (lamp.classList.contains("lamp-off")) {
      lamp.classList.remove("lamp-off");
      lamp.classList.add("lamp-on");
    } else {
      lamp.classList.remove("lamp-on");
      lamp.classList.add("lamp-off");
    }
  });
  