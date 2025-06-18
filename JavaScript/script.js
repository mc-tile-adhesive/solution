//.............VARIABELS FOR BUTTONS...........
const checkBtn = document.getElementById('check-btn');
const resultViewerbtn = document.getElementById('result-viewer')
const verticalBtn = document.getElementById('vertical-btn');
const sizeBtn = document.getElementById('size-btn');
const typeBtn = document.getElementById('type-btn');
const colorBtn = document.getElementById('color-btn');
const areaBtn = document.getElementById('area-btn');
const calcBtn = document.getElementById('calulate')
const finalResult = document.getElementById('result-btn')
const typeBack = document.getElementById('type-back')
const colorBack = document.getElementById('color-back')
const areaBack = document.getElementById('area-back')
const directionBack = document.getElementById('direction-back')
//------------variabels for designe
const size = document.querySelector('.size');
const type = document.querySelector('.type');
const color = document.querySelector('.color');
const area = document.querySelector('.area');
const areaDirection = document.querySelector('.area-direction');
//.............VARIABELS FOR SELECTED ...........
const tileWidth = document.getElementById('tile-width')
const tileLength = document.getElementById('tile-length')
const tileThickness = document.getElementById('tile-thickness')
const tileType = document.getElementById('tile-type-ceramic')
const tileColor = document.getElementById('tile-color')
const exposureToWater = document.getElementById('exposure-to-water')
const direction = document.getElementById('direction')
const vertical = document.getElementById('vertical')
const applicationArea = document.getElementById('application-area')
const resultViewer = document.getElementById('spesification-container')
const areaResult = document.getElementById('area-result')
let tilewidthValue = 0
let tileLengthValue = 0
//---------FUNCTION-------------
let tileAreaRes = 0;
function areaCalculate(){
  tileAreaRes = tileLength.value * tileWidth.value
}
sizeBtn.addEventListener('click', function(){
  areaCalculate();
  if(tileWidth.value > 9 && tileWidth.value  < 121 &&
    tileLength.value > 9 && tileLength.value < 121){
    tilewidthValue = tileWidth.value
    tileLengthValue = tileLength.value
    if(tileAreaRes !== 0){
      type.style.display = 'block'
      size.style.display= 'none'
      tileLength.value = ''
      tileWidth.value = ''
     }}else{
    areaResult.innerHTML = "<p  style=' font-size:14px; color:red'> Insert width and length from 10 to 120cm</p>"
  }  
})
typeBtn.addEventListener('click', function(){
  color.style.display = 'block'
  type.style.display= 'none'
})
typeBack.addEventListener('click', function(){
  type.style.display = 'none'
  size.style.display= 'block'
  areaResult.innerHTML = ''
})
colorBtn.addEventListener('click', function(){
  area.style.display = 'block'
  color.style.display= 'none'
})
colorBack.addEventListener('click', function(){
  type.style.display = 'block'
  color.style.display= 'none'
})
let dirValue = direction.value
areaBtn.addEventListener('click', function (){
      if(exposureToWater.value.includes('Swimming pool')){
        direction.value = ''
        finalResultShow()
      }else{
        area.style.display = 'none'
        areaDirection.style.display = 'block'
      }})
areaBack.addEventListener('click', function (){
  area.style.display = 'none'
  color.style.display= 'block'
})
resultViewerbtn.addEventListener('click', finalResultShow)
directionBack.addEventListener('click', function (){
  area.style.display = 'block'
  areaDirection.style.display = 'none'
})
//-------------result functions---------
function finalResultShow(){
  resultViewer.innerHTML = `<div class="spesification">
   <h1>You selected</h1>
   <table class="tabel">
    <tr> <th>Area</th> <td>${tileAreaRes}</td>< /tr>
    <tr> <th>Thickness</th> <td>${tileThickness.value}</td> </tr>
    <tr> <th>Tile Type</th> <td>${tileType.value}</td> </tr>
    <tr> <th>Color</th> <td>${tileColor.value}</td> </tr>
    <tr> <th>Exposure to water</th> <td>${exposureToWater.value}</td> </tr>
    <tr> <th>Application area direction</th> <td>${direction.value}</td> </tr>
  </table> 
  <button class="check-btn" onclick="product()">Select</button>
  <h3 id='final-product'></h3>
  </div> 
  `}
function refresh(){
  location.reload();
}
const finalProduct = document.getElementById('final-product')
  function product(){
      let selected = adhesives
        .filter(adhesive => 
          tileLengthValue <= adhesive.omaxLength &&
          tilewidthValue <= adhesive.omaxLength &&
          tileAreaRes <= adhesive.otileArea &&
          adhesive.otileThickness.includes(tileThickness.value) &&
          adhesive.otileType.includes(tileType.value) &&
          adhesive.otileColor.includes(tileColor.value) &&
          adhesive.oexposureToWater.includes(exposureToWater.value) &&
          adhesive.odirection.includes(direction.value))
        .map(adhesive => adhesive.oname);
       if (selected.length > 1) {
        resultViewer.innerHTML = ` 
        <h3> You can use <h4 class="ads"> ${selected.slice(0, 1)} </h4>  <h4>or</h4>  <h4 class="ads"> ${selected.slice(1, 2)} </h4> <br> 
        <button class = 'refresh'; onclick = refresh() >Check again</button>
        `;
      }else if(selected.length === 1){
        resultViewer.innerHTML = `Only ${selected.slice(0, 1)}
        <button class = 'refresh'; onclick = refresh() >Check again</button>`
      } else {
        resultViewer.innerHTML = `No suitable adhesive found. 
        <button class = 'refresh'; onclick = refresh() >Check again</button>`;
      }
    }