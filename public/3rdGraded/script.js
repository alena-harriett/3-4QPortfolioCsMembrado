function plotPoint() {
    const n = Number(document.getElementById('x0').value);
    const m = Number(document.getElementById('y0').value);
    const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);

    document.getElementById('in1').innerHTML = `${n} ${m} ${x} ${y}`;
    
    const point = document.createElement('div');  
    point.className = 'point';
    
    point.style.left = (x - n + 200 - 5) + 'px'; 
    point.style.bottom = (y - m + 200 - 5) + 'px'; 
    
    document.getElementById('coordinatePlane').appendChild(point);

    let result = "";
    if (x === n || y === m) {
        result = "divisa";
    } else if (x > n && y > m) {
        result = "NE";
    } else if (x < n && y > m) {
        result = "NO";
    } else if (x > n && y < m) {
        result = "SE";
    } else if (x < n && y < m) {
        result = "SO";
    }
    
    document.getElementById('out1').innerHTML = result;
}