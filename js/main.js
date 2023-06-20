
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const body = document.body;
const closeBtn = document.querySelector('.close');

// Show the menu when the button is clicked
dropdownBtn.addEventListener('click', function() {
    dropdownMenu.style.display = 'block';
    body.classList.add('menu-open'); // Add the class to the body
    dropdownMenu.classList.toggle('active');
  });

  dropdownMenu.addEventListener('click', function() {
    body.classList.toggle('menu-open');
    document.body.classList.add('menu-open');
   
  });

  
  
  // Hide the menu when the user clicks outside of it
  document.addEventListener('click', function(event) {
    if (event.target !== dropdownBtn && !dropdownBtn.contains(event.target) && event.target !== dropdownMenu && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none';
      body.classList.remove('menu-open'); // Remove the class from the body
    }
  });

  
  
  closeBtn.addEventListener('click', function() {
   
    dropdownMenu.style.display = 'none';
    dropdownMenu.classList.toggle('open');
   
  });

