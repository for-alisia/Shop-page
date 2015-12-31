//Подключаем ползунок
(function () {
	var slide = $('.slider'),
		form = slide.closest('.price__form'),
		inputs = form.find('input'),
		inputFrom = form.find('#from'),
		inputTo = form.find('#to'),
		minVal = 1000,
		maxVal = 50000,
		startMin = inputFrom.attr('data-min'),
		startMax = inputTo.attr('data-max');
	slide.slider({range: true,
				  values: [startMin,startMax],
				  min: minVal,
				  max: maxVal,
				  change: changeValues,
				  create: changeValues
				   });
	function changeValues(min, max) {
		var min, max;
		min = slide.slider("values", 0);
		max = slide.slider("values", 1);
		inputFrom.val(min);
		inputTo.val(max);
	}
	//Меняем значения ползунка по вводу в поля
	inputs.on('change', function() {
		var min = inputFrom.val(),
			max = inputTo.val();
		if (min < minVal) {
			inputFrom.val(minVal);
		}
		else if (max > maxVal) {
			inputTo.val(maxVal);
		}
		slide.slider("values",[min, max]);
	});
	
	
})();