const data = [
	{
		question: 'Kõige olulisem on...',
		answer: 'tagada kliendi rahulolu'
	},
	{
		question: 'Projekti nõuete muudatusi peab...',
		answer: 'mõistma ja vastu võtma'
	},
	{
		question: 'Tarkvara peab kliendile tarnima...',
		answer: 'nii tihti kui võimalik'
	},
	{
		question: 'Kes peab projekti vältel koos töötama?',
		answer: 'Valdkonna spetsialistid ja tarkvaraarendajad'
	},
	{
		question: 'Mis on projekti edukuse alus?',
		answer: 'motiveeritud inimesed'
	},
	{
		question: 'Mis on parim viis info jagamiseks?',
		answer: 'Näost näkku vestlemine'
	},
	{
		question: 'Mis on edu peamine mõõdupuu?',
		answer: 'Töötav tarkvara'
	},
	{
		question: 'Agiilse tarkvaraarenduse protsessid soodustavad...',
		answer: 'jätkusuutlikku arendust'
	},
	{
		question: 'Tehnilist täiuslikkust ja head disaini pideva tähelepanu all hoides tagatakse...',
		answer: 'tarkvaraarendust kiirus ja painlikkus'
	},
	{
		question: 'Lihtsuse definitsioon',
		answer: 'Ebavajaliku töö tegematajätmise kunst'
	},
	{
		question: 'Iseorganiseeruvates meeskondades tekivad...',
		answer: 'parimad arhitektuurilised lahendused, nõuded ja disain'
	},
	{
		question: 'Meeskond otsib...',
		answer: 'võimalusi veelgi tõhusamaks saamiseks'
	},
];

var currentQuestion = 0;

function toggleAnswer() {
	const question = data[currentQuestion];
	const questionElem = document.querySelector('.question-text');
	const btnShowAnswer = document.querySelector('.btnShowAnswer');
	if (questionElem.innerText == question.question) {
		questionElem.innerText = question.answer;
		btnShowAnswer.innerText = 'Näita küsimust';
	} else {
		questionElem.innerText = question.question;
		btnShowAnswer.innerText = 'Näita vastust';
	}
}

function nextQuestion() {
	currentQuestion = getRandomInt(data.length);
	const question = data[currentQuestion];
	document.querySelector('.question-text').innerText = question.question;
	document.querySelector('.btnShowAnswer').innerText = 'Näita vastust';
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

nextQuestion();

function fillTable() {
	const tableElem = document.querySelector('.allQuestionsTable');
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		const tableRow = document.createElement('tr');
		tableRow.innerHTML = `
			<td>${element.question}</td>
			<td>${element.answer}</td>`;
		tableElem.appendChild(tableRow);
	}
}

fillTable();

function toggleTable() {
	const tableContainer = document.querySelector('.table-container');
	const btnShowAll = document.querySelector('.btnShowAll');
	if (tableContainer.style.display == 'none') {
		tableContainer.style.display = 'block';
		btnShowAll.innerText = 'Peida kõiki';
	} else {
		tableContainer.style.display = 'none';
		btnShowAll.innerText = 'Näita kõiki';
	}
}