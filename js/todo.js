const ID_TODOS = "todos";
const ID_DONES = "completed-todos";

export function addToDo(jobTitle, date) {
    const parent = document.createElement("div");
    parent.classList.add("item", "shadow");

    const inner = document.createElement("div");
    inner.classList.add("inner");

    const h2 = document.createElement("h2");
    h2.innerText = jobTitle;

    const tanggal = document.createElement("p");
    tanggal.innerText = date;

    const button = buildButton("check-button", function () {
        doneJob(this.parentElement);
    });

    inner.appendChild(h2);
    inner.appendChild(tanggal);
    parent.appendChild(inner);
    parent.appendChild(button);

    const container = document.getElementById(ID_TODOS);
    container.appendChild(parent);
}

function doneJob(obj) {
    const container = document.getElementById(ID_DONES);
    const copy = obj.cloneNode(true);
    copy.removeChild(copy.lastChild);

    copy.appendChild(
        buildButton("undo-button", function () {
            const wrapper = this.parentElement;
            const jobTitle = wrapper.firstChild.children[0].innerText;
            const date = wrapper.firstChild.children[1].innerText;

            addToDo(jobTitle, date);
            wrapper.parentElement.removeChild(wrapper);
        })
    );

    copy.appendChild(
        buildButton("trash-button", function () {
            const wrapper = this.parentElement;
            wrapper.parentElement.removeChild(wrapper);
        })
    );

    obj.parentElement.removeChild(obj);
    container.appendChild(copy);
}

function buildButton(type, eventListener) {
    const button = document.createElement("button");
    button.classList.add(type);
    button.addEventListener("click", eventListener);

    return button;
}
