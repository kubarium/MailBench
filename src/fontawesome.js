import Vue from 'vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {
    faAngleDown,
    faAngleRight,
    faPlus,
    faQuestion,
    faUserTie,
    faUser,
    faServer,
    faGlobe,
    faKey,
    faCogs,
    faComment,
    faUpload
} from '@fortawesome/free-solid-svg-icons';

[
    faAngleDown,
    faAngleRight,
    faPlus,
    faQuestion,
    faUserTie,
    faUser,
    faServer,
    faGlobe,
    faKey,
    faCogs,
    faComment,
    faUpload
].forEach(icon => library.add(icon));

Vue.component('font-awesome-icon', FontAwesomeIcon);