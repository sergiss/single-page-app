export default {
  build: () => {
    document.title = "Not Found";

    return `
      <div class="not_found">
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>The resource requested could not be found on this server!</p>
      <canvas></canvas>
    </div>
    `;
  },
  script: () => {
     
    var Star = function (x, y) {
        this.x = x;
        this.y = y;
        this.v = 0;
        this.speed = 15;
    
        this.render = function (ctx, x, y, radius) {
          let dx = this.x - x;
          let dy = this.y - y;
          let len = dx * dx + dy * dy;
          let nx, ny;
          if (len != 0) {        
            len = Math.sqrt(len);   
            if(len > radius) {
              return false;
            }
            nx = dx / len;
            ny = dy / len;        
          } else {
            nx = 1;
            ny = 0;
          }
          let tmpX = this.x;
          let tmpY = this.y;
    
          let w = (len / radius);
          this.x += nx * this.speed * w;
          this.y += ny * this.speed * w;
              
          ctx.strokeStyle = "#FFF";
          ctx.beginPath();      
          ctx.moveTo(tmpX, tmpY);     
          ctx.lineTo(this.x, this.y);
          ctx.lineWidth = w * 2.5;
          ctx.stroke();
          return true;
        };
      };
    
      var el = document.querySelector(".not_found");
    
      var canvas = el.querySelector("canvas");
      canvas.width  = 640;
      canvas.height = 480;
    
      let ctx = canvas.getContext("2d");
      el.appendChild(canvas);
      let stars = [];
      let loop = function () {
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        while (stars.length < 100) {
          stars.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height));
        }
        for (let i = 0; i < stars.length; ++i) {
          if (!stars[i].render(ctx, canvas.width * 0.5, canvas.height * 0.5, 380)) {
            stars.splice(i--, 1);
          } 
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
  }
};
