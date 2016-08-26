var Repart = {
	init: function() {
		'use strict';

		Repart.slide();
	},
	slide: function() {
		'use strict';

		$('.carousel').carousel({
			interval: 3500
		});
	}
}

$(function() {
	'use strict';

	Repart.init();
});