document.addEventListener('DOMContentLoaded', function () {
    fetchWaterUsage();
});

function fetchWaterUsage() {
    fetch('/api/waterusage')
        .then(response => response.json())
        .then(data => {
            const waterUsageList = document.getElementById('water-usage-list');
            waterUsageList.innerHTML = '';

            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'water-usage-item';
                div.innerHTML = `<strong>Description:</strong> ${item.description} <br> <strong>Volume:</strong> ${item.volume}`;
                waterUsageList.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching water usage data:', error));
}
