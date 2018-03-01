(function() {
	function toggleExpander(e) {
		var contentElCls = e.currentTarget.nextElementSibling.classList;
		var openedClassName = 'expander__item__content--open';
		var clickedArrowImg = e.currentTarget.querySelector('img.expander__item__title__arrow');
		if (contentElCls.contains(openedClassName)) {
			contentElCls.remove(openedClassName);
			clickedArrowImg.src = '/images/expander/icon-expander-open.svg';
		} else {
			contentElCls.add(openedClassName);
			clickedArrowImg.src = '/images/expander/icon-expander-close.svg';
		}

	};

	document.addEventListener('DOMContentLoaded', function () {
		forEachElement(document, '.expander__item__title', function(e) {
			e.onclick = toggleExpander;
		});
  	})
})();