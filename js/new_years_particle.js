function FireWorkEffect(query) {
  console.log(query);
  if (!document.querySelector(query)) {
    return;
  }

  var time = 0;
  var canvas = document.querySelector(query);
  console.log(canvas);
  canvas.width = 400;
  canvas.height = 800;
  var colors = ["lightblue", "limegreen"];
  var c = canvas.getContext("2d");
  var count = 50;
  var particles = [];
  var gravity = 0.01;
  var friction = 0.999;
  var isAni = false;
  var speed = 2;

  class Particle {
    constructor(x, y, velocity, color) {
      this.x = x;
      this.color = `hsl(${Math.floor(Math.random() * 360)},50%,50%)`;
      this.y = y;
      this.alpha = 1;
      this.radius = Math.floor(Math.random() * 1) + 0.5;
      this.velocity = velocity;
    }

    draw() {
      c.save();

      this.globalAlpha = this.alpha;
      c.beginPath();
      c.arc(this.x, this.y, 0.4, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.strokeStyle = this.color;
      c.stroke();
      c.fill();
      c.closePath();
      c.restore();
    }

    update() {
      this.velocity.x = this.velocity.x * friction;
      this.velocity.y = this.velocity.y + gravity;

      this.alpha -= Math.random() * 0.001 + 0.002;

      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.radius > 0) {
        this.radius -= 0.002;
      } else {
        this.radius = 0;
      }

      this.draw();
    }
  }

  function animation() {
    requestAnimationFrame(animation);
    const gradient = c.createLinearGradient(0, 0, canvas.width, 0);
    c.clearRect(0, 0, canvas.width, canvas.height);
    // Add color stops to the gradient
    gradient.addColorStop(0, "rgba(28,40,70,.1)"); // Start color
    gradient.addColorStop(1, "rgba(16,19,31)"); // Middle color

    //c.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      if (particles[i].alpha > 0) {
        particles[i].update();
      } else {
        particles.splice(i, 1);
      }
    }
  }

  function init(x, y) {
    for (var i = 0; i < count; i++) {
      var random_color = colors[Math.floor(0, colors.length)];

      var velocity = {
        x: Math.cos(((Math.PI * 2) / count) * i) * Math.random() * speed,
        y: Math.sin(((Math.PI * 2) / count) * i) * Math.random() * speed,
      };

      var new_particle = new Particle(x, y, velocity, random_color);

      particles.push(new_particle);
    }
    if (particles.length > 3000) {
      particles = [];
      c.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  var amount = Math.floor(Math.random() * 2);

  for (var i = 0; i < amount; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    init(x, y);
  }

  animation();

  setInterval(() => {
    var amount = Math.floor(Math.random() * 3);

    for (var i = 0; i < amount; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * 300;
      init(x, y);
    }
  }, 4500);
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth < 744 && window.innerWidth < window.innerHeight) {
    FireWorkEffect("#newyears_canvas");
  } else {
    FireWorkEffect("#newyears");
  }
});
