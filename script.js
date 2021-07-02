// buttonSet1
$( function() {

    $( '#buttonHeader' ).click( function() {
      $( 'h1' ).text( "骨格デブ" );
    });

    $( '#buttonArticle' ).click( function() {
      $( 'header' ).css({
        'color': '##808080',
        'background-color': '#a9a9a9'
      });
      $( 'nav' ).css({
        'color': 'white',
        'background-color': '#dcdcdc'
      });
      $( 'section' ).css({
        'color': 'white',
        'background-color': '#ffefd5'
      });
      $( 'article' ).css({
        'color': '#000',
        'background-color': '#ffe4e1'
      });
      $( 'aside' ).css({
        'color': 'white',
        'background-color': '#add8e6'
      });
      $( 'footer' ).css({
        'color': 'white',
        'background-color': '#eee8aa'
      });
    });

    $( '#buttonFooter' ).click( function() {
      $( 'footer' ).html('<p><a href="https://www.youtube.com/watch?v=jNw1gIX4dmA">ローランド</a></p>' );
      $( 'footer a' ).css( 'color','#fcf876' );
    });

  });

  // buttonSet2
  $( function() {

    $( '#buttonNormal' ).click( function() {
      $('main').css( 'flex-direction','row' );
    });

    $( '#buttonReverse' ).click( function() {
      $('main').css( 'flex-direction','row-reverse' );
    });

    $( '#buttonVertical' ).click( function() {
      $('main').css( 'flex-direction','column' );
    });



  });
