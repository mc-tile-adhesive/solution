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
const attention = document.querySelector('.attention')
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
  tileAreaRes = tileLength.value * tileWidth.value}
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
      tileWidth.value = ''     }
  }if(tileWidth.value == 0 || tileLength.value == 0){
    areaResult.innerHTML ="<p  style=' font-size:14px; color:red'> Insert tile length and width</p>"
  }else{
    areaResult.innerHTML = "<p  style=' font-size:14px; color:red'>Please consult MC-technical team If one side of the tile is higher than 120 cm.</p>"}})
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
      }
    })
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
   <h1>Selection Summary</h1>
   <table class="tabel">
    <tr><th>Area</th><td>${tileLengthValue}cm X ${tilewidthValue}cm</td>
    </tr>
    <tr><th>Thickness</th><td>${tileThickness.value}</td>
    </tr>
    <tr><th>Tile Type</th><td>${tileType.value}</td>
    </tr>
    <tr><th>Color</th><td>${tileColor.value}</td>
    </tr>
    <tr><th>Exposure to water</th><td>${exposureToWater.value}</td>
    </tr>
    <tr><th>Application area direction</th><td>${direction.value}</td>
    </tr>
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
          adhesive.odirection.includes(direction.value)
        )
        .map(adhesive => adhesive.oname);
       if (selected.length > 1) {
        resultViewer.innerHTML = ` 
        <div style='font-size: 30px';> <h3 style='text-align:center; margin-top: 100px;'> You can use <h3 class="ads"> ${selected.slice(0, 1)} </h3>  <h3 style='text-align:center;'>or</h3>  <h3 class="ads"> ${selected.slice(1, 2)} </h3><br> 
        ${adrs}
        <button class = 'refresh'; onclick = refresh() >Back to Home</button></div> 
        `;
      }else if(selected.length === 1){
        resultViewer.innerHTML = `<div style='font-size: 30px';><h3 style='text-align:center; margin-top: 100px;'>Only <h3 class="ads"> ${selected.slice(0, 1)}</h3></h3>
      <br>${adrs}
      <button class = 'refresh'; onclick = refresh() >Back to Home</button></div>`
      } else {
        resultViewer.innerHTML = `No suitable adhesive found. 
        <button class = 'refresh'; onclick = refresh() >Back to Home</button>`;
      }
    }

    const adrs = `  <div class="address">
            <h3>Our Sales Office</h3>
            <address>
              Furi, Tel: +25111111111, <br>
              Ayat, Tel: +25111111111, <br>
              Bulbula, Tel: +25111111111 <br>
            </address>
        </div>`