/* Vegith Global — vanilla JS */
(function(){
  // Year
  var y = document.getElementById('vgYear'); if(y) y.textContent = new Date().getFullYear();

  // Navbar scroll state
  var nav = document.getElementById('vgNavbar');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // Reveal on scroll
  var els = document.querySelectorAll('.vg-section, .vg-page-hero, .vg-srv, .vg-cap, .vg-feat, .vg-job, .vg-case, .vg-contact-card, .vg-culture, .vg-eco-node, .vg-mv, .vg-founder-card, .vg-exec-card, .vg-philo, .vg-tl-item, .vg-step, .vg-benefit, .vg-ct-card');
  els.forEach(function(e){ e.classList.add('vg-reveal'); });
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, {threshold:.12});
    els.forEach(function(e){ io.observe(e); });
  } else { els.forEach(function(e){ e.classList.add('in'); }); }

  // Animated counters
  var nums = document.querySelectorAll('.vg-num');
  function animateCount(el){
    var target = parseInt(el.dataset.target || '0', 10);
    var start = 0, dur = 1800, t0 = performance.now();
    function tick(t){
      var p = Math.min(1,(t-t0)/dur);
      var eased = 1 - Math.pow(1-p, 3);
      var v = Math.floor(start + (target-start)*eased);
      el.textContent = v.toLocaleString('en-IN');
      if(p<1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('en-IN');
    }
    requestAnimationFrame(tick);
  }
  if('IntersectionObserver' in window && nums.length){
    var io2 = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ animateCount(en.target); io2.unobserve(en.target); }
      });
    }, {threshold:.5});
    nums.forEach(function(n){ io2.observe(n); });
  }

  // Job filters
  var dept = document.getElementById('vgFilterDept');
  var loc = document.getElementById('vgFilterLoc');
  function filterJobs(){
    if(!dept || !loc) return;
    var d = dept.value.trim(), l = loc.value.trim();
    document.querySelectorAll('#vgJobs > [data-dept]').forEach(function(card){
      var ok = (!d || card.dataset.dept === d) && (!l || card.dataset.loc === l);
      card.style.display = ok ? '' : 'none';
    });
  }
  if(dept) dept.addEventListener('change', filterJobs);
  if(loc) loc.addEventListener('change', filterJobs);

  // Close mega menu on link click (mobile)
  document.querySelectorAll('.vg-mega a').forEach(function(a){
    a.addEventListener('click', function(){
      var collapse = document.getElementById('vgNav');
      if(collapse && collapse.classList.contains('show')){
        var btn = document.querySelector('.navbar-toggler'); if(btn) btn.click();
      }
    });
  });
})();

// Form handler (demo — wire to backend later)
function vgHandleForm(e, kind){
  e.preventDefault();
  var form = e.target;
  if(!form.checkValidity()){ form.classList.add('was-validated'); return false; }
  var msgId = kind === 'careers' ? 'careersMsg' : 'contactMsg';
  var msg = document.getElementById(msgId);
  if(msg){
    msg.textContent = '✓ Thank you. Our team will get back to you shortly.';
  }
  form.reset();
  return false;
}
