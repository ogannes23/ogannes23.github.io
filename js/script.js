	var myFullpage = new fullpage('#fullpage', {
	  sectionsColor: ['#2c3e50', '#b24a50', '#665464', '#81a256', '#75b4aa'],
	  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
	  menu: '#menu',
	  scrollOverflow: true,
	  continuousVertical: false
	  // afterLoad: function(anchorLink, index){
	  //       console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
	  //   },
	  //   onLeave: function(index, nextIndex, direction){
	  //       console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

	  //   },
	});

	$(function(){		
		$('.header_back').slick({
			infinite: true,
			fade: true,
			arrows: true,
			cssEase: 'linear',
			slidesToShow: 1,
			dots: true,
			slidesToScroll: 1, 
			autoplay: true,
			autoplaySpeed: 3000
		});
	});	

	var containerEl = document.querySelector('.portfolioBody');var mixer = mixitup(containerEl);
	
	lightbox.option({
	      'resizeDuration': 200,
	      'wrapAround': true
	    });

	$(function(){
		$('.hamburg .open').on('click', function(){
			$('.hamburg .open').toggleClass('dn');
			$('.hamburg .close').toggleClass('dn');
			$('.collapse_block').toggleClass('dn');

		});

		$('.hamburg .close').on('click', function(){
			$('.hamburg .open').toggleClass('dn');
			$('.hamburg .close').toggleClass('dn');
			$('.collapse_block').toggleClass('dn');
		});

	});