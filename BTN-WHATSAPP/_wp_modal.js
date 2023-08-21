
    function iniciaModal(modalID) {
        const modalwp = document.getElementById(modalID)
        if (modalwp) {
            modalwp.classList.add('_mostrar')
            modalwp.addEventListener('click', (e) => {
                if (e.target.id == modalID || e.target.className == '_fechar') {
                    modalwp.classList.remove('_mostrar');
                }
            });
        }

    }

    const ativaBtn = document.querySelector('._float_btn')
    ativaBtn.addEventListener('click', () => iniciaModal('_modal_whatsapp'));

