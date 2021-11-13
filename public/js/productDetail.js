
  /* Contador de cantidad de productos */
let counter = 1
let $count = document.getElementById('count');

  function add () {
    if(counter <= 10) {
        counter = counter + 1
        $count.innerHTML = `<p>${counter}</p>`
    }

  }

  function subtract () {
    if(counter > 0) {
        counter = counter - 1
        $count.innerHTML = `<p>${counter}</p>`
    }
  }

  //lupa para los  productos

  document.onmousemove = ver;
  function ver(e) {
    var x, y, x1, x2, y1, y2;
    fact = 800/400;
    opp = 100;
    
    if(e == null) e = window.event;
    x = e.clientX;
    y= e.clientY;

    x1 =- opp+(x)*fact;
    y1 =- opp+(y)*fact;
    x2 =+ opp+(x)*fact;
    y2 =+ opp+(y)*fact;
   
    document.images.imgGrande.style.display= "inline";
    document.images.imgGrande.style.left= (x)*(1-fact);
    document.images.imgGrande.style.top= (y)*(1-fact);
    document.images.imgGrande.style.clip="rect("+y1+"px,"+x2+"px,"+y2+"px,"+x1+"px)";
  }