var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4acf00dc-3094-49f7-b806-22b8cd334884"],"propsByKey":{"4acf00dc-3094-49f7-b806-22b8cd334884":{"name":"jorge","sourceUrl":"assets/v3/animations/-2r2Oqu7-kgLoRA58Nkw_ZI7scgIKQsbNlVpQzR7Or4/4acf00dc-3094-49f7-b806-22b8cd334884.png","frameSize":{"x":32,"y":32},"frameCount":1,"looping":true,"frameDelay":4,"version":"mZXBIeIKmSNHxtCLEBbkC9rRTwD75lgA","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":32},"rootRelativePath":"assets/v3/animations/-2r2Oqu7-kgLoRA58Nkw_ZI7scgIKQsbNlVpQzR7Or4/4acf00dc-3094-49f7-b806-22b8cd334884.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var pedrinho = createSprite(22,20,15,15);
     pedrinho.shapeColor = "blue";
 
 var parede1 = createSprite(70,15,20,70);
     parede1.shapeColor = "red";

 var parede2 = createSprite(25,112,70,20);
     parede2.shapeColor = "red";

 var parede3 = createSprite(55,112,70,20);
     parede3.shapeColor = "red";

 var parede4 = createSprite(105,112,70,20);
     parede4.shapeColor = "red";

 var parede5 = createSprite(145,112,20,70);
     parede5.shapeColor = "red";

 var parede6 = createSprite(240,112,20,70);
     parede6.shapeColor = "red";

 var parede7 = createSprite(240,174,20,70);
     parede7.shapeColor = "red";

 var parede8 = createSprite(145,174,20,70);
     parede8.shapeColor = "red";

 var parede9 = createSprite(266,204,70,20);
     parede9.shapeColor = "red";

 var parede10 = createSprite(291,248,20,70);
     parede10.shapeColor = "red";

 var parede11 = createSprite(266,284,70,20);
     parede11.shapeColor = "red";

 var parede12 = createSprite(220,284,160,20);
     parede12.shapeColor = "red";

 var parede13 = createSprite(145,249,20,90);
     parede13.shapeColor = "red";

 var paredebugada = createSprite(240,37,20,80);
     paredebugada.shapeColor = "gray";

 var cuboamarelo1 = createSprite(261,248,15,15);
     cuboamarelo1.shapeColor = "yellow";

 var cuboamarelo2 = createSprite(68,150,15,15);
     cuboamarelo2.shapeColor = "yellow";
     
 var jorge = createSprite(21,248,15,15);
     jorge.shapeColor = "green";

 var amigodojorge = createSprite(171,248,15,15);
     amigodojorge.shapeColor = "green";
 
 var amigodojorge2 = createSprite(361,248,15,15);
     amigodojorge2.shapeColor = "green";
 
 
 jorge.velocityX = 6;
 
 amigodojorge.velocityY = 12;
 
 amigodojorge2.velocityX = 4;

 var pontos = 0;

function draw() {
  background("white");
  drawSprites();
  

  if (keyDown(RIGHT_ARROW)){
    pedrinho.velocityX = 2;
    pedrinho.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)){
    pedrinho.velocityX = -2;
    pedrinho.velocityY = 0;
  }
  if (keyDown(UP_ARROW)){
    pedrinho.velocityX = 0;
    pedrinho.velocityY = -2;
  }
  if (keyDown(DOWN_ARROW)){
    pedrinho.velocityX = 0;
    pedrinho.velocityY = 2;
  }
  
   createEdgeSprites();
   pedrinho.bounceOff(rightEdge);
   pedrinho.bounceOff(leftEdge);
   pedrinho.bounceOff(bottomEdge);
   pedrinho.bounceOff(topEdge);
   pedrinho.bounceOff(parede1);
   pedrinho.bounceOff(parede2);
   pedrinho.bounceOff(parede3);
   pedrinho.bounceOff(parede4);
   pedrinho.bounceOff(parede5);
   pedrinho.bounceOff(parede6);
   pedrinho.bounceOff(parede7);
   pedrinho.bounceOff(parede8);
   pedrinho.bounceOff(parede9);
   pedrinho.bounceOff(parede10);
   pedrinho.bounceOff(parede11);
   pedrinho.bounceOff(parede12);
   pedrinho.bounceOff(parede13);

   jorge.bounceOff(rightEdge);
   jorge.bounceOff(leftEdge);
   jorge.bounceOff(topEdge);
   jorge.bounceOff(parede1);
   jorge.bounceOff(parede2);
   jorge.bounceOff(parede3);
   jorge.bounceOff(parede4);
   jorge.bounceOff(parede5);
   jorge.bounceOff(parede6);
   jorge.bounceOff(parede7);
   jorge.bounceOff(parede8);
   jorge.bounceOff(parede10);
   jorge.bounceOff(parede11);
   jorge.bounceOff(parede12);
   jorge.bounceOff(parede13);
  
   amigodojorge.bounceOff(rightEdge);
   amigodojorge.bounceOff(leftEdge);
   amigodojorge.bounceOff(topEdge);
   amigodojorge.bounceOff(parede1);
   amigodojorge.bounceOff(parede2);
   amigodojorge.bounceOff(parede3);
   amigodojorge.bounceOff(parede4);
   amigodojorge.bounceOff(parede5);
   amigodojorge.bounceOff(parede6);
   amigodojorge.bounceOff(parede7);
   amigodojorge.bounceOff(parede8);
   amigodojorge.bounceOff(parede10);
   amigodojorge.bounceOff(parede11);
   amigodojorge.bounceOff(parede12);
   amigodojorge.bounceOff(parede13);
  
  
   amigodojorge2.bounceOff(rightEdge);
   amigodojorge2.bounceOff(leftEdge);
   amigodojorge2.bounceOff(topEdge);
   amigodojorge2.bounceOff(parede1);
   amigodojorge2.bounceOff(parede2);
   amigodojorge2.bounceOff(parede3);
   amigodojorge2.bounceOff(parede4);
   amigodojorge2.bounceOff(parede5);
   amigodojorge2.bounceOff(parede6);
   amigodojorge2.bounceOff(parede7);
   amigodojorge2.bounceOff(parede8);
   amigodojorge2.bounceOff(parede10);
   amigodojorge2.bounceOff(parede11);
   amigodojorge2.bounceOff(parede12);
   amigodojorge2.bounceOff(parede13);
  
  
  
  if (pedrinho.isTouching(cuboamarelo1)){
    cuboamarelo1.destroy();
    pontos = pontos +1;
  }

  if (pedrinho.isTouching(cuboamarelo2)){
    cuboamarelo2.destroy();
    pontos = pontos +1;
  }
  
  if (pontos == 2){
    
    pedrinho.setVelocity(0,0);
    textSize(34);
    text("fim",200,200);
  
    parede1.destroy();
    parede2.destroy();
    parede3.destroy();
    parede4.destroy();
    parede5.destroy();
    parede6.destroy();
    parede7.destroy();
    parede8.destroy();
    parede9.destroy();
    parede10.destroy();
    parede11.destroy();
    parede12.destroy();
    parede13.destroy();
    paredebugada.destroy();
    pedrinho.destroy();
    jorge.destroy();
    cuboamarelo1.destroy();
    cuboamarelo2.destroy();
    amigodojorge.destroy();
    amigodojorge2.destroy();
  }
  
 if (pedrinho.isTouching(amigodojorge)){
   
   pedrinho.setVelocity(0,0);
   jorge.setVelocity(0,0);
   
   pedrinho.setVelocity(0,0);
   jorge.setVelocity(0,0);

   parede1.destroy();
   parede2.destroy();
   parede3.destroy();
   parede4.destroy();
   parede5.destroy();
   parede6.destroy();
   parede7.destroy();
   parede8.destroy();
   parede9.destroy();
   parede10.destroy();
   parede11.destroy();
   parede12.destroy();
   parede13.destroy();
   paredebugada.destroy();
   cuboamarelo1.destroy();
   cuboamarelo2.destroy();
   pedrinho.destroy();
   jorge.destroy();
   amigodojorge.destroy();
   amigodojorge2.destroy();
 }
 
 
 if (pedrinho.isTouching(amigodojorge2)){
   
   pedrinho.setVelocity(0,0);
   jorge.setVelocity(0,0);
   
   pedrinho.setVelocity(0,0);
   jorge.setVelocity(0,0);

   parede1.destroy();
   parede2.destroy();
   parede3.destroy();
   parede4.destroy();
   parede5.destroy();
   parede6.destroy();
   parede7.destroy();
   parede8.destroy();
   parede9.destroy();
   parede10.destroy();
   parede11.destroy();
   parede12.destroy();
   parede13.destroy();
   paredebugada.destroy();
   cuboamarelo1.destroy();
   cuboamarelo2.destroy();
   pedrinho.destroy();
   jorge.destroy();
   amigodojorge.destroy();
   amigodojorge2.destroy();
 }
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
