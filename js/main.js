(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- static links ---------- */
  ["resumeNav", "resumeHero"].forEach(function (id) { $("#" + id).href = S.links.resume; });
  ["githubHero", "githubBtn"].forEach(function (id) { $("#" + id).href = S.links.github; });
  $("#linkedinBtn").href = S.links.linkedin;
  $("#instagramBtn").href = S.links.instagram;
  $("#emailBtn").href = "mailto:" + S.links.email;
  $("#year").textContent = new Date().getFullYear();

  /* ---------- typing effect ---------- */
  (function typing() {
    var el = $("#typed");
    var roles = S.roles;
    if (reduceMotion) { el.textContent = roles[0]; return; }
    var r = 0, c = 0, del = false;
    function tick() {
      var word = roles[r];
      el.textContent = word.slice(0, c);
      var wait = del ? 35 : 80;
      if (!del && c === word.length) { del = true; wait = 1400; }
      else if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
      else { c += del ? -1 : 1; }
      setTimeout(tick, wait);
    }
    tick();
  })();

  /* ---------- cards ---------- */
  function cardHTML(item, idx) {
    var media = item.img
      ? '<img src="' + esc(item.img) + '" alt="' + esc(item.title) + '" loading="lazy" />'
      : '<div class="ph"><span>' + esc(item.badge || "") + "</span></div>";
    var sub = item.meta ? '<p class="card-sub">' + esc(item.meta) + "</p>" : "";
    return (
      '<button class="card" data-i="' + idx + '" type="button">' +
      '<div class="card-media">' + media + "</div>" +
      '<div class="card-body"><span class="badge">' + esc(item.badge || "") + "</span>" +
      "<h3>" + esc(item.title) + "</h3>" + sub + "</div></button>"
    );
  }

  function mountGrid(sel, list) {
    var grid = $(sel);
    grid.innerHTML = list.map(cardHTML).join("");
    grid.onclick = function (e) {
      var b = e.target.closest(".card");
      if (b) openModal(list, +b.getAttribute("data-i"), b);
    };
  }

  function metaOf(a) { return [a.org, a.date].filter(Boolean).join("  |  "); }

  var projects = S.projects.map(function (p) {
    return { title: p.title, badge: p.type, meta: "", desc: p.desc, tools: p.tools, links: p.links, img: p.img };
  });
  var infos = S.infographics.map(function (g) {
    return { title: g.title, badge: g.tag, meta: "", desc: "", tools: [], links: [], img: g.img };
  });
  function achieve(a) {
    return { title: a.title, badge: a.badge, meta: metaOf(a), desc: a.desc, tools: [], links: a.links || [], img: a.img };
  }
  var comps = S.competitions.map(achieve);
  var comms = S.community.map(achieve);

  /* projects with filter */
  (function () {
    var types = ["All"];
    projects.forEach(function (p) { if (types.indexOf(p.badge) < 0) types.push(p.badge); });
    var box = $("#projectFilters");
    box.innerHTML = types.map(function (t, i) {
      return '<button class="chip' + (i === 0 ? " on" : "") + '" role="tab" data-t="' + esc(t) + '">' +
        esc(t === "All" ? "All" : t + "s") + "</button>";
    }).join("");
    function show(t) {
      var list = t === "All" ? projects : projects.filter(function (p) { return p.badge === t; });
      mountGrid("#projectGrid", list);
    }
    box.onclick = function (e) {
      var c = e.target.closest(".chip");
      if (!c) return;
      box.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("on", x === c); });
      show(c.getAttribute("data-t"));
    };
    show("All");
  })();

  mountGrid("#infoGrid", infos);
  mountGrid("#compGrid", comps);
  mountGrid("#commGrid", comms);

  /* ---------- experience timeline ---------- */
  (function () {
    var t = $("#timeline");
    var w = S.work;
    var html =
      '<article class="tl-item"><span class="tl-dot"></span>' +
      '<p class="tl-date">' + esc(w.date) + "</p>" +
      "<h3>" + esc(w.title) + "</h3>" +
      '<p class="tl-org">' + esc(w.org) + "</p>" +
      "<ul>" + w.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></article>";
    var orgLists = [];
    S.organizations.forEach(function (o, oi) {
      var list = o.roles.map(function (r) {
        return { title: r.title, badge: "Organization", meta: o.name, desc: "", tools: [], links: [], img: r.img };
      });
      orgLists.push(list);
      html +=
        '<article class="tl-item"><span class="tl-dot"></span>' +
        (o.date ? '<p class="tl-date">' + esc(o.date) + "</p>" : "") +
        "<h3>" + esc(o.name) + "</h3>" +
        '<p class="tl-org">Organization and events</p>' +
        '<div class="role-list" data-o="' + oi + '">' +
        o.roles.map(function (r, ri) {
          return '<button class="role" type="button" data-i="' + ri + '">' + esc(r.title) + "</button>";
        }).join("") +
        "</div></article>";
    });
    t.innerHTML = html;
    t.onclick = function (e) {
      var b = e.target.closest(".role");
      if (!b) return;
      var oi = +b.parentNode.getAttribute("data-o");
      openModal(orgLists[oi], +b.getAttribute("data-i"), b);
    };
  })();

  /* ---------- modal ---------- */
  var modal = $("#modal");
  var state = { list: [], i: 0, opener: null };

  function render() {
    var it = state.list[state.i];
    $("#mMedia").innerHTML = it.img ? '<img src="' + esc(it.img) + '" alt="' + esc(it.title) + '" />' : "";
    $("#mMedia").style.display = it.img ? "" : "none";
    $("#mBadge").textContent = it.badge || "";
    $("#mTitle").textContent = it.title;
    var meta = $("#mMeta"); meta.textContent = it.meta || ""; meta.style.display = it.meta ? "" : "none";
    var desc = $("#mDesc"); desc.textContent = it.desc || ""; desc.style.display = it.desc ? "" : "none";
    var tools = $("#mTools");
    tools.textContent = it.tools && it.tools.length ? "Tools: " + it.tools.join(", ") : "";
    tools.style.display = it.tools && it.tools.length ? "" : "none";
    $("#mLinks").innerHTML = (it.links || []).map(function (l) {
      return '<a class="btn btn-small" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
    }).join("");
    $("#mCount").textContent = state.i + 1 + " / " + state.list.length;
    var one = state.list.length < 2;
    $("#mPrev").style.visibility = one ? "hidden" : "visible";
    $("#mNext").style.visibility = one ? "hidden" : "visible";
  }
  function openModal(list, i, opener) {
    state.list = list; state.i = i; state.opener = opener || null;
    render();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    $(".modal-x").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock");
    if (state.opener) state.opener.focus();
  }
  function step(d) {
    var n = state.list.length;
    state.i = (state.i + d + n) % n;
    render();
  }
  modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  $("#mPrev").onclick = function () { step(-1); };
  $("#mNext").onclick = function () { step(1); };
  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  /* ---------- nav: mobile menu, scrolled state, active link ---------- */
  var nav = $("#nav"), menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.onclick = function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

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
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { rev.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
