function winter_sale(id) {
  if (!document.getElementById(id)) {
    return;
  }
  (function () {
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    window.requestAnimationFrame = requestAnimationFrame;
  })();

  var flakes = [],
    canvas_sale = document.getElementById(id),
    ctx = canvas_sale.getContext("2d"),
    flakeCount = 200,
    mX = -100,
    mY = -100;

  canvas_sale.width = window.innerWidth;
  canvas_sale.height = window.innerHeight;

  function snow() {
    ctx.clearRect(0, 0, canvas_sale.width, canvas_sale.height);

    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
        x = mX,
        y = mY,
        minDist = 150,
        x2 = flake.x,
        y2 = flake.y;

      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
        dx = x2 - x,
        dy = y2 - y;

      if (dist < minDist) {
        var force = minDist / (dist * dist),
          xcomp = (x - x2) / dist,
          ycomp = (y - y2) / dist,
          deltaV = force / 2;

        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= 0.98;
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }
        flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
      }

      ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas_sale.height || flake.y <= 0) {
        reset(flake);
      }

      if (flake.x >= canvas_sale.width || flake.x <= 0) {
        reset(flake);
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(snow);
  }

  function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas_sale.width);
    flake.y = 0;
    flake.size = Math.random() * 2 + 1;
    flake.speed = Math.random() * 1 + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = Math.random() * 0.5 + 0.3;
  }

  function init() {
    for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas_sale.width),
        y = Math.floor(Math.random() * canvas_sale.height),
        size = Math.random() * 1 + 1,
        speed = Math.random() * 1 + 0.5,
        opacity = Math.random() * 0.5 + 0.3;

      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: Math.random() / 30,
        step: 0,
        angle: 180,
        opacity: opacity,
      });
    }

    snow();
  }

  canvas_sale.addEventListener("mousemove", function (e) {
    (mX = e.clientX), (mY = e.clientY);
  });

  init();
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth < 744 && window.innerWidth < window.innerHeight) {
    winter_sale("canvas-w");
  } else {
    winter_sale("canvas-winter");
  }
});
