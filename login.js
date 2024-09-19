const cities = {
    gangwon: { name: "강원", region: ["교동", "근화동", "낙원동", "봉의동", "사농동", "삼천동", "석사동", "송암동", "신동", "약사동", "옥천동", "온의동", "요선동", "우두동", "운교동", "조양동", "죽림동", "중도동", "칠전동", "퇴계동", "효자동", "후평동"] },
    seoul: { name: "서울", region: [] }
};

function filterCities(cityInput) {
    const cityList = document.getElementById("city-list");
    cityList.textContent = '';

    Object.keys(cities).forEach(cityKey => {
        const city = cities[cityKey].name;
        if (city.includes(cityInput)) {
            const li = document.createElement('li');
            li.textContent = city;
            li.addEventListener('click', () => {
                document.getElementById('region-input').value = city;
                document.getElementById('region-box').style.display = 'none';
                displayRegions(cityKey);
            });
            cityList.appendChild(li);
        }
    });
}

function displayCities() {
    const cityList = document.getElementById("city-list");
    cityList.textContent = '';

    Object.keys(cities).forEach(cityKey => {
        const city = cities[cityKey].name;
        const li = document.createElement('li');

        li.textContent = city;
        li.addEventListener('click', () => {
            document.getElementById('region-input').value = city;
            document.getElementById('region-box').style.display = 'none';
            displayRegions(cityKey);
        });
        cityList.appendChild(li);
    });
}

function displayRegions(cityKey) {
    const regionList = document.getElementById("region-list");
    regionList.textContent = '';

    if (cities[cityKey].region) {
        cities[cityKey].region.forEach(region => {
            const li = document.createElement('li');
            li.textContent = region;
            li.addEventListener('click', () => {
                document.getElementById('region-input').value = region;
                document.getElementById('region-box').style.display = 'none';
            });
            regionList.appendChild(li);
        });
    }
}

document.getElementById("region-input").addEventListener("click", function() {
    const regionBox = document.getElementById("region-box");
    regionBox.style.display = 'block';

    const regionInput = this.value;
    if (regionInput.length > 0) {
        filterCities(regionInput);
    } else {
        displayCities();
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("region-box").style.display = 'none';
});

window.addEventListener("click", function(event) {
    const regionBox = document.getElementById("region-box");
    if (event.target === regionBox) {
        regionBox.style.display = 'none';
    }
});

window.onload = displayCities;
