const works = [
  {
    id: 1,
    name: 'Multi Post Stories',
    name2: 'Keeping track of hundreds  of components website',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
    featured_image: 'Icons/work-hint_img.png',
  },
];

// Work-hint- data
const workHintContainer = document.querySelector('.work-hint-modal-container');
const openWorkHintModal = document.querySelector('.open-work-hint-modal');
const closeWorkHintModal = document.querySelector('#work-hint-modal-close');

openWorkHintModal.addEventListener('click', (e) => {
  const workHint = works.find(
    (work) => work.id === parseInt(e.currentTarget.dataset.id, 10));
  const {
    name: workName,
    name2: workName2,
    description: workDescription,
    featured_image: workHintFeaturedImage,
    technologies: workTech,
  } = workHint;

  const [html, Bootstrap, Rubyonrails] = workTech;
  document.querySelector('.work-hint-title').textContent = workName;
  document.querySelector('.work-hint-title2').textContent = workName2;
  document.querySelector('.work-hint-stack1').textContent = html;
  document.querySelector('.work-hint-stack2').textContent = Bootstrap;
  document.querySelector('.work-hint-stack3').textContent = Rubyonrails;
  document.querySelector('.work-hint-placeholder').src = workHintFeaturedImage;
  document.querySelector('.work-hint-descript').textContent = workDescription;
  document.getElementById('blur').style.filter = 'blur(5px)';
  workHintContainer.classList.add('active');
});

closeWorkHintModal.addEventListener('click', () => {
  workHintContainer.classList.remove('active');
  document.getElementById('blur').style.filter = 'blur(0)';
});
