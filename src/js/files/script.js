// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение функционала табов не забыть установить node moduls npm install --save-dev mixitup
// табы главного экрана
import mixitup from 'mixitup';

var mixer = mixitup('.main-tab__wraper', {
    load: {
        filter: '.category-b'
    }
});


// библиотка fansybox предварительно установить через nodemodules
// документация https://fancyapps.com/fancybox/getting-started/

import {
  Fancybox
} from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Свой код пишем здесь

// отправка почты

     //E-mail Ajax Send
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./files/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
