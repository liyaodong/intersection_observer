require('intersection-observer');
const navs = document.querySelectorAll('a[data-nav]');

const callback = function(entries, observer) {
  entries.forEach(x => {
    const $target = [].filter.call(navs, nav => nav.dataset.nav === x.target.dataset.section)[0];

    if (x.intersectionRatio > 0) $target.classList.add('active');
    else $target.classList.remove('active');
  });
};

const observer = new IntersectionObserver(callback, {});

[].forEach.call(navs, x => {
  const target = document.querySelector(`*[data-section=${x.dataset.nav}]`);

  observer.observe(target);
});
