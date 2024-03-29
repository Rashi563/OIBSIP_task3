window.addEventListener('load', () => {
	const form = document.querySelector("#task-input");
	const input = document.querySelector("#new-input");
	const list_el = document.querySelector("#Task");
    form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value;
		const task_el = document.createElement('div');
		task_el.classList.add('Task1');
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		task_el.appendChild(task_content_el);
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
		task_content_el.appendChild(task_input_el);
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('Work');
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('DEL');
		task_delete_el.innerText = 'DEL';
		task_actions_el.appendChild(task_delete_el);
		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);
		input.value = '';
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});