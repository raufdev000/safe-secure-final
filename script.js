document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((el) => observer.observe(el));
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".fade-fast, .fade-normal, .fade-slow"
).forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".pop-fast, .pop-medium, .pop-slow"
    ).forEach(el => observer.observe(el));

});
document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".slide-left-fast, .slide-left-medium, .slide-left-slow"
    ).forEach(el => observer.observe(el));

});

  // Navbar — scroll par solid black + shrink
  (function () {
    var nav = document.getElementById('ssmNav');
    if (!nav) return;
    function onScroll(){ nav.classList.toggle('ssm-nav--stuck', window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  })();

  // Scroll reveal — repeats on every scroll up/down
  (function () {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          void e.target.offsetWidth;          // reflow — animation dobara chale
          e.target.classList.add('in');
        } else {
          e.target.classList.remove('in');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { io.observe(el); });
  })();

  // Popup — last section screen par aate hi khulta hai (session me sirf ek baar)
  (function () {
    var last = document.getElementById('lastSection');
    var modalEl = document.getElementById('contactPopup');
    if (!last || !modalEl || !window.bootstrap) return;
    if (sessionStorage.getItem('ssm_services_popup')) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          bootstrap.Modal.getOrCreateInstance(modalEl).show();
          sessionStorage.setItem('ssm_services_popup', '1');
          io.disconnect();
        }
      });
    }, { threshold: 0.35 });

    io.observe(last);
  })();
