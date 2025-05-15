const stdout = document.querySelector('.stdout');
const field = document.querySelector('#field');
const container = document.querySelector('.container');

function scrollToBottom() {
    stdout.scrollTo(0, stdout.scrollHeight);
}

function scrollByKey(ratio) {
    stdout.scrollTop = stdout.scrollTop + ratio * 30;
}

function setEndOfContenteditable(contentEditableElement) {
    let range, selection;
    if (document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
    }
}

function focus() {
    field.focus();
    setEndOfContenteditable(field);
}

function addLine(username, text, withPrefix) {
    const line = document.createElement('div');
    line.innerText = `${withPrefix ? `${username}> ` : ''}${text}`;
    line.classList.add('line');

    stdout.append(line);
    field.innerHTML = '';
    scrollToBottom();
}

container.addEventListener('click', () => {
    focus();
});

field.addEventListener('keydown', async (e) => {
    const value = field.innerText.trim();
    const key = e.which || e.keyCode;

    switch (key) {
        case 13:
            e.preventDefault();

            if (value) {
                //console.log(value)
                addLine(rootUserName, value, true);
                sendMessage(rootUserName, value, true)
                //const { stdout } = await run(value) || {};
            }
            break;

        case 38:
        case 40:
            e.preventDefault();

            scrollByKey(key === 38 ? -1 : 1);
            break;
    }
}, true);

async function typeLine(text, delay = 40) {
    const line = document.createElement('div');
    line.classList.add('line');
    stdout.append(line);
    scrollToBottom();

    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {

        const word = words[i];
        console.log(word)
        if (word == "\u00A0") {
            line.innerText += "\u00A0";
        } else if(word == "\n") {
            line.innerText += "\n";
        } else {
            for (let k = 0; k < word.length; k++) {
                if (k == word.length - 1) {
                    line.innerText += `${word[k] + "\u00A0"}`
                    scrollToBottom();
                    await new Promise(res => setTimeout(res, delay));
                } else {
                    line.innerText += word[k];
                    scrollToBottom();
                    await new Promise(res => setTimeout(res, delay));
                }

            }
        }
    }
}
focus();