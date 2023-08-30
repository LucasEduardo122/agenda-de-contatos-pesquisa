document.addEventListener("DOMContentLoaded", () => {
  const filterInput = document.getElementById("filter");
  const contactItems = document.querySelectorAll(".list-wrapper li");

  filterInput.addEventListener("input", () => {
    const filterText = filterInput.value.toLowerCase();

    contactItems.forEach(item => {
      const contactName = item.querySelector(".contact h3").textContent.toLowerCase();
      const contactPhone = item.querySelector(".contact p").textContent.toLowerCase();
      const shouldDisplay = contactName.includes(filterText) || contactPhone.includes(filterText);

      item.style.display = shouldDisplay ? "flex" : "none";
    });

    // Hide letters when there are no matching contacts
    const letters = document.querySelectorAll(".list-wrapper .letter");
    letters.forEach(letter => {
      const associatedList = letter.nextElementSibling;
      const visibleContacts = Array.from(associatedList.children).some(
        contact => contact.style.display === "flex"
      );
      letter.style.display = visibleContacts ? "flex" : "none";
    });
  });
});