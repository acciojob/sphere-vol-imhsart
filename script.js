function volume_sphere(e) {
	e.preventDefault()
    //Write your code here
	let value = radius.value
	let volume = ((4/3) * Math.PI * value**3).toFixed(4)
	if(value != ''){
		volumeField.value = !parseInt(value) || value[0] == '-' ? NaN : volume;
	}
} 
let radius = document.getElementById('radius')
let volumeField = document.getElementById('volume')
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
