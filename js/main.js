(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- links and static bits ---------- */
  ["resumeNav", "resumeHero"].forEach(function (id) { $("#" + id).href = S.links.resume; });
  $("#linkedinBtn").href = S.links.linkedin;
  $("#githubBtn").href = S.links.github;
  $("#instagramBtn").href = S.links.instagram;
  $("#emailBtn").href = "mailto:" + S.links.email;
  $("#canvaBtn").href = S.links.canva;
  $("#year").textContent = new Date().getFullYear();

  $("#stats").innerHTML = [
    [S.cv.education.gpa.split("/")[0], "GPA"],
    [S.projects.length, "Projects"],
    [S.infographics.length, "Infographics"],
    [S.cv.achievements.length, "Awards"]
  ].map(function (s) { return "<div><dt>" + s[1] + "</dt><dd>" + s[0] + "</dd></div>"; }).join("");

  $("#skills").innerHTML = S.skills.map(function (g) {
    return '<div class="skill"><h4>' + esc(g.group) + '</h4><div class="tags">' +
      g.items.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div></div>";
  }).join("");

  /* ---------- image viewer ---------- */
  var viewer = $("#viewer");
  var vs = { list: [], i: 0, opener: null };
  function vRender() {
    var it = vs.list[vs.i];
    var img = $("#vImg"); img.src = it.src; img.alt = it.caption || "";
    $("#vCap").textContent = it.caption || "";
    var many = vs.list.length > 1;
    $("#vCount").textContent = many ? vs.i + 1 + " / " + vs.list.length : "";
    $("#vPrev").style.visibility = many ? "visible" : "hidden";
    $("#vNext").style.visibility = many ? "visible" : "hidden";
  }
  function openViewer(list, i, opener) {
    vs.list = list; vs.i = i; vs.opener = opener || document.activeElement;
    vRender();
    viewer.classList.add("open"); viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    $(".viewer-x").focus();
  }
  function closeViewer() {
    viewer.classList.remove("open"); viewer.setAttribute("aria-hidden", "true");
    if (!$("#case").classList.contains("open")) document.body.classList.remove("lock");
    if (vs.opener && vs.opener.focus) vs.opener.focus();
  }
  function vStep(d) { var n = vs.list.length; vs.i = (vs.i + d + n) % n; vRender(); }
  viewer.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeViewer(); });
  $("#vPrev").onclick = function () { vStep(-1); };
  $("#vNext").onclick = function () { vStep(1); };

  /* ---------- projects ---------- */
  var typeLabel = { "Dashboard": "Dashboards", "Web System": "Web Systems", "Data Analysis": "Data Analysis" };
  var pgrid = $("#projectGrid");

  function projectCard(p) {
    var wide = p.featured;
    var pos = p.coverPos ? ' style="object-position:' + esc(p.coverPos) + '"' : "";
    var tags = (p.tools || []).slice(0, 4).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
    return '<button class="pcard' + (wide ? " wide" : "") + '" data-id="' + esc(p.id) + '" type="button">' +
      '<div class="media">' + (p.cover ? '<img src="' + esc(p.cover) + '" alt=""' + pos + ' loading="lazy" />' : '<div class="ph-cover"><span>' + esc(p.coverText || p.title) + "</span></div>") + "</div>" +
      '<div class="body">' +
      (wide ? '<span class="badge-feat">Featured case study</span>' : "") +
      '<span class="kind">' + esc(p.type) + "</span>" +
      "<h3>" + esc(p.title) + "</h3>" +
      '<p class="sum">' + esc(p.summary) + "</p>" +
      (tags ? '<div class="tags">' + tags + "</div>" : "") +
      '<span class="more">View case study &rarr;</span></div></button>';
  }
  function showProjects(type) {
    var list = S.projects.filter(function (p) { return type === "All" || p.type === type; });
    pgrid.innerHTML = list.map(projectCard).join("");
  }
  pgrid.addEventListener("click", function (e) {
    var b = e.target.closest(".pcard");
    if (b) openCaseById(b.getAttribute("data-id"), b);
  });
  (function filters() {
    var types = ["All"];
    S.projects.forEach(function (p) { if (types.indexOf(p.type) < 0) types.push(p.type); });
    var box = $("#filters");
    box.innerHTML = types.map(function (t, i) {
      return '<button class="chip' + (i === 0 ? " on" : "") + '" data-t="' + esc(t) + '" aria-pressed="' + (i === 0) + '">' +
        esc(t === "All" ? "All" : typeLabel[t] || t) + "</button>";
    }).join("");
    box.onclick = function (e) {
      var c = e.target.closest(".chip"); if (!c) return;
      box.querySelectorAll(".chip").forEach(function (x) {
        x.classList.toggle("on", x === c); x.setAttribute("aria-pressed", x === c ? "true" : "false");
      });
      showProjects(c.getAttribute("data-t"));
    };
    showProjects("All");
  })();

  /* ---------- case study panel ---------- */
  var caseEl = $("#case"), csBody = $("#csBody");
  var caseState = { id: null, opener: null };

  function metaItem(label, val) { return val ? "<div><dt>" + label + "</dt><dd>" + esc(val) + "</dd></div>" : ""; }
  function sectionHTML(s) {
    var h = "<section class=\"cs-sec\"><h2>" + esc(s.h) + "</h2>";
    (s.p || []).forEach(function (t) { h += "<p>" + esc(t) + "</p>"; });
    if (s.list) h += "<ul>" + s.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    if (s.items) h += '<div class="feat">' + s.items.map(function (x) {
      return "<div><h4>" + esc(x.t) + "</h4><p>" + esc(x.d) + "</p></div>";
    }).join("") + "</div>";
    return h + "</section>";
  }
  function renderCase(p) {
    var h = '<span class="kind">' + esc(p.type) + "</span><h1 id=\"csTitle\">" + esc(p.title) + "</h1>" +
      '<p class="lede">' + esc(p.summary) + "</p>";
    var meta = metaItem("Role", p.role) + metaItem("Organization", p.org) + metaItem("Period", p.period) +
      metaItem("Tools", (p.tools || []).join(", "));
    if (meta) h += '<dl class="meta-grid">' + meta + "</dl>";
    if (p.links && p.links.length) {
      h += '<div class="case-actions">' + p.links.map(function (l, i) {
        return '<a class="btn ' + (i === 0 ? "btn-dark" : "btn-line") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
      }).join("") + "</div>";
    }
    (p.sections || []).forEach(function (s) { h += sectionHTML(s); });
    if (p.gallery && p.gallery.length) {
      h += '<section class="cs-sec"><h2>' + (p.gallery.length > 1 ? "Screens and visuals" : "Preview") + '</h2><div class="gal' +
        (p.gallery.length === 1 ? " single" : "") + '">' +
        p.gallery.map(function (g, i) {
          return '<button type="button" data-g="' + i + '"><img src="' + esc(g.src) + '" alt="' + esc(g.caption || p.title) + '" loading="lazy" /><span>' + esc(g.caption || "") + "</span></button>";
        }).join("") + "</div></section>";
    }
    csBody.innerHTML = h;
  }
  csBody.addEventListener("click", function (e) {
    var b = e.target.closest("[data-g]");
    if (!b) return;
    var p = byId(caseState.id);
    openViewer(p.gallery, +b.getAttribute("data-g"), b);
  });
  function byId(id) { for (var i = 0; i < S.projects.length; i++) if (S.projects[i].id === id) return S.projects[i]; return null; }

  function showCase(id) {
    var p = byId(id); if (!p) return false;
    caseState.id = id;
    renderCase(p);
    document.title = p.title + " | Chelee";
    caseEl.classList.add("open"); caseEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    caseEl.scrollTop = 0;
    $("#csBack").focus();
    return true;
  }
  function hideCase() {
    if (!caseEl.classList.contains("open")) return;
    caseEl.classList.remove("open"); caseEl.setAttribute("aria-hidden", "true");
    if (!viewer.classList.contains("open")) document.body.classList.remove("lock");
    document.title = "Chelee | Data Science Undergraduate";
    if (caseState.opener && caseState.opener.focus) caseState.opener.focus();
    caseState.id = null;
  }
  function openCaseById(id, opener) { caseState.opener = opener || null; location.hash = "#work/" + id; }
  function stepCase(d) {
    var idx = 0;
    S.projects.forEach(function (p, i) { if (p.id === caseState.id) idx = i; });
    var n = S.projects.length;
    location.hash = "#work/" + S.projects[(idx + d + n) % n].id;
  }
  $("#csBack").onclick = function () { location.hash = "#work"; };
  $("#csPrev").onclick = function () { stepCase(-1); };
  $("#csNext").onclick = function () { stepCase(1); };

  function route() {
    var m = /^#work\/(.+)$/.exec(location.hash);
    if (m) { if (!showCase(decodeURIComponent(m[1]))) location.hash = "#work"; }
    else hideCase();
  }
  window.addEventListener("hashchange", route);

  /* ---------- infographics ---------- */
  (function () {
    var list = S.infographics.map(function (g) { return { src: g.img, caption: g.title + "  |  " + g.tag }; });
    var grid = $("#infoGrid");
    grid.innerHTML = S.infographics.map(function (g, i) {
      return '<button class="icard" type="button" data-i="' + i + '"><div class="media"><img src="' + esc(g.img) + '" alt="' + esc(g.title) + '" loading="lazy" /></div>' +
        '<div class="body"><span class="kind">' + esc(g.tag) + "</span><h3>" + esc(g.title) + "</h3></div></button>";
    }).join("");
    grid.onclick = function (e) { var b = e.target.closest(".icard"); if (b) openViewer(list, +b.getAttribute("data-i"), b); };
  })();

  /* ---------- achievements ---------- */
  function certGrid(sel, items) {
    var withImg = items.filter(function (a) { return a.img; });
    var viewList = withImg.map(function (a) { return { src: a.img, caption: a.title + "  |  " + a.org + (a.date ? "  |  " + a.date : "") }; });
    var grid = $(sel);
    grid.innerHTML = items.map(function (a, i) {
      var media = a.img ? '<img src="' + esc(a.img) + '" alt="Certificate: ' + esc(a.title) + '" loading="lazy" />' : '<div class="ph">' + esc(a.badge) + "</div>";
      var links = (a.links || []).map(function (l) { return '<a class="link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " &rarr;</a>"; }).join("");
      var tag = a.img ? "button" : "div";
      return "<" + tag + ' class="ccard"' + (a.img ? ' type="button" data-i="' + withImg.indexOf(a) + '"' : "") + ">" +
        '<div class="media">' + media + "</div>" +
        '<div class="body"><span class="kind">' + esc(a.badge) + "</span><h3>" + esc(a.title) + "</h3>" +
        '<p class="meta">' + esc([a.org, a.date].filter(Boolean).join("  |  ")) + "</p>" +
        '<p class="desc">' + esc(a.desc) + "</p>" + links + "</div></" + tag + ">";
    }).join("");
    grid.onclick = function (e) {
      var b = e.target.closest("button.ccard");
      if (b) openViewer(viewList, +b.getAttribute("data-i"), b);
    };
  }
  certGrid("#compGrid", S.competitions);
  certGrid("#commGrid", S.community);

  /* ---------- experience ---------- */
  (function () {
    var photoSets = [];
    function xcard(x, kind) {
      var h = '<article class="xcard"><div class="top"><div><h3>' + esc(x.title) + '</h3><p class="org">' + esc(x.org) + "</p></div>" +
        (x.date ? '<span class="date">' + esc(x.date) + "</span>" : "") + "</div><ul>" +
        x.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
      var acts = "";
      if (x.project) acts += '<a class="btn btn-dark btn-sm" href="#work/' + esc(x.project) + '">Read the case study</a> ';
      if (x.photos && x.photos.length) {
        photoSets.push(x.photos);
        acts += '<button class="btn btn-line btn-sm" type="button" data-set="' + (photoSets.length - 1) + '">View photo</button>';
      }
      return h + acts + "</article>";
    }
    function group(title) { return '<h3 class="exp-group">' + esc(title) + "</h3>"; }

    var html = group("Work experience") + S.cv.work.map(function (x) { return xcard(x); }).join("") +
      group("Organizational experience") + S.cv.org.map(function (x) { return xcard(x); }).join("");

    var ev = S.events;
    html += group(ev.name) + '<article class="xcard"><p class="org">' + esc(ev.note) + '</p><div class="roles">' +
      ev.roles.map(function (r) {
        var has = r.photos && r.photos.length, idx = -1;
        if (has) { photoSets.push(r.photos); idx = photoSets.length - 1; }
        var thumb = has ? '<span class="thumb"><img src="' + esc(r.photos[0].src) + '" alt="" loading="lazy" /></span>' : "";
        var tag = has ? "button" : "div";
        return "<" + tag + ' class="role' + (has ? " has" : " nophoto") + '"' + (has ? ' type="button" data-set="' + idx + '"' : "") + ">" + thumb +
          '<span><span class="rt">' + esc(r.title) + "</span>" +
          (has ? '<span class="rhint" style="display:block">View photo' + (r.photos.length > 1 ? "s" : "") + "</span>" : "") +
          "</span></" + tag + ">";
      }).join("") + "</div></article>";

    var box = $("#exp");
    box.innerHTML = html;
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-set]"); if (!b) return;
      openViewer(photoSets[+b.getAttribute("data-set")], 0, b);
    });
  })();

  /* ---------- nav, keyboard, reveal ---------- */
  var nav = $("#nav"), menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.onclick = function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  document.addEventListener("keydown", function (e) {
    if (viewer.classList.contains("open")) {
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowLeft") vStep(-1);
      else if (e.key === "ArrowRight") vStep(1);
    } else if (caseEl.classList.contains("open")) {
      if (e.key === "Escape") location.hash = "#work";
    }
  });

  if ("IntersectionObserver" in window) {
    var links = {};
    navLinks.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
    }, { threshold: 0.06 });
    document.querySelectorAll(".reveal").forEach(function (el) { rev.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  route();
})();
