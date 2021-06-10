const DB_ID = "DB_TASK";

function deleteData(id) {
    const db = fetchData();

    const newDB = db.reduce((arr, data) => {
        if (id != data.id) {
            arr.push(data);
        }

        return arr;
    }, []);

    localStorage.setItem(DB_ID, JSON.stringify(newDB));
}

function updateStatus(id, isCompleted) {
    const db = fetchData();

    const newDB = db.reduce((arr, data) => {
        if (id == data.id) {
            data.isCompleted = isCompleted;
        }

        arr.push(data);

        return arr;
    }, []);

    localStorage.setItem(DB_ID, JSON.stringify(newDB));
}

function addData(data, timestamp, isCompleted = false) {
    const db = fetchData();
    const id = getNewID();

    db.push({ id, data, timestamp, isCompleted });

    localStorage.setItem(DB_ID, JSON.stringify(db));

    return id;
}

function fetchData() {
    return JSON.parse(localStorage.getItem(DB_ID)) || [];
}

function isStroageAvailable() {
    return typeof Storage !== "undefined";
}

function getNewID() {
    const max = fetchData().reduce(
        (max, val) =>
            parseInt(max) < parseInt(val.id) ? parseInt(val.id) : parseInt(max),
        0
    );

    return max + 1;
}
