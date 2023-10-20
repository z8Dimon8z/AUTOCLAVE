// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение функционала табов не забыть установить node moduls npm install --save-dev mixitup

import mixitup from 'mixitup';

var mixer = mixitup('.main-tab__wraper', {
    load: {
        filter: '.category-b'
    }
});

// Свой код пишем здесь

