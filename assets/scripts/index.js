const containerContent = document.querySelector('#container-content');
const searchInput = document.querySelector('label > input');

document.title += ` - ${Object.keys(glyphs).length} icons`;

if (containerContent) {
    if (searchInput) {
        searchInput.addEventListener('input', event => {
            renderIcons(String(event.target.value).toLowerCase());
        });
    }

    renderIcons();

    /**
     * @param {string} filter
     */
    function renderIcons(filter = '') {
        containerContent.innerHTML = '';

        const icons = Object.keys(glyphs).filter((name) => {
            const icon = glyphs[name];
            const iconName = name.toLowerCase().replaceAll('-symbolic', ''); // Приводим имя иконки к нижнему регистру

            const keywords = icon.keywords ? icon.keywords.toLowerCase() : '';
            return !filter || iconName.includes(filter) || keywords.includes(filter);
        });

        let index = 0;

        function renderBatch() {
            const batchSize = 5;
            const end = Math.min(index + batchSize, icons.length);

            for (let i = index; i < end; i++) {
                const iconName = icons[i].replaceAll('-symbolic', '').toLowerCase();

                const elementRoot = document.createElement('div');
                elementRoot.classList.add('icon-item', 'gnome-typeface', 'body');
                elementRoot.setAttribute('data-name', iconName);
                elementRoot.addEventListener('click', () => {
                    openModalIconResult(iconName);
                });
                elementRoot.innerHTML = `<i class="gnome-icon-${iconName}"></i>`;

                // Добавляем HTML для каждой иконки
                containerContent.appendChild(elementRoot);
            }

            index = end;

            if (index < icons.length) {
                alternateIdleCallback(renderBatch);
            }
        }

        alternateIdleCallback(renderBatch);
    }
}

/**
 * @param {Function} callback
 */
function alternateIdleCallback(callback) {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
    } else {
        setTimeout(callback, 10);
    }
}

/**
 * @param {string} iconName
 */
function openModalIconResult(iconName) {
    const modalIconResult = document.querySelector('#modal-icon-result');

    if (modalIconResult) {
        modalIconResult.removeAttribute('style');

        const gnomeIcon = `gnome-icon-${iconName}`;

        const modalTitle = modalIconResult.querySelector('#modal-title');
        const modalClose = modalIconResult.querySelector('#modal-close');
        const modalCode = modalIconResult.querySelector('#modal-code');
        const modalIcon = modalIconResult.querySelector('#modal-icon');

        const copyButton = modalIconResult.querySelector('#copy-button');

        modalTitle.innerText = iconName;
        modalCode.innerText = `<i class="${gnomeIcon}"></i>`;
        modalIcon.setAttribute('class', gnomeIcon);

        modalClose.addEventListener('click', () => {
            modalIconResult.setAttribute('style', 'display: none;');
        });

        copyButton.addEventListener('click', event => {
            copyToClipboard(modalCode.innerText, event);
        });
    }

    console.log(iconName);
}

function copyToClipboard(text, event) {
    navigator.clipboard.writeText(text).then(() => {
        event.target.innerText = 'Copied!';
        setTimeout(() => {
            event.target.innerText = 'Copy';
        }, 1000);
        console.log('Async: Copying to clipboard was successful!');
    }).catch(err => {
        event.target.innerText = 'Failed to copy';
        setTimeout(() => {
            event.target.innerText = 'Copy';
        }, 1000);
        console.error('Async: Could not copy text: ', err);
    });
}