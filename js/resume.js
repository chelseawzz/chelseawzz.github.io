(function () {
  "use strict";
  var S = window.SITE;
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var L = S.links;
  var site = "chelseawzz.github.io";

  function item(title, date, sub, bullets) {
    return '<div class="item"><div class="row"><h3>' + esc(title) + "</h3>" + (date ? '<span class="date">' + esc(date) + "</span>" : "") + "</div>" +
      (sub ? '<p class="sub">' + esc(sub) + "</p>" : "") +
      (bullets && bullets.length ? "<ul>" + bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
  }
  var C = S.cv;
  var h = "";
  h += '<header class="head"><h1>' + esc(S.fullName) + '</h1><p class="role">' + esc(C.headline) + "</p>" +
    '<div class="contact">' +
    '<a href="mailto:' + esc(L.email) + '">' + esc(L.email) + "</a>" +
    '<a href="' + esc(L.linkedin) + '">linkedin.com/in/novitachelsea</a>' +
    '<a href="' + esc(L.github) + '">github.com/chelseawzz</a>' +
    '<a href="https://' + site + '">' + site + "</a></div></header>";

  h += '<section><h2>Summary</h2><p class="summary">' + esc(C.summary) + "</p></section>";

  h += "<section><h2>Work Experience</h2>" + C.work.map(function (w) {
    return item(w.title, w.date, w.org, w.bullets);
  }).join("") + "</section>";

  h += "<section><h2>Organizational Experience</h2>" + C.org.map(function (o) {
    return item(o.title, o.date, o.org, o.bullets);
  }).join("") + "</section>";

  h += "<section><h2>Projects</h2>" + C.projects.map(function (p) {
    return item(p.title, p.date, p.sub || "", p.bullets);
  }).join("") + "</section>";

  var E = C.education;
  h += "<section><h2>Education</h2>" +
    item(E.school, E.period, E.degree + " | GPA: " + E.gpa, ["Relevant coursework: " + E.coursework]) + "</section>";

  h += '<section><h2>Achievements</h2><ul class="plain">' + C.achievements.map(function (a) {
    return "<li>" + esc(a) + "</li>";
  }).join("") + "</ul></section>";

  h += "<section><h2>Skills</h2>" +
    '<div class="skillrow"><b>Technical</b><span>' + esc(C.skillsText.technical) + "</span></div>" +
    '<div class="skillrow"><b>Soft skills</b><span>' + esc(C.skillsText.soft) + "</span></div></section>";

  document.getElementById("resume").innerHTML = h;
})();
