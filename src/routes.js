import Home from './pages/Home.vue';
import Projets from './pages/Projets.vue';
import Conception from './pages/Conception.vue';
import Graphisme from './pages/Graphisme.vue';
import Contact from './pages/Contact.vue';
import Conditions from './pages/ConditionsGeneralesDeVente.vue';
import Mentions from './pages/MentionsLegales.vue';
import Politique from './pages/PolitiqueConfidentialite.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/accueil', component: Home },
    { path: '/projets', component: Projets },
    { path: '/conception', component: Conception },
    { path: '/graphisme', component: Graphisme },
    { path: '/contact', component: Contact },
    { path: '/conditions', component: Conditions },
    { path: '/mentions', component: Mentions },
    { path: '/politique', component: Politique }
];

export default routes;