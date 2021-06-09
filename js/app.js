import { addToDo } from "./todo.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        const jobTitle = document.querySelector("#title").value;
        const date = document.querySelector("#date").value;

        addToDo(jobTitle, date);
        e.preventDefault();
    });
});
