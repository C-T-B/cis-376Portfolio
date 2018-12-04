// onClick event for the tr
$('#mp-list-tbody').on('click', 'tr', function() {
	var input = $(this).children().find(':checkbox');
	toggleCheckbox(input);
});

// onClick event for the input checkbox
$('#mp-list-tbody tr td').on('click', ':checkbox', function() {
	var input = $(this);
	toggleCheckbox(input);
});

// onClick event for the input in the thead
function onClickTrAll(tr) {
	var input = $(tr);
	var inputs = $('#mp-list-tbody').children().children().find(':checkbox');
	if (input.is(':checked')) {
		inputs.prop('checked', true);
		inputs.parent().parent().addClass('selected');
	} else {
		inputs.prop('checked', false);
		inputs.parent().parent().removeClass('selected');
	}
}

// To change a single input
function toggleCheckbox(input) {
	if (input.is(':checked')) {
		input.prop('checked', false);
		input.parent().parent().removeClass('selected');
	} else {
		input.prop('checked', true);
		input.parent().parent().addClass('selected');
	}
	toggleTheadCheckbox();
}

// To check the thead input if all input are selected
function toggleTheadCheckbox() {
	var inputs = $('#mp-list-tbody').children().children().find(':checkbox');
	var inputsChecked = $('#mp-list-tbody').children().children().find(':checkbox:checked');
	if (inputs.length == inputsChecked.length)
		$('.mp-list thead tr').children().find(':checkbox').prop('checked', true);
	else
		$('.mp-list thead tr').children().find(':checkbox').prop('checked', false);
}

function onClickNew() {
	alert('New');
}

function onClickDelete() {
	var inputsChecked = $('#mp-list-tbody tr td').find(':checkbox:checked');
	inputsChecked.parent().parent().remove();
	var inputs = $('#mp-list-tbody tr td').find(':checkbox');
	updateTotal();
	if (inputs.length == 0) {
		$('#mp-list-tbody tr.total').remove();
		$('.mp-list thead tr').children().find(':checkbox').prop('checked', false);
		$('#mp-list-tbody tr.no-result').removeClass('hide');
	}
}

function onClickExport() {
	alert('Export');
}
