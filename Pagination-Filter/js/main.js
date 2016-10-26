// Initialize some variables
var numStudents = $('ul.student-list').children('li').length;
var numPages = Math.ceil(numStudents / 10);
var studentsPerPage = 10;

// Function to add page numbers dynamically
function addPagLinks () {
  console.log('addPagLinks ran...');
  // Create page links 'div' and 'ul'
  var pagDiv = document.createElement("div");
  var pagUl = document.createElement("ul");
  // Append 'ul' and assign class name to newly created 'div'
  pagDiv.appendChild(pagUl);
  pagDiv.classList.add("pagination");

  // Create li page links based on 'numPages'
  for (var i = 1; i <= numPages; i++) {
    var pagLi = document.createElement("li");
    var pagAnchor = document.createElement("a");
    // Append 'li' and 'a' elements and set href attribute
    pagUl.appendChild(pagLi);
    pagLi.classList.add(i);
    pagLi.appendChild(pagAnchor);
    pagAnchor.setAttribute("href", "javascript:void(0);");
    // Assign page numbers
    pagAnchor.innerText = i;
    console.log('added li item');
  }
  // Insert the page link div after the 'student-list'
  $(pagDiv).insertAfter('.student-list');
  // Set the active class to the first page
  $('.pagination ul li').eq(0).addClass('active');
}

// Call Function
addPagLinks();

// Show first 10 students and hide the rest
$('ul.student-list li:gt('+ (studentsPerPage - 1) +')').hide();

// On click function
$('.pagination').on('click', 'li', function(){
  $(this).addClass('active').siblings().removeClass('active'); // Set the active class to 'li' items based on click
  var index = $(this).index() + 1; // Set an index # for the eq() filter
  var cp = studentsPerPage * index; // Set a current page
  $('ul.student-list li').hide(); // Hide the rest of the students
  // Loop through and show the students based on current page
  for (var i = cp - studentsPerPage; i < cp; i++) {
    $('ul.student-list li:eq('+ i +')').show();
  }
});
