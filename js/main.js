document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel = document.querySelectorAll('.carousel'); /*Inicializa el carousel*/
M.Carousel.init(elementosCarousel,{
    duration: 150, /*tiempo de transición de las imágenes*/
    dist: -80, /*distancia de persperctiva, se superponen*/
    shift: 5,/*distamcia entre cada una*/
    padding: 5, /*cantidad del espacio entre el borde y el contenido del elemento*/
    numVisible: 5, /*las imagenes visibles*/
    indicators: true,/*Nos muestra los indicadores (los circulos de las imagenes)*/
    noWrap: false, /*comienza desde */
} );
});
