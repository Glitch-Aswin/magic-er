particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded successfully.');
  });

  document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      if (this.value === "dalgona") { // Change to your final password
        document.getElementById("success-audio").play();
      }
    }
  });