$(document).ready(function(){
  $('#preguntas-respuestas .content-pre-respt .pregunta > .lista-dudas .respta').eq(0).css({"display":"block"});
  $('#preguntas-respuestas .content-pre-respt .pregunta > .lista-dudas .titulo h4').on('click',function(e){
    e.preventDefault();
    let $this = $('#preguntas-respuestas .content-pre-respt .pregunta > .lista-dudas .titulo h4').index($(this));
    console.log($this);
    $('#preguntas-respuestas .content-pre-respt .pregunta > .lista-dudas .respta').slideUp();
    $('.menu-productos a').removeClass('activo')
    $(this).addClass('activo')
    $('#preguntas-respuestas .content-pre-respt .pregunta > .lista-dudas .respta').eq($this).stop(true,false).slideDown();
  });
});