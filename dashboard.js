const formatDate = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ' : ' + minutes + ' : ' + seconds + ' <small>' + ampm + '</small>';
}

document.querySelector('#clock').innerHTML = formatDate();

window.setInterval(() => document.querySelector('#clock').innerHTML = formatDate(), 1000);