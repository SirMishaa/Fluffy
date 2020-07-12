/*
 * Fluffy - https://github.com/SirMishaa/Fluffy
 * Author - SirMishaa
 * License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarData: [
      {
        subtitle: "Introduction",
        childs: [
          {
            logo: "fas fa-cat",
            linkText: "Présentation de Fluffy",
            redirectTo: "",
            active: true
          },
          {
            logo: "fas fa-robot",
            linkText: "Not a Bot (NaB)",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-book",
            linkText: "Fonctionalitées",
            redirectTo: "",
            active: false
          },
          {
            logo: "fab fa-github",
            linkText: "Contribuer",
            redirectTo: "",
            active: false
          }
        ]
      },
      {
        subtitle: "Statistiques",
        childs: [
          {
            logo: "fas fa-chart-pie",
            linkText: "Vue d'ensemble",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-user-friends",
            linkText: "Stats sur les utilisateurs",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-chart-area",
            linkText: "Stats sur les messages",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-chart-bar",
            linkText: "Stats sur les réactions",
            redirectTo: "",
            active: false
          }
        ]
      },
      {
        subtitle: "Configurations",
        childs: [
          {
            logo: "fas fa-cog",
            linkText: "Gérer le système",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-terminal",
            linkText: "Gérer les commandes",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-ticket-alt",
            linkText: "Gérer les tickets",
            redirectTo: "",
            active: false
          },
          {
            logo: "fas fa-align-justify",
            linkText: "Gérer les activités",
            redirectTo: "",
            active: false
          }
        ]
      },
      {
        subtitle: "Intégrations",
        childs: [
          {
            logo: "fab fa-twitch",
            linkText: "Intégration Twitch",
            redirectTo: "",
            active: false
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
