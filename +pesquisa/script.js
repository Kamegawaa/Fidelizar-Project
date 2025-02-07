document.addEventListener('DOMContentLoaded', () => {
    // Click para abrir o Form do botão "Avaliar Loja"
    const alertInputs = document.querySelector('.fidelity-pesquisa-alert');
    const fidelityButton1 = document.querySelector('.fidelity-pesquisa-btn-1');
    const fidelityProduct1 = document.querySelector('.fidelity-pesquisa-grup-loja');
    const fidelitySubmit1 = document.querySelector('.fidelity-pesquisa-btn1');
    const fidelityRatingInputs = document.querySelectorAll('input[name="fidelity-rating"]');
    const fidelityRatingInputsLoja = document.querySelectorAll('input[name="fidelity-nps"]');
    const fidelityTitle1 = document.querySelector('.fidelity-pesquisa-btn-feito-1');
    const fidelityForm1 = document.querySelector('.fidelity-pesquisa-grup-form-1');
    fidelityButton1.addEventListener('click', function () {
        if (fidelityProduct1.classList.contains('show')) {
            fidelityProduct1.style.opacity = '0';
            setTimeout(() => {
                fidelityProduct1.classList.remove('show');
                fidelityProduct1.style.display = 'none';
            }, 100);
        } else {
            fidelityProduct1.style.display = 'flex';
            setTimeout(() => {
                fidelityProduct1.style.opacity = '1';
                fidelityProduct1.classList.add('show');
            });
        }

        fidelitySubmit1.classList.add('disable');

        const updateButtonState = () => {
            const isGroup1Checked = Array.from(fidelityRatingInputs).some(input => input.checked);
            const isGroup3Checked = Array.from(fidelityRatingInputsLoja).some(input => input.checked);

            // Atualiza a classe disable com base nas condições
            if (isGroup1Checked && isGroup3Checked) {
                fidelitySubmit1.classList.remove('disable');
                alertInputs.classList.remove('show');
            } else {
                fidelitySubmit1.classList.add('disable');
            }
        };

        [...fidelityRatingInputs, ...fidelityRatingInputsLoja].forEach(input => {
            input.addEventListener('change', updateButtonState);
        });

        fidelitySubmit1.addEventListener('click', function (event) {
            // Verifica se o botão está desabilitado
            if (fidelitySubmit1.classList.contains('disable')) {
                event.preventDefault();
                alertInputs.classList.add('show');
            } else {
                fidelityButton1.classList.add('block');
                fidelityForm1.classList.add('block');
                fidelityTitle1.classList.add('block');
            }
        });

    });

    // Click para abrir o Form do botão "Avaliar Pedido"
    const fidelityButton2 = document.querySelector('.fidelity-pesquisa-btn-2');
    const fidelityProduct2 = document.querySelector('.fidelity-pesquisa-grup-pedido');
    const fidelitySubmit2 = document.querySelector('.fidelity-pesquisa-btn2');
    const fidelityRatingInputs2 = document.querySelectorAll('input[name="fidelity-check"]');
    const fidelityTitle2 = document.querySelector('.fidelity-pesquisa-btn-feito-2');
    const fidelityForm2 = document.querySelector('.fidelity-pesquisa-grup-form-2');
    fidelityButton2.addEventListener('click', function () {
        if (fidelityProduct2.classList.contains('show')) {
            fidelityProduct2.style.opacity = '0';
            setTimeout(() => {
                fidelityProduct2.classList.remove('show');
                fidelityProduct2.style.display = 'none';
            }, 100);
        } else {
            fidelityProduct2.style.display = 'flex';
            setTimeout(() => {
                fidelityProduct2.style.opacity = '1';
                fidelityProduct2.classList.add('show');
            });
        }

        fidelitySubmit2.classList.add('disable');

        const updateButtonState = () => {
            const isGroup2Checked = Array.from(fidelityRatingInputs2).some(input => input.checked);

            // Atualiza a classe disable com base nas condições
            if (isGroup2Checked) {
                fidelitySubmit2.classList.remove('disable');
                alertInputs.classList.remove('show');
            } else {
                fidelitySubmit2.classList.add('disable');
            }
        };

        [...fidelityRatingInputs2].forEach(input => {
            input.addEventListener('change', updateButtonState);
        });

        fidelitySubmit2.addEventListener('click', function (event) {
            // Verifica se o botão está desabilitado
            if (fidelitySubmit2.classList.contains('disable')) {
                event.preventDefault();
                alertInputs.classList.add('show');
            } else {
                fidelityButton2.classList.add('block');
                fidelityForm2.classList.add('block');
                fidelityTitle2.classList.add('block');
            }
        });
    });

    // Click para abrir o Form do botão "Avaliar Produto"
    const fidelityButton3 = document.querySelector('.fidelity-pesquisa-btn-3');
    const fidelityProduct3 = document.querySelector('.fidelity-pesquisa-grup-produtos');
    const fidelityProduct4 = document.querySelector('.fidelity-pesquisa-grup-produtos-form');
    fidelityButton3.addEventListener('click', function () {
        if (fidelityProduct3.classList.contains('show'), fidelityProduct4.classList.contains('show')) {
            fidelityProduct3.style.opacity = '0';
            fidelityProduct4.style.opacity = '0';
            setTimeout(() => {
                fidelityProduct3.classList.remove('show');
                fidelityProduct3.style.display = 'none';
                fidelityProduct4.classList.remove('show');
                fidelityProduct4.style.display = 'none';
            }, 100);
        } else {
            fidelityProduct3.style.display = 'grid';
            setTimeout(() => {
                fidelityProduct3.style.opacity = '1';
                fidelityProduct3.classList.add('show');
            });
            fidelityProduct4.style.display = 'flex';
            setTimeout(() => {
                fidelityProduct4.style.opacity = '1';
                fidelityProduct4.classList.add('show');
            });
        }
    });

    // Seleciona todos os botões e spans correspondentes
    const ButtonNps = document.querySelectorAll('.fidelity-pesquisa-radio-nps');
    const SpanNps = document.querySelectorAll('.fidelity-btn-nps');
    ButtonNps.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (!button.classList.contains('ativo')) {
                SpanNps.forEach(span => span.classList.remove('ativo'));
                ButtonNps.forEach(btn => btn.classList.remove('ativo'));

                SpanNps[index].classList.add('ativo');
                button.classList.add('ativo');
            }
        });
    });

    // Função para habilitar/desabilitar o botão
    const fidelityForm3 = document.querySelector('.fidelity-pesquisa-btn-3');
    const fidelityTitle3 = document.querySelector('.fidelity-pesquisa-btn-feito-3');
    const fidelityButtonF = document.querySelector('.fidelity-pesquisa-first');
    const container = document.querySelector('.fidelity-pesquisa-grup-produtos');
    const checkboxes = document.querySelectorAll('input[name="fidelity-check-2"]');
    const select = document.querySelector('#fidelity-input-options');

    fidelityButtonF.classList.add('disable');

    const updateButtonState2 = () => {
        const isAnyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        const isOptionSelected = select.value.trim() !== '';

        if (isAnyCheckboxChecked && isOptionSelected) {
            fidelityButtonF.classList.remove('disable');
        } else {
            fidelityButtonF.classList.add('disable');
        }
    };

    checkboxes.forEach(input => {
        input.addEventListener('change', updateButtonState2);
    });

    select.addEventListener('change', updateButtonState2);

    updateButtonState2();

    const updatePopoutEvents = () => {
        const popout = document.querySelector('.fidelity-pesquisa-produto');
        if (popout) {
            popout.removeEventListener('click', togglePopout);
            popout.addEventListener('click', togglePopout);
        }
    };

    const togglePopout = () => {
        const popoutImg = document.querySelector('.fidelity-pesquisa-produto-img');
        const popout = document.querySelector('.fidelity-pesquisa-produto');
        if (popout) {
            popout.classList.toggle('open');
            popoutImg.classList.toggle('open');
        }
    };

    checkboxes.forEach(input => {
        input.addEventListener('change', updateButtonState2);
    });

    // Evento de clique no botão de eliminar
    fidelityButtonF.addEventListener('click', function (event) {
        if (fidelityButtonF.classList.contains('disable')) {
            alertInputs.classList.add('show');
        } else {
            alertInputs.classList.remove('show');
            const firstChild = container.firstElementChild;

            if (firstChild) {
                container.removeChild(firstChild);
            }

            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });

            select.value = '';
            
            updateButtonState2();

            if (container.children.length === 0) {
                fidelityButtonF.classList.add('disable');
                fidelityForm3.classList.add('block');
                fidelityTitle3.classList.add('block');
                fidelityProduct4.style.display = 'none';
                fidelityProduct4.style.opacity = '0';
            }

            updatePopoutEvents();
        }
    });
    updatePopoutEvents();

});
