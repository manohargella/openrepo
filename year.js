function getYear() {
    const year = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = `&copy; ${year} OpenRepo.in All Rights Reserved`;
}

getYear();
