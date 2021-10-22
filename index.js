(() => {
    const jsonToEnv = (json, prefix = '') => {
        const entries = Object.entries(json).flatMap(([k, v]) => {
            console.log(k, v);
            if (typeof v === 'object') {
                return jsonToEnv(v, `${prefix}${k}__`);
            } else {
                return [`${prefix}${k}=${v}`];
            }
        });

        console.log(entries);
        return entries.join('\n');
    };

    window.addEventListener('DOMContentLoaded', () => {
        const inputElement = document.getElementById('input');
        const outputElement = document.getElementById('output');

        inputElement.addEventListener('input', (e) => {
            const value = e.target.value;
            try {
                const json = JSON.parse(value);
                outputElement.textContent = jsonToEnv(json);
            } catch (e) {
                console.error(e);
                outputElement.textContent = 'Invalid input';
            }
        });
    });
})();
