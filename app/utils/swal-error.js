export default function (adapterError) {
	console.log('Swal error: ', adapterError);
	if (adapterError.errors){
		var messages = '';
		adapterError.errors.forEach(function (error) {
			messages = messages + '\n'+ error.detail;
		})
		swal('Oops!', messages, 'error');
	}	else {
		swal('Oops!', 'Erro desconhecido', 'error');
	}
}
