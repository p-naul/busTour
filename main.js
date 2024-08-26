const version = '1.12.1';
const iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
let api;
const uid = '552362960edf490ea3e0a8483a74bc59';

// var boutonAide = document.querySelector("input");

const error = () => window.console.error('Sketchfab API error');
const success = apiClient => {
api = apiClient; 

var hours = 0;
var minutes = 0;
var seconds = 0;
function addLeadingZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
}
setInterval(function() {  // Mise à jour du timer toutes les secondes
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    document.getElementById('timer').textContent = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
}, 1000);

// var btn = document.querySelector("input");
// btn.addEventListener("click", setInterval)
// function scenario() {

// }

//------------------------------------------------
api.start(function () {
api.addEventListener('viewerready', () => {
    // api.getNodeMap(function(err, nodes) {
    //     if (!err) {window.console.log(nodes); }
    // });

    api.addEventListener('click',function(info) { 
    if (info.instanceID) {  // le clic se fait effectivement sur un objet 
      const id =  info.instanceID;
      window.console.log('clicked node', info.instanceID);
            const camX = info.position3D[0];
            const camY = info.position3D[1];
            const camZ = info.position3D[2];
            api.setCameraLookAt([0, -1, 1], [camX, camY, camZ], 2, function(err) {}); //position cam, target,
            if ((id == 678) || (id == 168 ) || (id == 180 ) || (id == 247 ) || (id == 269 ) || (id == 291 ) || (id == 335 ) || (id == 313 ) || (id == 1024 ) || (id == 998 ) ) { moveToZero(id) }
            if ((id == 706) || (id == 722) || (id == 714 ) ) { moveToZero(706) }
    }
    }); 

}); // api.addEventListener('viewerready'
}); // api.start(
};


