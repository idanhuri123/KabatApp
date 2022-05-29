/* Hand Writing Scripts */

var hdwrite = {
  download: function () {
    let tz = document.getElementById("tz");
    let nameE = document.getElementById("nameE");
    let regiment = document.getElementById("regiment");
    let agre = document.getElementById("agre");
    let phone = document.getElementById("phone");
    const regex = new RegExp('([א-ת]||[A-Z]||[a-z]){2}');
    const regexTZ = new RegExp('([0-9]){7}');
    const regexTEL = new RegExp('^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$');

    if (regex.test(nameE.value)) {
      if (regex.test(regiment.value)) {
        if (regex.test(agre.value)) {
          if (regexTEL.test(phone.value)) {
            if (isValidIsraeliID(tz.value)) {
              console.log("in");
              html2canvas(document.querySelector("#hdwrite-body")).then(canvas => {

                canvas.id = "h2canvas";
                document.body.appendChild(canvas);
                let myImage = canvas.toDataURL("image/png");
                let img = document.getElementById('h2canvas');
                img.src = myImage;
                 let link = document.getElementById('link');
                 link.setAttribute('download', tz.value + ' ' + nameE.value + '.png');
                 link.setAttribute('href', myImage.replace("image/png", "image/octet-stream"));
                 link.click();

       
              });
            } else {
              console.log("ת.ז. לא תקין");
            }
          } else {
            console.log("פלאפון לא תקין");
          }
        } else {
          console.log("שם המאשר לא תקין");
        }
      } else {
        console.log("חטיבה לא נכון");
      }
    } else {
      console.log("שם לא תקין");
    }



  },
  line: function (start, end, strokeStyle = "black", lineWidth = 2) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  },
  getMousePos: function (cs, evt) {
    var rect = cs.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  },
  on_drawing: false,
  addEvent: function () {
    canvas.addEventListener("mousedown", function (evt) {
      this.on_drawing = true;
      pos_start = hdwrite.getMousePos(this, evt);
    });
    canvas.addEventListener("mouseup", function (evt) {
      this.on_drawing = false;
    });
    canvas.addEventListener("mousemove", function (evt) {
      if (this.on_drawing) {
        var pos = hdwrite.getMousePos(this, evt);
        hdwrite.line(pos_start, pos);
        pos_start = pos;
      }
    }); 
  },
  clear: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  },
};

function isValidIsraeliID(id) {
	var id = String(id).trim();
	if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

	// Pad string with zeros up to 9 digits
  	id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

  	return Array
            .from(id, Number)
  		    .reduce((counter, digit, i) => {
		        const step = digit * ((i % 2) + 1);
                        return counter + (step > 9 ? step - 9 : step);
    	            }) % 10 === 0;
}



