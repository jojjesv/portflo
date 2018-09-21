import projects from "./projects.js";

var app = new Vue({
  el: '#root',
  data: {
    activeProjectIndex: 0,
    projects
  },
  methods: {
    nextProject: () => {
      app.activeProjectIndex = (app.activeProjectIndex + 1) % projects.length;
    },

    prevProject: () => {
      app.activeProjectIndex = (app.activeProjectIndex - 1) % projects.length;
    }
  }
});