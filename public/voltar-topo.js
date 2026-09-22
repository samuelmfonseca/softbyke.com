/* Botao flutuante de voltar ao topo */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('voltarTopo');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})();
