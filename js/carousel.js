/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function(e) {
  const $e = $(e.relatedTarget);
  const idx = $e.index();
  const itemsPerSlide = 5;
  const totalItems = $('.carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    const it = itemsPerSlide - (totalItems - idx);
    for (let i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == 'left') {
        $('.carousel-item')
          .eq(i)
          .appendTo('.carousel-inner');
      } else {
        $('.carousel-item')
          .eq(0)
          .appendTo('.carousel-inner');
      }
    }
  }
});

// https://azmind.com/bootstrap-carousel-multiple-items/
