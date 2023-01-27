class WholesaleModal {
    constructor() {
        this.init();
        this.isSomeModelAdded = false;
    }
    addModelsDropdownsOpenHandler() {
        let openers = document.querySelectorAll('.wholesale__item-title');

        openers.forEach(opener => {
            opener.addEventListener('click', () => {
                console.log(opener.closest('.wholesale__item'));
                if (document.querySelector('.wholesale__item-body.isOpened') && !opener.closest('.wholesale__item').querySelector('.wholesale__item-body').classList.contains('isOpened')) {
                    document.querySelector('.wholesale__item-body.isOpened').classList.remove('isOpened');
                    opener.classList.remove('isOpened');
                }
                opener.closest('.wholesale__item').querySelector('.wholesale__item-body').classList.toggle('isOpened');
                opener.classList.toggle('isOpened');
            })
        })
    }
    addPopupOpenHandler() {
        if (!document.querySelector('.mass_products_opener') || !document.querySelector('.wholesale')) return;
        document.querySelector('.mass_products_opener').addEventListener('click', () => {
            document.querySelector('.wholesale').classList.add('isOpened');
        })
    }
    addPopupCloseHandler() {
        if (!document.querySelector('.wholesale__closer') || !document.querySelector('.wholesale')) return;
        document.querySelector('.wholesale__closer').addEventListener('click', () => {
            document.querySelector('.wholesale').classList.remove('isOpened');
        })
        document.querySelector('.wholesale__bottom-link').addEventListener('click', () => {
            document.querySelector('.wholesale').classList.remove('isOpened');
        })
    }
    addIncreaseHandler() {
        document.querySelectorAll('.button.increase').forEach(button => {
            button.addEventListener('click', () => {
                var value = button.closest('.count').querySelector('input').value;
                button.closest('.count').querySelector('input').value = +(+value + 1);



                button.closest('.wholesale__item-model').classList.add('isAdded');
                this.addGroupElemtAddedChecker(button);
            })
        })
    }
    addDecreaseHandler() {
        document.querySelectorAll('.button.decrease').forEach(button => {
            button.addEventListener('click', () => {
                var value = button.closest('.count').querySelector('input').value;
                
                if (value == 0) return;

                button.closest('.count').querySelector('input').value = +(+value - 1);
                if (+button.closest('.count').querySelector('input').value < 1) {
                    button.closest('.wholesale__item-model').classList.remove('isAdded');
                }
                this.addGroupElemtAddedChecker(button);
            })
        })
    }
    addInputValueListener() {
        document.querySelectorAll('.wholesale__item-model input').forEach(input => {
            input.addEventListener('change', () => {
                if (+input.value < 0) {
                    input.value = 0;
                }
                if (+input.value > 1) {
                    input.closest('.wholesale__item-model').classList.add('isAdded');
                }
                this.addGroupElemtAddedChecker(input);
            })
        })
    }
    addGroupElemtAddedChecker(element) {
        console.log(element);
        let inputs = element.closest('.wholesale__item').querySelectorAll('input');
        this.isSomeModelAdded = false;
        inputs.forEach(input => {
            console.log(input.value);
            if (+input.value > 0) {
                this.isSomeModelAdded = true;
            }
        });

        if (this.isSomeModelAdded) {
            element.closest('.wholesale__item').querySelector('.wholesale__item-title').classList.add('isAdded');
        } else {
            element.closest('.wholesale__item').querySelector('.wholesale__item-title').classList.remove('isAdded');
        }
        if (document.querySelector('.wholesale__item-title.isAdded')) {
            document.querySelector('.wholesale__bottom').classList.add('isAdded');
        } else {
            document.querySelector('.wholesale__bottom').classList.remove('isAdded');
        }
        console.log(this.isSomeModelAdded);
    }
    addRemovaAllHandler() {
        if (!document.querySelector('.deleteModal')) return;
        document.querySelector('.wholesale__bottom-left .closer').addEventListener('click', () => {
            document.querySelector('.deleteModal').classList.add('isOpened');
        })
        document.querySelector('.deleteModal__closer').addEventListener('click', () => {
            document.querySelector('.deleteModal').classList.remove('isOpened');
        })
        document.querySelector('.deleteModal .product__mass').addEventListener('click', () => {
            document.querySelector('.deleteModal').classList.remove('isOpened');
        })
    }
    init() {
        this.addModelsDropdownsOpenHandler();
        this.addPopupOpenHandler();
        this.addPopupCloseHandler();
        this.addIncreaseHandler();
        this.addDecreaseHandler();
        this.addInputValueListener();
        this.addRemovaAllHandler();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log()
    const wholesaleModal = new WholesaleModal();
});
