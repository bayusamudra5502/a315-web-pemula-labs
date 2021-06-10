document.addEventListener("DOMContentLoaded", function () {
    const submitForm /* HTMLFormElement */ = document.getElementById("form");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });

    const dbSnapshot = fetchData();
    dbSnapshot.forEach((data) => {
        if (data.isCompleted)
            addTaskToCompletedWithData(data.id, data.data, data.timestamp);
        else addToDoWithData(data.id, data.data, data.timestamp);
    });
});
