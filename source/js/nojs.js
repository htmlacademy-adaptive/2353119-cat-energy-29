//Отслеживает появление первного header и удаляет с него класс --nojs, необходим для решения проблемы с CLS.

const observer = new MutationObserver((mutations) => {
  const mainHeader = document.querySelector('.main-header');

  mutations.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      const addedNode = mutation.addedNodes[0];
      if (addedNode.nodeName.toLowerCase() === 'header') {
        mainHeader.classList.remove('main-header--nojs');
        observer.disconnect();
      }
    }
  });
});

observer.observe(document.documentElement, { childList: true, subtree: true });
