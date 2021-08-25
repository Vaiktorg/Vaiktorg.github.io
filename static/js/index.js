// Zoom Controls
// ================================================================================
let zoomLevel = 1;


$('#controls').ready(()=>{
    $('#zoomLvl').html("<h5>"+zoomLevel.toFixed(1).toString()+"</h5>");
})


function ZoomIn() { updateZoom(0.1); }
function ZoomOut() { updateZoom(-0.1); }
function Center() {
    zoomLevel = 1.0;
    $('#zoomLvl').html("<h5>"+zoomLevel.toFixed(1).toString()+"</h5>");
    $('body').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
}

function updateZoom(zoom) {
    zoomLevel += zoom;
    $('#zoomLvl').html("<h5>"+zoomLevel.toFixed(1).toString()+"</h5>");
    $('body').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
}