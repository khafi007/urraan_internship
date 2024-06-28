function convertAgeToDays() {
    const years = parseInt(document.getElementById('years').value);
    const months = parseInt(document.getElementById('months').value);
    const days = parseInt(document.getElementById('days').value);

    const totalDays = (years * 365) + (months * 30) + days;
    document.getElementById('result').textContent = `Your age in days is approximately: ${totalDays} days.`;
}