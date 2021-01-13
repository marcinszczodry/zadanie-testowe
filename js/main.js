/* Toggle sidebar visibility */
const toggleSidebar = () => {
  const sidebarHtmlElement = document.querySelector('.sidebar');
  sidebarHtmlElement.classList.toggle('sidebar--opened');
}
const toggleSidebarsTriggers = document.querySelectorAll("[class$='toggle-menu']");
toggleSidebarsTriggers.forEach(trigger => {
  trigger.addEventListener('click', toggleSidebar);
});
