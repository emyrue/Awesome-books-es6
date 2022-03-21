export function displaySection(menuList, menuAdd, menuContact, listSection, formSection, contactSection) {
  menuList.addEventListener('click', () => {
    if (listSection.classList.contains('none')) {
      listSection.classList.remove('none');
      if (formSection.classList.contains('none')) {
        contactSection.classList.add('none');
      } else {
        formSection.classList.add('none');
      }
    }
  });

  menuAdd.addEventListener('click', () => {
    if (formSection.classList.contains('none')) {
      formSection.classList.remove('none');
      if (listSection.classList.contains('none')) {
        contactSection.classList.add('none');
      } else {
        listSection.classList.add('none');
      }
    }
  });

  menuContact.addEventListener('click', () => {
    if (contactSection.classList.contains('none')) {
      contactSection.classList.remove('none');
      if (listSection.classList.contains('none')) {
        formSection.classList.add('none');
      } else {
        listSection.classList.add('none');
      }
    }
  });
}