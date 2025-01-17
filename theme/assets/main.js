import './styles/main.css'
import Alpine from 'alpinejs'
import { collapse } from '@alpinejs/collapse';

window.Alpine = Alpine
Alpine.plugin(collapse)

import.meta.glob("../blocks/**/*.js", { eager: true });

window.Alpine.start()



