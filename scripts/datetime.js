
function getDateTime(){
    let timestamp = Date.now();
    let date_ob = new Date(timestamp);

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    // returns date&time in YYYY-MM-DD_HH-MM-SS format
    return (year + "-" + month + "-" + date + "_" + hours + "-" + minutes + "-" + seconds);
}

module.exports = getDateTime();