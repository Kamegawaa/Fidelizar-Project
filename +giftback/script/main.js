function toggleDropdown(button) {
  const dropdown = button.closest('.dropdown');
  dropdown.classList.toggle('open'); // Abre/fecha o dropdown

  // Seleciona os ícones relacionados
  const icons = dropdown.querySelectorAll('.icon-drop');
  icons.forEach(icon => {
    icon.classList.toggle('active');
  });
}

// Acessar o submenu 

document.querySelectorAll('.sub-link-mobile').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    // Acessar o submenu
    const subDropdown = this.nextElementSibling;  // O submenu está logo após o link
    console.log("Sub-dropdown:", subDropdown); // Verifica se encontrou o submenu

    // Se o submenu existir, alterna sua exibição
    if (subDropdown && subDropdown.classList.contains('sub-dropdown-mobile')) {
      subDropdown.style.display = subDropdown.style.display === 'contents' ? 'none' : 'contents';
      console.log("Alterando display do submenu para:", subDropdown.style.display);
    } else {
      console.log("Sub-dropdown não encontrado!");
    }
  });
});

const perfilMenu = document.querySelector('.perfil-menu');
const dropdownMenu = document.querySelector('.perfil-dropdown');

// Adiciona o evento de clique no botão/menu
perfilMenu.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('show'); // Alterna a visibilidade do menu
});

// Adiciona um evento de clique no documento
document.addEventListener('click', function(event) {
  // Verifica se o clique foi fora do menu dropdown
  if (!dropdownMenu.contains(event.target) && !perfilMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show'); // Fecha o menu
  }
});

const buttonImg = document.querySelector('.button-img');
const alterarForm = document.querySelector('.alterar-form');

// Alterna a visibilidade ao clicar no botão
buttonImg.addEventListener('click', function(event) {
    alterarForm.classList.toggle('show'); // Alterna a visibilidade
});

// Fecha a div ao clicar fora dela
document.addEventListener('click', function(event) {
    if (!alterarForm.contains(event.target) && !buttonImg.contains(event.target)) {
        alterarForm.classList.remove('show'); // Garante que o menu feche

    }
});
