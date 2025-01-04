var time = 0;

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
  }
}

var amount = Math.floor(Math.random() * 7);

for (var i = 0; i < amount; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  init(x, y);
}

animation();

setInterval(() => {
  time += 10000;

  if (time >= 50000) {
    particles = [];
    time = 0;
    c.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    var amount = Math.floor(Math.random() * 5);

    for (var i = 0; i < amount; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      init(x, y);
    }
  }
}, 2000);
