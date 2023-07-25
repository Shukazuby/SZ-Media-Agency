function initMap() {
    const loc = { lat: 9.076479, lng: 7.398574 };
  const map  = new google.maps.Map(document.querySelector ('.map') 
  , {
    zoom: 14,
    center: loc
  });

  const maker= new google.maps.Maker({postion: loc, map: map

  });
}

// sticky menu background

window. addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navheader').style.opacity = 0.6;
  } else {
    document.querySelector('#navheader').style.opacity = 1;  
  }
});

// smooth scrolling
$('#navheader, a, btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash =this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );
  }
}
);