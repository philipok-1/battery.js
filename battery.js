
g.clear()
level=E.getBattery()
g.setFont("Vector",20);


if (level < 30) {
  message = "Sad times.. \nNEEDS A \n CHARGE :(";
  image="devil.png";
}

else if (level<50) {
  message = "Oh dear battery\n is under 50%!!"
  image="grumpy.png";
}

else if (level<80) {
  message = "Battery is \n sort of ok ";
  image="neutral.png";
         }


else {message="Battery good!";
     
      image="smiley.png";     
     }


g.drawString(message, 8, 15);
g.drawImage(require("Storage").read(image),20,78)
//E.showMessage(message, "Battery level is "+level)
              
              
//require("Storage").write("battery.info",{
  //"id":"battery",
  //"name":"Battery!",
  //"src":"battery.app.js",
  //"icon":"battery.png"
//});
