let previousStyles = [];
let hoveredElements = [];

let objects = document.querySelectorAll("*");
let objLength = objects.length;
let i = 0;

for (i; i < objLength; i++) {
  setClass(objects[i]);
}

function setClass(object) {
  let UI = object.classList;
  if (UI.length != 0) {
    for (let a = 0; a < UI.length; a++) {
      let Param1 = UI[a]?.split("[")[1]?.split("]")[0];
      let Param2 = Param1?.split("-")[0];
      let Param3 = UI[a]?.split("[")[2]?.split("]")[0];
      let Param4 = UI[a]?.split("[")[3]?.split("]")[0];
      let ClassValue = UI[a]?.split("[")[1]?.split("]")[0];
      let Class = UI[a]?.split("[");
      object.style[Class[0]] = ClassValue;
      if (UI[a].includes("shadow")) {
        let shadowStyle;
        switch (Param2) {
          case "sm":
            shadowStyle = "0 1px 2px 0";
            break;
          case "md":
            shadowStyle = "0 4px 6px -1px";
            break;
          case "lg":
            shadowStyle = "0 10px 15px -3px";
            break;
          case "xl":
            shadowStyle = "0 20px 25px -5px";
            break;
          default:
            shadowStyle = `${Param2} ${Param2} ${Param2} ${Param2}`;
        }
        object.style.boxShadow = `${shadowStyle} ${Param3}`;
      }
      if (UI[a].includes("border")) {
        let borderStyle;
        switch (Param2) {
          case "sm":
            borderStyle = "1px";
            break;
          case "md":
            borderStyle = "2px";
            break;
          case "lg":
            borderStyle = "4px";
            break;
          case "xl":
            borderStyle = "6px";
            break;
          default:
            borderStyle = Param2;
        }
        if (Param4) {
          object.style.border = `${borderStyle} ${Param3} ${Param4}`;
        } else {
          object.style.border = `${borderStyle} ${Param3} solid`;
        }
      } else if (UI[a].includes("hover-")) {
        let hoverProp = UI[a].split("-")[1];
        let hoverStyle = hoverProp.split("-")[2];
        let propHover = object.getAttribute("hover");
        object.setAttribute("hover", `${propHover} ${UI[a]}`);
        let classList = object.className.split(" ");
        for (let i = 0; i < classList.length; i++) {
          if (classList[i].includes(hoverProp)) {
            let Value = classList[i].match(/\[(.*?)\]/)[1];
            previousStyles.push({
              att: UI[a],
              property: hoverProp,
              style: Value,
              name: UI[a],
            });
            break;
          }
        }
      }
    }
  }
}

document.addEventListener("mouseover", (e) => {
  let element = e.srcElement;
  let hovers = element.getAttribute("hover")?.split(" ");
  if (hovers?.length < 1) {
  } else {
    for (let i = 0; i < hovers?.length; i++) {
      let hoverProp = hovers[i]?.split("-")[1];
      let hoverStyle = hovers[i]?.split("-")[2];
      element.style[hoverProp] = hoverStyle;
    }
  }
});

document.addEventListener("mouseout", (e) => {
  let element = e.srcElement;
  let hover = element.getAttribute("hover");
  let hoverText = hover;
  let hovers = hoverText?.split(" ");
  if (hovers?.length < 1) {
  } else {
    for (let i = 0; i < hovers.length; i++) {
      let hoverProp = hovers[i]?.split("-")[1];
      let hoverStyle = hovers[i]?.split("-")[2];
      for (let a = 0; a < previousStyles.length; a++) {
        console.log(previousStyles[a].style);
        if (previousStyles[a].name == hovers[i]) {
          console.log(previousStyles[a].property)
          console.log(previousStyles[a].style)
          element.style[previousStyles[a].property] = previousStyles[a].style;
        }
      }
    }
  }
});

window.onload = addCSS();

function addCSS() {
  let css = `
*{
box-sizing:border-box;
margin:0;
padding:0;
}
.container-fluid{width:100%}
.container{
width:min(100% - 16vw);
margin-inline:auto;
}
/**Flex direction**/
/**Row**/
.row{
display:flex;
flex-wrap:wrap;
flex-direction:row;
}
.row-reverse{
display:flex;
flex-wrap:wrap;
flex-direction:row-reverse;
}
/**Column**/
.column{
display:flex;
flex-wrap:wrap;
flex-direction:column
}
.column-reverse{
display:flex;
flex-wrap:wrap;
flex-direction:column-reverse
}
.gap-5{gap:5px}
.gap-10{gap:10px}
/**Positions**/
.d-flex{display:flex;}
/**Justify content**/
.justify-content-start{justify-content:start}
.justify-content-center{justify-content:center}
.justify-content-beetween{justify-content:space-between}
.justify-content-around{justify-content:space-around}
.justify-content-evenly{justify-content:space-evenly}
/**Align items**/
.align-items-stretch{align-items:stretch}
.align-items-center{align-items:center}
.align-items-start{align-items:flex-start}
.align-items-end{align-items:flex-end}
/**Text-align**/
.center-text{text-align:center}
.start-text{text-align:left}
.end-text{text-align:right}
/**Positions end**/
/**Columns**/
/**cannot be changed**/
.col-1{width:8.33333333%}
.col-2{width:16.66666667%}
.col-3{width:25%}
.col-4{width:33.33333333%}
.col-5{width:41.66666667%}
.col-6{width:50%}
.col-7{width:58.33333333%}
.col-8{width:66.66666667%}
.col-9{width:75%}
.col-10{width:83.33333333%}
.col-11{width:91.66666667%}
.col-12{width:100%}
/**Very small**/
.col-sm-1{width:8.33333333%}
.col-sm-2{width:16.66666667%}
.col-sm-3{width:25%}
.col-sm-4{width:33.33333333%}
.col-sm-5{width:41.66666667%}
.col-sm-6{width:50%}
.col-sm-7{width:58.33333333%}
.col-sm-8{width:66.66666667%}
.col-sm-9{width:75%}
.col-sm-10{width:83.33333333%}
.col-sm-11{width:91.66666667%}
.col-sm-12{width:100%}
/**Small**/
.col-sw-1{width:8.33333333%}
.col-sw-2{width:16.66666667%}
.col-sw-3{width:25%}
.col-sw-4{width:33.33333333%}
.col-sw-5{width:41.66666667%}
.col-sw-6{width:50%}
.col-sw-7{width:58.33333333%}
.col-sw-8{width:66.66666667%}
.col-sw-9{width:75%}
.col-sw-10{width:83.33333333%}
.col-sw-11{width:91.66666667%}
.col-sw-12{width:100%}
/**Normal**/
.col-md-1{width:8.33333333%}
.col-md-2{width:16.66666667%}
.col-md-3{width:25%}
.col-md-4{width:33.33333333%}
.col-md-5{width:41.66666667%}
.col-md-6{width:50%}
.col-md-7{width:58.33333333%}
.col-md-8{width:66.66666667%}
.col-md-9{width:75%}
.col-md-10{width:83.33333333%}
.col-md-11{width:91.66666667%}
.col-md-12{width:100%}
/**Large**/
.col-lg-1{width:8.33333333%}
.col-lg-2{width:16.66666667%}
.col-lg-3{width:25%}
.col-lg-4{width:33.33333333%}
.col-lg-5{width:41.66666667%}
.col-lg-6{width:50%}
.col-lg-7{width:58.33333333%}
.col-lg-8{width:66.66666667%}
.col-lg-9{width:75%}
.col-lg-10{width:83.33333333%}
.col-lg-11{width:91.66666667%}
.col-lg-12{width:100%}
/**Extra Large**/
.col-xl-1{width:8.33333333%}
.col-xl-2{width:16.66666667%}
.col-xl-3{width:25%}
.col-xl-4{width:33.33333333%}
.col-xl-5{width:41.66666667%}
.col-xl-6{width:50%}
.col-xl-7{width:58.33333333%}
.col-xl-8{width:66.66666667%}
.col-xl-9{width:75%}
.col-xl-10{width:83.33333333%}
.col-xl-11{width:91.66666667%}
.col-xl-12{width:100%}
/**Widths**/
.w-100{width:100%}
.w-95{width:95%}
.w-90{width:90%}
.w-85{width:85%}
.w-80{width:80%}
.w-75{width:75%}
.w-70{width:70%}
.w-65{width:65%}
.w-60{width:60%}
.w-55{width:55%}
.w-50{width:50%}
.w-45{width:45%}
.w-40{width:40%}
.w-35{width:35%}
.w-30{width:30%}
.w-25{width:25%}
.w-20{width:20%}
.w-15{width:15%}
.w-10{width:10%}
.w-5{width:5%}
/**Responsive widths**/
/**Very Small**/
.w-sm-100{width:100%}
.w-sm-95{width:95%}
.w-sm-90{width:90%}
.w-sm-85{width:85%}
.w-sm-80{width:80%}
.w-sm-75{width:75%}
.w-sm-70{width:70%}
.w-sm-65{width:65%}
.w-sm-60{width:60%}
.w-sm-55{width:55%}
.w-sm-50{width:50%}
.w-sm-45{width:45%}
.w-sm-40{width:40%}
.w-sm-35{width:35%}
.w-sm-30{width:30%}
.w-sm-25{width:25%}
.w-sm-20{width:20%}
.w-sm-15{width:15%}
.w-sm-10{width:10%}
.w-sm-5{width:5%}
/**Small**/
.w-sw-100{width:100%}
.w-sw-95{width:95%}
.w-sw-90{width:90%}
.w-sw-85{width:85%}
.w-sw-80{width:80%}
.w-sw-75{width:75%}
.w-sw-70{width:70%}
.w-sw-65{width:65%}
.w-sw-60{width:60%}
.w-sw-55{width:55%}
.w-sw-50{width:50%}
.w-sw-45{width:45%}
.w-sw-40{width:40%}
.w-sw-35{width:35%}
.w-sw-30{width:30%}
.w-sw-25{width:25%}
.w-sw-20{width:20%}
.w-sw-15{width:15%}
.w-sw-10{width:10%}
.w-sw-5{width:5%}
/**Medium**/
.w-md-100{width:100%}
.w-md-95{width:95%}
.w-md-90{width:90%}
.w-md-85{width:85%}
.w-md-80{width:80%}
.w-md-75{width:75%}
.w-md-70{width:70%}
.w-md-65{width:65%}
.w-md-60{width:60%}
.w-md-55{width:55%}
.w-md-50{width:50%}
.w-md-45{width:45%}
.w-md-40{width:40%}
.w-md-35{width:35%}
.w-md-30{width:30%}
.w-md-25{width:25%}
.w-md-20{width:20%}
.w-md-15{width:15%}
.w-md-10{width:10%}
.w-md-5{width:5%}
/**Large**/
.w-lg-100{width:100%}
.w-lg-95{width:95%}
.w-lg-90{width:90%}
.w-lg-85{width:85%}
.w-lg-80{width:80%}
.w-lg-75{width:75%}
.w-lg-70{width:70%}
.w-lg-65{width:65%}
.w-lg-60{width:60%}
.w-lg-55{width:55%}
.w-lg-50{width:50%}
.w-lg-45{width:45%}
.w-lg-40{width:40%}
.w-lg-35{width:35%}
.w-lg-30{width:30%}
.w-lg-25{width:25%}
.w-lg-20{width:20%}
.w-lg-15{width:15%}
.w-lg-10{width:10%}
.w-lg-5{width:5%}
/**Extra large**/
.w-xl-100{width:100%}
.w-xl-95{width:95%}
.w-xl-90{width:90%}
.w-xl-85{width:85%}
.w-xl-80{width:80%}
.w-xl-75{width:75%}
.w-xl-70{width:70%}
.w-xl-65{width:65%}
.w-xl-60{width:60%}
.w-xl-55{width:55%}
.w-xl-50{width:50%}
.w-xl-45{width:45%}
.w-xl-40{width:40%}
.w-xl-35{width:35%}
.w-xl-30{width:30%}
.w-xl-25{width:25%}
.w-xl-20{width:20%}
.w-xl-15{width:15%}
.w-xl-10{width:10%}
.w-xl-5{width:5%}
/**Responsive**/
@media only screen and (min-width:10px){
.pad-sm-5,.pad-sm-10,.pad-sm-15,.pad-sm-20,.pad-sm-25,.pad-sm-30,.pad-sm-35,.pad-sm-40,.pad-sm-45,.pad-sm-50{padding:0}
.pad-sm-l-5,.pad-sm-l-10,.pad-sm-l-15,.pad-sm-l-20,.pad-sm-l-25,.pad-sm-l-30,.pad-sm-l-35,.pad-sm-l-40,.pad-sm-l-45,.pad-sm-l-50{padding:0}
.pad-sm-r-5,.pad-sm-r-10,.pad-sm-r-15,.pad-sm-r-20,.pad-sm-r-25,.pad-sm-r-30,.pad-sm-r-35,.pad-sm-r-40,.pad-sm-r-45,.pad-sm-r-50{padding:0}
.pad-sm-t-5,.pad-sm-t-10,.pad-sm-t-15,.pad-sm-t-20,.pad-sm-t-25,.pad-sm-t-30,.pad-sm-t-35,.pad-sm-t-40,.pad-sm-t-45,.pad-sm-t-50{padding:0} 
.pad-sm-b-5,.pad-sm-b-10,.pad-sm-b-15,.pad-sm-b-20,.pad-sm-b-25,.pad-sm-b-30,.pad-sm-b-35,.pad-sm-b-40,.pad-sm-b-45,.pad-sm-b-50{padding:0}  
.pad-sw-5,.pad-sw-10,.pad-sw-15,.pad-sw-20,.pad-sw-25,.pad-sw-30,.pad-sw-35,.pad-sw-40,.pad-sw-45,.pad-sw-50{padding:0}
.pad-sw-l-5,.pad-sw-l-10,.pad-sw-l-15,.pad-sw-l-20,.pad-sw-l-25,.pad-sw-l-30,.pad-sw-l-35,.pad-sw-l-40,.pad-sw-l-45,.pad-sw-l-50{padding:0}
.pad-sw-r-5,.pad-sw-r-10,.pad-sw-r-15,.pad-sw-r-20,.pad-sw-r-25,.pad-sw-r-30,.pad-sw-r-35,.pad-sw-r-40,.pad-sw-r-45,.pad-sw-r-50{padding:0}
.pad-sw-t-5,.pad-sw-t-10,.pad-sw-t-15,.pad-sw-t-20,.pad-sw-t-25,.pad-sw-t-30,.pad-sw-t-35,.pad-sw-t-40,.pad-sw-t-45,.pad-sw-t-50{padding:0} 
.pad-sw-b-5,.pad-sw-b-10,.pad-sw-b-15,.pad-sw-b-20,.pad-sw-b-25,.pad-sw-b-30,.pad-sw-b-35,.pad-sw-b-40,.pad-sw-b-45,.pad-sw-b-50{padding:0}  
.pad-md-5,.pad-md-10,.pad-md-15,.pad-md-20,.pad-md-25,.pad-md-30,.pad-md-35,.pad-md-40,.pad-md-45,.pad-md-50{padding:0}
.pad-md-l-5,.pad-md-l-10,.pad-md-l-15,.pad-md-l-20,.pad-md-l-25,.pad-md-l-30,.pad-md-l-35,.pad-md-l-40,.pad-md-l-45,.pad-md-l-50{padding:0}
.pad-md-r-5,.pad-md-r-10,.pad-md-r-15,.pad-md-r-20,.pad-md-r-25,.pad-md-r-30,.pad-md-r-35,.pad-md-r-40,.pad-md-r-45,.pad-md-r-50{padding:0}
.pad-md-t-5,.pad-md-t-10,.pad-md-t-15,.pad-md-t-20,.pad-md-t-25,.pad-md-t-30,.pad-md-t-35,.pad-md-t-40,.pad-md-t-45,.pad-md-t-50{padding:0} 
.pad-md-b-5,.pad-md-b-10,.pad-md-b-15,.pad-md-b-20,.pad-md-b-25,.pad-md-b-30,.pad-md-b-35,.pad-md-b-40,.pad-md-b-45,.pad-md-b-50{padding:0}  
.pad-lg-5,.pad-lg-10,.pad-lg-15,.pad-lg-20,.pad-lg-25,.pad-lg-30,.pad-lg-35,.pad-lg-40,.pad-lg-45,.pad-lg-50{padding:0}
.pad-lg-l-5,.pad-lg-l-10,.pad-lg-l-15,.pad-lg-l-20,.pad-lg-l-25,.pad-lg-l-30,.pad-lg-l-35,.pad-lg-l-40,.pad-lg-l-45,.pad-lg-l-50{padding:0}
.pad-lg-r-5,.pad-lg-r-10,.pad-lg-r-15,.pad-lg-r-20,.pad-lg-r-25,.pad-lg-r-30,.pad-lg-r-35,.pad-lg-r-40,.pad-lg-r-45,.pad-lg-r-50{padding:0}
.pad-lg-t-5,.pad-lg-t-10,.pad-lg-t-15,.pad-lg-t-20,.pad-lg-t-25,.pad-lg-t-30,.pad-lg-t-35,.pad-lg-t-40,.pad-lg-t-45,.pad-lg-t-50{padding:0} 
.pad-lg-b-5,.pad-lg-b-10,.pad-lg-b-15,.pad-lg-b-20,.pad-lg-b-25,.pad-lg-b-30,.pad-lg-b-35,.pad-lg-b-40,.pad-lg-b-45,.pad-lg-b-50{padding:0}
.pad-xl-5,.pad-xl-10,.pad-xl-15,.pad-xl-20,.pad-xl-25,.pad-xl-30,.pad-xl-35,.pad-xl-40,.pad-xl-45,.pad-xl-50{padding:0}
.pad-xl-l-5,.pad-xl-l-10,.pad-xl-l-15,.pad-xl-l-20,.pad-xl-l-25,.pad-xl-l-30,.pad-xl-l-35,.pad-xl-l-40,.pad-xl-l-45,.pad-xl-l-50{padding:0}
.pad-xl-r-5,.pad-xl-r-10,.pad-xl-r-15,.pad-xl-r-20,.pad-xl-r-25,.pad-xl-r-30,.pad-xl-r-35,.pad-xl-r-40,.pad-xl-r-45,.pad-xl-r-50{padding:0}
.pad-xl-t-5,.pad-xl-t-10,.pad-xl-t-15,.pad-xl-t-20,.pad-xl-t-25,.pad-xl-t-30,.pad-xl-t-35,.pad-xl-t-40,.pad-xl-t-45,.pad-xl-t-50{padding:0} 
.pad-xl-b-5,.pad-xl-b-10,.pad-xl-b-15,.pad-xl-b-20,.pad-xl-b-25,.pad-xl-b-30,.pad-xl-b-35,.pad-xl-b-40,.pad-xl-b-45,.pad-xl-b-50{padding:0}
.mar-sm-5,.mar-sm-10,.mar-sm-15,.mar-sm-20,.mar-sm-25,.mar-sm-30,.mar-sm-35,.mar-sm-40,.mar-sm-45,.mar-sm-50{margin:0}
.mar-sm-l-5,.mar-sm-l-10,.mar-sm-l-15,.mar-sm-l-20,.mar-sm-l-25,.mar-sm-l-30,.mar-sm-l-35,.mar-sm-l-40,.mar-sm-l-45,.mar-sm-l-50{margin:0}
.mar-sm-r-5,.mar-sm-r-10,.mar-sm-r-15,.mar-sm-r-20,.mar-sm-r-25,.mar-sm-r-30,.mar-sm-r-35,.mar-sm-r-40,.mar-sm-r-45,.mar-sm-r-50{margin:0}
.mar-sm-t-5,.mar-sm-t-10,.mar-sm-t-15,.mar-sm-t-20,.mar-sm-t-25,.mar-sm-t-30,.mar-sm-t-35,.mar-sm-t-40,.mar-sm-t-45,.mar-sm-t-50{margin:0} 
.mar-sm-b-5,.mar-sm-b-10,.mar-sm-b-15,.mar-sm-b-20,.mar-sm-b-25,.mar-sm-b-30,.mar-sm-b-35,.mar-sm-b-40,.mar-sm-b-45,.mar-sm-b-50{margin:0}  
.mar-sw-5,.mar-sw-10,.mar-sw-15,.mar-sw-20,.mar-sw-25,.mar-sw-30,.mar-sw-35,.mar-sw-40,.mar-sw-45,.mar-sw-50{margin:0}
.mar-sw-l-5,.mar-sw-l-10,.mar-sw-l-15,.mar-sw-l-20,.mar-sw-l-25,.mar-sw-l-30,.mar-sw-l-35,.mar-sw-l-40,.mar-sw-l-45,.mar-sw-l-50{margin:0}
.mar-sw-r-5,.mar-sw-r-10,.mar-sw-r-15,.mar-sw-r-20,.mar-sw-r-25,.mar-sw-r-30,.mar-sw-r-35,.mar-sw-r-40,.mar-sw-r-45,.mar-sw-r-50{margin:0}
.mar-sw-t-5,.mar-sw-t-10,.mar-sw-t-15,.mar-sw-t-20,.mar-sw-t-25,.mar-sw-t-30,.mar-sw-t-35,.mar-sw-t-40,.mar-sw-t-45,.mar-sw-t-50{margin:0} 
.mar-sw-b-5,.mar-sw-b-10,.mar-sw-b-15,.mar-sw-b-20,.mar-sw-b-25,.mar-sw-b-30,.mar-sw-b-35,.mar-sw-b-40,.mar-sw-b-45,.mar-sw-b-50{margin:0}  
.mar-md-5,.mar-md-10,.mar-md-15,.mar-md-20,.mar-md-25,.mar-md-30,.mar-md-35,.mar-md-40,.mar-md-45,.mar-md-50{margin:0}
.mar-md-l-5,.mar-md-l-10,.mar-md-l-15,.mar-md-l-20,.mar-md-l-25,.mar-md-l-30,.mar-md-l-35,.mar-md-l-40,.mar-md-l-45,.mar-md-l-50{margin:0}
.mar-md-r-5,.mar-md-r-10,.mar-md-r-15,.mar-md-r-20,.mar-md-r-25,.mar-md-r-30,.mar-md-r-35,.mar-md-r-40,.mar-md-r-45,.mar-md-r-50{margin:0}
.mar-md-t-5,.mar-md-t-10,.mar-md-t-15,.mar-md-t-20,.mar-md-t-25,.mar-md-t-30,.mar-md-t-35,.mar-md-t-40,.mar-md-t-45,.mar-md-t-50{margin:0} 
.mar-md-b-5,.mar-md-b-10,.mar-md-b-15,.mar-md-b-20,.mar-md-b-25,.mar-md-b-30,.mar-md-b-35,.mar-md-b-40,.mar-md-b-45,.mar-md-b-50{margin:0}  
.mar-lg-5,.mar-lg-10,.mar-lg-15,.mar-lg-20,.mar-lg-25,.mar-lg-30,.mar-lg-35,.mar-lg-40,.mar-lg-45,.mar-lg-50{margin:0}
.mar-lg-l-5,.mar-lg-l-10,.mar-lg-l-15,.mar-lg-l-20,.mar-lg-l-25,.mar-lg-l-30,.mar-lg-l-35,.mar-lg-l-40,.mar-lg-l-45,.mar-lg-l-50{margin:0}
.mar-lg-r-5,.mar-lg-r-10,.mar-lg-r-15,.mar-lg-r-20,.mar-lg-r-25,.mar-lg-r-30,.mar-lg-r-35,.mar-lg-r-40,.mar-lg-r-45,.mar-lg-r-50{margin:0}
.mar-lg-t-5,.mar-lg-t-10,.mar-lg-t-15,.mar-lg-t-20,.mar-lg-t-25,.mar-lg-t-30,.mar-lg-t-35,.mar-lg-t-40,.mar-lg-t-45,.mar-lg-t-50{margin:0} 
.mar-lg-b-5,.mar-lg-b-10,.mar-lg-b-15,.mar-lg-b-20,.mar-lg-b-25,.mar-lg-b-30,.mar-lg-b-35,.mar-lg-b-40,.mar-lg-b-45,.mar-lg-b-50{margin:0}
.mar-xl-5,.mar-xl-10,.mar-xl-15,.mar-xl-20,.mar-xl-25,.mar-xl-30,.mar-xl-35,.mar-xl-40,.mar-xl-45,.mar-xl-50{margin:0}
.mar-xl-l-5,.mar-xl-l-10,.mar-xl-l-15,.mar-xl-l-20,.mar-xl-l-25,.mar-xl-l-30,.mar-xl-l-35,.mar-xl-l-40,.mar-xl-l-45,.mar-xl-l-50{margin:0}
.mar-xl-r-5,.mar-xl-r-10,.mar-xl-r-15,.mar-xl-r-20,.mar-xl-r-25,.mar-xl-r-30,.mar-xl-r-35,.mar-xl-r-40,.mar-xl-r-45,.mar-xl-r-50{margin:0}
.mar-xl-t-5,.mar-xl-t-10,.mar-xl-t-15,.mar-xl-t-20,.mar-xl-t-25,.mar-xl-t-30,.mar-xl-t-35,.mar-xl-t-40,.mar-xl-t-45,.mar-xl-t-50{margin:0} 
.mar-xl-b-5,.mar-xl-b-10,.mar-xl-b-15,.mar-xl-b-20,.mar-xl-b-25,.mar-xl-b-30,.mar-xl-b-35,.mar-xl-b-40,.mar-xl-b-45,.mar-xl-b-50{margin:0}
.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12{width:100%}
.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{width:100%}
.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{width:100%}
.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{width:100%}
.col-sw-1,.col-sw-2,.col-sw-3,.col-sw-4,.col-sw-5,.col-sw-6,.col-sw-7,.col-sw-8,.col-sw-9,.col-sw-10,.col-sw-11,.col-sw-12{width:100%}
.w-xl-5,.w-xl-10,.w-xl-15,.w-xl-20,.w-xl-25,.w-xl-30,.w-xl-35,.w-xl-40,.w-xl-45,.w-xl-50,.w-xl-55,.w-xl-60,.w-xl-65,.w-xl-70,.w-xl-75,.w-xl-80,.w-xl-85,.w-xl-90,.w-xl-95,.w-xl-100{width:100%}
.w-lg-5,.w-lg-10,.w-lg-15,.w-lg-20,.w-lg-25,.w-lg-30,.w-lg-35,.w-lg-40,.w-lg-45,.w-lg-50,.w-lg-55,.w-lg-60,.w-lg-65,.w-lg-70,.w-lg-75,.w-lg-80,.w-lg-85,.w-lg-90,.w-lg-95,.w-lg-100{width:100%}
.w-md-5,.w-md-10,.w-md-15,.w-md-20,.w-md-25,.w-md-30,.w-md-35,.w-md-40,.w-md-45,.w-md-50,.w-md-55,.w-md-60,.w-md-65,.w-md-70,.w-md-75,.w-md-80,.w-md-85,.w-md-90,.w-md-95,.w-md-100{width:100%}
.w-sw-5,.w-sw-10,.w-sw-15,.w-sw-20,.w-sw-25,.w-sw-30,.w-sw-35,.w-sw-40,.w-sw-45,.w-sw-50,.w-sw-55,.w-sw-60,.w-sw-65,.w-sw-70,.w-sw-75,.w-sw-80,.w-sw-85,.w-sw-90,.w-sw-95,.w-sw-100{width:100%}
.w-sm-5,.w-sm-10,.w-sm-15,.w-sm-20,.w-sm-25,.w-sm-30,.w-sm-35,.w-sm-40,.w-sm-45,.w-sm-50,.w-sm-55,.w-sm-60,.w-sm-65,.w-sm-70,.w-sm-75,.w-sm-80,.w-sm-85,.w-sm-90,.w-sm-95,.w-sm-100{width:100%}
.rounded-xl{border-radius:none}
.container{width:100%}
}
@media only screen and (min-width:576px){
.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12{width:100%}
.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{width:100%}
.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{width:100%}
.col-sm-1{width:8.33333333%}
.col-sm-2{width:16.66666667%}
.col-sm-3{width:25%}
.col-sm-4{width:33.33333333%}
.col-sm-5{width:41.66666667%}
.col-sm-6{width:50%}
.col-sm-7{width:58.33333333%}
.col-sm-8{width:66.66666667%}
.col-sm-9{width:75%}
.col-sm-10{width:83.33333333%}
.col-sm-11{width:91.66666667%}
.col-sm-12{width:100%}
.gap-5 .col-sm-1{width:calc(8.33333333% - 5px)}
.gap-5 .col-sm-2{width:calc(16.66666667% - 5px)}
.gap-5 .col-sm-3{width:calc(25% - 5px)}
.gap-5 .col-sm-4{width:calc(33.33333333% - 5px)}
.gap-5 .col-sm-5{width:calc(41.66666667% - 5px)}
.gap-5 .col-sm-6{width:calc(50% - 5px)}
.gap-5 .col-sm-7{width:calc(58.33333333% - 5px)}
.gap-5 .col-sm-8{width:calc(66.66666667% - 5px)}
.gap-5 .col-sm-9{width:calc(75% - 5px)}
.gap-5 .col-sm-10{width:calc(83.33333333% - 5px)}
.gap-5 .col-sm-11{width:calc(91.66666667% - 5px)}
.gap-5 .col-sm-12{width:calc(100% - 5px)}
.gap-10 .col-sm-1{width:calc(8.33333333% - 10px)}
.gap-10 .col-sm-2{width:calc(16.66666667% - 10px)}
.gap-10 .col-sm-3{width:calc(25% - 10px)}
.gap-10 .col-sm-4{width:calc(33.33333333% - 10px)}
.gap-10 .col-sm-5{width:calc(41.66666667% - 10px)}
.gap-10 .col-sm-6{width:calc(50% - 10px)}
.gap-10 .col-sm-7{width:calc(58.33333333% - 10px)}
.gap-10 .col-sm-8{width:calc(66.66666667% - 10px)}
.gap-10 .col-sm-9{width:calc(75% - 10px)}
.gap-10 .col-sm-10{width:calc(83.33333333% - 10px)}
.gap-10 .col-sm-11{width:calc(91.66666667% - 10px)}
.gap-10 .col-sm-12{width:calc(100% - 10px)}
.w-xl-5,.w-xl-10,.w-xl-15,.w-xl-20,.w-xl-25,.w-xl-30,.w-xl-35,.w-xl-40,.w-xl-45,.w-xl-50,.w-xl-55,.w-xl-60,.w-xl-65,.w-xl-70,.w-xl-75,.w-xl-80,.w-xl-85,.w-xl-90,.w-xl-95,.w-xl-100{width:100%}
.w-lg-5,.w-lg-10,.w-lg-15,.w-lg-20,.w-lg-25,.w-lg-30,.w-lg-35,.w-lg-40,.w-lg-45,.w-lg-50,.w-lg-55,.w-lg-60,.w-lg-65,.w-lg-70,.w-lg-75,.w-lg-80,.w-lg-85,.w-lg-90,.w-lg-95,.w-lg-100{width:100%}
.w-md-5,.w-md-10,.w-md-15,.w-md-20,.w-md-25,.w-md-30,.w-md-35,.w-md-40,.w-md-45,.w-md-50,.w-md-55,.w-md-60,.w-md-65,.w-md-70,.w-md-75,.w-md-80,.w-md-85,.w-md-90,.w-md-95,.w-md-100{width:100%}
.w-sm-100{width:100%}
.w-sm-95{width:95%}
.w-sm-90{width:90%}
.w-sm-85{width:85%}
.w-sm-80{width:80%}
.w-sm-75{width:75%}
.w-sm-70{width:70%}
.w-sm-65{width:65%}
.w-sm-60{width:60%}
.w-sm-55{width:55%}
.w-sm-50{width:50%}
.w-sm-45{width:45%}
.w-sm-40{width:40%}
.w-sm-35{width:35%}
.w-sm-30{width:30%}
.w-sm-25{width:25%}
.w-sm-20{width:20%}
.w-sm-15{width:15%}
.w-sm-10{width:10%}
.w-sm-5{width:5%}
.gap-5 .w-sm-100{width:calc(100% - 5px)}
.gap-5 .w-sm-95{width:calc(95% - 5px)}
.gap-5 .w-sm-90{width:calc(90% - 5px)}
.gap-5 .w-sm-85{width:calc(85% - 5px)}
.gap-5 .w-sm-80{width:calc(80% - 5px)}
.gap-5 .w-sm-75{width:calc(75% - 5px)}
.gap-5 .w-sm-70{width:calc(70% - 5px)}
.gap-5 .w-sm-65{width:calc(65% - 5px)}
.gap-5 .w-sm-60{width:calc(60% - 5px)}
.gap-5 .w-sm-55{width:calc(55% - 5px)}
.gap-5 .w-sm-50{width:calc(50% - 5px)}
.gap-5 .w-sm-45{width:calc(45% - 5px)}
.gap-5 .w-sm-40{width:calc(40% - 5px)}
.gap-5 .w-sm-35{width:calc(35% - 5px)}
.gap-5 .w-sm-30{width:calc(30% - 5px)}
.gap-5 .w-sm-25{width:calc(25% - 5px)}
.gap-5 .w-sm-20{width:calc(20% - 5px)}
.gap-5 .w-sm-15{width:calc(15% - 5px)}
.gap-5 .w-sm-10{width:calc(10% - 5px)}
.gap-5 .w-sm-5{width:calc(5% - 5px)}
.gap-10 .w-sm-100{width:calc(100% - 10px)}
.gap-10 .w-sm-95{width:calc(95% - 10px)}
.gap-10 .w-sm-90{width:calc(90% - 10px)}
.gap-10 .w-sm-85{width:calc(85% - 10px)}
.gap-10 .w-sm-80{width:calc(80% - 10px)}
.gap-10 .w-sm-75{width:calc(75% - 10px)}
.gap-10 .w-sm-70{width:calc(70% - 10px)}
.gap-10 .w-sm-65{width:calc(65% - 10px)}
.gap-10 .w-sm-60{width:calc(60% - 10px)}
.gap-10 .w-sm-55{width:calc(55% - 10px)}
.gap-10 .w-sm-50{width:calc(50% - 10px)}
.gap-10 .w-sm-45{width:calc(45% - 10px)}
.gap-10 .w-sm-40{width:calc(40% - 10px)}
.gap-10 .w-sm-35{width:calc(35% - 10px)}
.gap-10 .w-sm-30{width:calc(30% - 10px)}
.gap-10 .w-sm-25{width:calc(25% - 10px)}
.gap-10 .w-sm-20{width:calc(20% - 10px)}
.gap-10 .w-sm-15{width:calc(15% - 10px)}
.gap-10 .w-sm-10{width:calc(10% - 10px)}
.gap-10 .w-sm-5{width:calc(5% - 10px)}
.pad-sw-5,.pad-sw-10,.pad-sw-15,.pad-sw-20,.pad-sw-25,.pad-sw-30,.pad-sw-35,.pad-sw-40,.pad-sw-45,.pad-sw-50{padding:0}
.pad-sw-l-5,.pad-sw-l-10,.pad-sw-l-15,.pad-sw-l-20,.pad-sw-l-25,.pad-sw-l-30,.pad-sw-l-35,.pad-sw-l-40,.pad-sw-l-45,.pad-sw-l-50{padding:0}
.pad-sw-r-5,.pad-sw-r-10,.pad-sw-r-15,.pad-sw-r-20,.pad-sw-r-25,.pad-sw-r-30,.pad-sw-r-35,.pad-sw-r-40,.pad-sw-r-45,.pad-sw-r-50{padding:0}
.pad-sw-t-5,.pad-sw-t-10,.pad-sw-t-15,.pad-sw-t-20,.pad-sw-t-25,.pad-sw-t-30,.pad-sw-t-35,.pad-sw-t-40,.pad-sw-t-45,.pad-sw-t-50{padding:0} 
.pad-sw-b-5,.pad-sw-b-10,.pad-sw-b-15,.pad-sw-b-20,.pad-sw-b-25,.pad-sw-b-30,.pad-sw-b-35,.pad-sw-b-40,.pad-sw-b-45,.pad-sw-b-50{padding:0}  
.pad-md-5,.pad-md-10,.pad-md-15,.pad-md-20,.pad-md-25,.pad-md-30,.pad-md-35,.pad-md-40,.pad-md-45,.pad-md-50{padding:0}
.pad-md-l-5,.pad-md-l-10,.pad-md-l-15,.pad-md-l-20,.pad-md-l-25,.pad-md-l-30,.pad-md-l-35,.pad-md-l-40,.pad-md-l-45,.pad-md-l-50{padding:0}
.pad-md-r-5,.pad-md-r-10,.pad-md-r-15,.pad-md-r-20,.pad-md-r-25,.pad-md-r-30,.pad-md-r-35,.pad-md-r-40,.pad-md-r-45,.pad-md-r-50{padding:0}
.pad-md-t-5,.pad-md-t-10,.pad-md-t-15,.pad-md-t-20,.pad-md-t-25,.pad-md-t-30,.pad-md-t-35,.pad-md-t-40,.pad-md-t-45,.pad-md-t-50{padding:0} 
.pad-md-b-5,.pad-md-b-10,.pad-md-b-15,.pad-md-b-20,.pad-md-b-25,.pad-md-b-30,.pad-md-b-35,.pad-md-b-40,.pad-md-b-45,.pad-md-b-50{padding:0}  
.pad-lg-5,.pad-lg-10,.pad-lg-15,.pad-lg-20,.pad-lg-25,.pad-lg-30,.pad-lg-35,.pad-lg-40,.pad-lg-45,.pad-lg-50{padding:0}
.pad-lg-l-5,.pad-lg-l-10,.pad-lg-l-15,.pad-lg-l-20,.pad-lg-l-25,.pad-lg-l-30,.pad-lg-l-35,.pad-lg-l-40,.pad-lg-l-45,.pad-lg-l-50{padding:0}
.pad-lg-r-5,.pad-lg-r-10,.pad-lg-r-15,.pad-lg-r-20,.pad-lg-r-25,.pad-lg-r-30,.pad-lg-r-35,.pad-lg-r-40,.pad-lg-r-45,.pad-lg-r-50{padding:0}
.pad-lg-t-5,.pad-lg-t-10,.pad-lg-t-15,.pad-lg-t-20,.pad-lg-t-25,.pad-lg-t-30,.pad-lg-t-35,.pad-lg-t-40,.pad-lg-t-45,.pad-lg-t-50{padding:0} 
.pad-lg-b-5,.pad-lg-b-10,.pad-lg-b-15,.pad-lg-b-20,.pad-lg-b-25,.pad-lg-b-30,.pad-lg-b-35,.pad-lg-b-40,.pad-lg-b-45,.pad-lg-b-50{padding:0}
.pad-xl-5,.pad-xl-10,.pad-xl-15,.pad-xl-20,.pad-xl-25,.pad-xl-30,.pad-xl-35,.pad-xl-40,.pad-xl-45,.pad-xl-50{padding:0}
.pad-xl-l-5,.pad-xl-l-10,.pad-xl-l-15,.pad-xl-l-20,.pad-xl-l-25,.pad-xl-l-30,.pad-xl-l-35,.pad-xl-l-40,.pad-xl-l-45,.pad-xl-l-50{padding:0}
.pad-xl-r-5,.pad-xl-r-10,.pad-xl-r-15,.pad-xl-r-20,.pad-xl-r-25,.pad-xl-r-30,.pad-xl-r-35,.pad-xl-r-40,.pad-xl-r-45,.pad-xl-r-50{padding:0}
.pad-xl-t-5,.pad-xl-t-10,.pad-xl-t-15,.pad-xl-t-20,.pad-xl-t-25,.pad-xl-t-30,.pad-xl-t-35,.pad-xl-t-40,.pad-xl-t-45,.pad-xl-t-50{padding:0} 
.pad-xl-b-5,.pad-xl-b-10,.pad-xl-b-15,.pad-xl-b-20,.pad-xl-b-25,.pad-xl-b-30,.pad-xl-b-35,.pad-xl-b-40,.pad-xl-b-45,.pad-xl-b-50{padding:0}  
.pad-sm-50{padding:50px}
.pad-sm-45{padding:45px}
.pad-sm-40{padding:40px}
.pad-sm-35{padding:35px}
.pad-sm-30{padding:30px}
.pad-sm-25{padding:25px}
.pad-sm-20{padding:20px}
.pad-sm-15{padding:15px}
.pad-sm-10{padding:10px}
.pad-sm-5{padding:5px}
.pad-l-sm-50{padding-left:50px}
.pad-l-sm-45{padding-left:45px}
.pad-l-sm-40{padding-left:40px}
.pad-l-sm-35{padding-left:35px}
.pad-l-sm-30{padding-left:30px}
.pad-l-sm-25{padding-left:25px}
.pad-l-sm-20{padding-left:20px}
.pad-l-sm-15{padding-left:15px}
.pad-l-sm-10{padding-left:10px}
.pad-l-sm-5{padding-left:5px}
.pad-r-sm-50{padding-right:50px}
.pad-r-sm-45{padding-right:45px}
.pad-r-sm-40{padding-right:40px}
.pad-r-sm-35{padding-right:35px}
.pad-r-sm-30{padding-right:30px}
.pad-r-sm-25{padding-right:25px}
.pad-r-sm-20{padding-right:20px}
.pad-r-sm-15{padding-right:15px}
.pad-r-sm-10{padding-right:10px}
.pad-r-sm-5{padding-right:5px}
.pad-t-sm-50{padding-top:50px}
.pad-t-sm-45{padding-top:45px}
.pad-t-sm-40{padding-top:40px}
.pad-t-sm-35{padding-top:35px}
.pad-t-sm-30{padding-top:30px}
.pad-t-sm-25{padding-top:25px}
.pad-t-sm-20{padding-top:20px}
.pad-t-sm-15{padding-top:15px}
.pad-t-sm-10{padding-top:10px}
.pad-t-sm-5{padding-top:5px}
.pad-b-sm-50{padding-bottom:50px}
.pad-b-sm-45{padding-bottom:45px}
.pad-b-sm-40{padding-bottom:40px}
.pad-b-sm-35{padding-bottom:35px}
.pad-b-sm-30{padding-bottom:30px}
.pad-b-sm-25{padding-bottom:25px}
.pad-b-sm-20{padding-bottom:20px}
.pad-b-sm-15{padding-bottom:15px}
.pad-b-sm-10{padding-bottom:10px}
.pad-b-sm-5{padding-bottom:5px}
.mar-sw-5,.mar-sw-10,.mar-sw-15,.mar-sw-20,.mar-sw-25,.mar-sw-30,.mar-sw-35,.mar-sw-40,.mar-sw-45,.mar-sw-50{margin:0}
.mar-sw-l-5,.mar-sw-l-10,.mar-sw-l-15,.mar-sw-l-20,.mar-sw-l-25,.mar-sw-l-30,.mar-sw-l-35,.mar-sw-l-40,.mar-sw-l-45,.mar-sw-l-50{margin:0}
.mar-sw-r-5,.mar-sw-r-10,.mar-sw-r-15,.mar-sw-r-20,.mar-sw-r-25,.mar-sw-r-30,.mar-sw-r-35,.mar-sw-r-40,.mar-sw-r-45,.mar-sw-r-50{margin:0}
.mar-sw-t-5,.mar-sw-t-10,.mar-sw-t-15,.mar-sw-t-20,.mar-sw-t-25,.mar-sw-t-30,.mar-sw-t-35,.mar-sw-t-40,.mar-sw-t-45,.mar-sw-t-50{margin:0} 
.mar-sw-b-5,.mar-sw-b-10,.mar-sw-b-15,.mar-sw-b-20,.mar-sw-b-25,.mar-sw-b-30,.mar-sw-b-35,.mar-sw-b-40,.mar-sw-b-45,.mar-sw-b-50{margin:0}  
.mar-md-5,.mar-md-10,.mar-md-15,.mar-md-20,.mar-md-25,.mar-md-30,.mar-md-35,.mar-md-40,.mar-md-45,.mar-md-50{margin:0}
.mar-md-l-5,.mar-md-l-10,.mar-md-l-15,.mar-md-l-20,.mar-md-l-25,.mar-md-l-30,.mar-md-l-35,.mar-md-l-40,.mar-md-l-45,.mar-md-l-50{margin:0}
.mar-md-r-5,.mar-md-r-10,.mar-md-r-15,.mar-md-r-20,.mar-md-r-25,.mar-md-r-30,.mar-md-r-35,.mar-md-r-40,.mar-md-r-45,.mar-md-r-50{margin:0}
.mar-md-t-5,.mar-md-t-10,.mar-md-t-15,.mar-md-t-20,.mar-md-t-25,.mar-md-t-30,.mar-md-t-35,.mar-md-t-40,.mar-md-t-45,.mar-md-t-50{margin:0} 
.mar-md-b-5,.mar-md-b-10,.mar-md-b-15,.mar-md-b-20,.mar-md-b-25,.mar-md-b-30,.mar-md-b-35,.mar-md-b-40,.mar-md-b-45,.mar-md-b-50{margin:0}  
.mar-lg-5,.mar-lg-10,.mar-lg-15,.mar-lg-20,.mar-lg-25,.mar-lg-30,.mar-lg-35,.mar-lg-40,.mar-lg-45,.mar-lg-50{margin:0}
.mar-lg-l-5,.mar-lg-l-10,.mar-lg-l-15,.mar-lg-l-20,.mar-lg-l-25,.mar-lg-l-30,.mar-lg-l-35,.mar-lg-l-40,.mar-lg-l-45,.mar-lg-l-50{margin:0}
.mar-lg-r-5,.mar-lg-r-10,.mar-lg-r-15,.mar-lg-r-20,.mar-lg-r-25,.mar-lg-r-30,.mar-lg-r-35,.mar-lg-r-40,.mar-lg-r-45,.mar-lg-r-50{margin:0}
.mar-lg-t-5,.mar-lg-t-10,.mar-lg-t-15,.mar-lg-t-20,.mar-lg-t-25,.mar-lg-t-30,.mar-lg-t-35,.mar-lg-t-40,.mar-lg-t-45,.mar-lg-t-50{margin:0} 
.mar-lg-b-5,.mar-lg-b-10,.mar-lg-b-15,.mar-lg-b-20,.mar-lg-b-25,.mar-lg-b-30,.mar-lg-b-35,.mar-lg-b-40,.mar-lg-b-45,.mar-lg-b-50{margin:0}
.mar-xl-5,.mar-xl-10,.mar-xl-15,.mar-xl-20,.mar-xl-25,.mar-xl-30,.mar-xl-35,.mar-xl-40,.mar-xl-45,.mar-xl-50{margin:0}
.mar-xl-l-5,.mar-xl-l-10,.mar-xl-l-15,.mar-xl-l-20,.mar-xl-l-25,.mar-xl-l-30,.mar-xl-l-35,.mar-xl-l-40,.mar-xl-l-45,.mar-xl-l-50{margin:0}
.mar-xl-r-5,.mar-xl-r-10,.mar-xl-r-15,.mar-xl-r-20,.mar-xl-r-25,.mar-xl-r-30,.mar-xl-r-35,.mar-xl-r-40,.mar-xl-r-45,.mar-xl-r-50{margin:0}
.mar-xl-t-5,.mar-xl-t-10,.mar-xl-t-15,.mar-xl-t-20,.mar-xl-t-25,.mar-xl-t-30,.mar-xl-t-35,.mar-xl-t-40,.mar-xl-t-45,.mar-xl-t-50{margin:0} 
.mar-xl-b-5,.mar-xl-b-10,.mar-xl-b-15,.mar-xl-b-20,.mar-xl-b-25,.mar-xl-b-30,.mar-xl-b-35,.mar-xl-b-40,.mar-xl-b-45,.mar-xl-b-50{margin:0}
.mar-sm-50{margin:50px}
.mar-sm-45{margin:45px}
.mar-sm-40{margin:40px}
.mar-sm-35{margin:35px}
.mar-sm-30{margin:30px}
.mar-sm-25{margin:25px}
.mar-sm-20{margin:20px}
.mar-sm-15{margin:15px}
.mar-sm-10{margin:10px}
.mar-sm-5{margin:5px}
.mar-l-sm-50{margin-left:50px}
.mar-l-sm-45{margin-left:45px}
.mar-l-sm-40{margin-left:40px}
.mar-l-sm-35{margin-left:35px}
.mar-l-sm-30{margin-left:30px}
.mar-l-sm-25{margin-left:25px}
.mar-l-sm-20{margin-left:20px}
.mar-l-sm-15{margin-left:15px}
.mar-l-sm-10{margin-left:10px}
.mar-l-sm-5{margin-left:5px}
.mar-r-sm-50{margin-right:50px}
.mar-r-sm-45{margin-right:45px}
.mar-r-sm-40{margin-right:40px}
.mar-r-sm-35{margin-right:35px}
.mar-r-sm-30{margin-right:30px}
.mar-r-sm-25{margin-right:25px}
.mar-r-sm-20{margin-right:20px}
.mar-r-sm-15{margin-right:15px}
.mar-r-sm-10{margin-right:10px}
.mar-r-sm-5{margin-right:5px}
.mar-t-sm-50{margin-top:50px}
.mar-t-sm-45{margin-top:45px}
.mar-t-sm-40{margin-top:40px}
.mar-t-sm-35{margin-top:35px}
.mar-t-sm-30{margin-top:30px}
.mar-t-sm-25{margin-top:25px}
.mar-t-sm-20{margin-top:20px}
.mar-t-sm-15{margin-top:15px}
.mar-t-sm-10{margin-top:10px}
.mar-t-sm-5{margin-top:5px}
.mar-b-sm-50{margin-bottom:50px}
.mar-b-sm-45{margin-bottom:45px}
.mar-b-sm-40{margin-bottom:40px}
.mar-b-sm-35{margin-bottom:35px}
.mar-b-sm-30{margin-bottom:30px}
.mar-b-sm-25{margin-bottom:25px}
.mar-b-sm-20{margin-bottom:20px}
.mar-b-sm-15{margin-bottom:15px}
.mar-b-sm-10{margin-bottom:10px}
.mar-b-sm-5{margin-bottom:5px}
.rounded-xl{border-radius:0px}
.rounded-sm{border-radius:4px}
.invisible-sm{display:none}
}
@media only screen and (min-width:768px){
.w-xl-5,.w-xl-10,.w-xl-15,.w-xl-20,.w-xl-25,.w-xl-30,.w-xl-35,.w-xl-40,.w-xl-45,.w-xl-50,.w-xl-55,.w-xl-60,.w-xl-65,.w-xl-70,.w-xl-75,.w-xl-80,.w-xl-85,.w-xl-90,.w-xl-95,.w-xl-100{width:100%}
.w-lg-5,.w-lg-10,.w-lg-15,.w-lg-20,.w-lg-25,.w-lg-30,.w-lg-35,.w-lg-40,.w-lg-45,.w-lg-50,.w-lg-55,.w-lg-60,.w-lg-65,.w-lg-70,.w-lg-75,.w-lg-80,.w-lg-85,.w-lg-90,.w-lg-95,.w-lg-100{width:100%}
.col-sw-1{width:8.33333333%}
.col-sw-2{width:16.66666667%}
.col-sw-3{width:25%}
.col-sw-4{width:33.33333333%}
.col-sw-5{width:41.66666667%}
.col-sw-6{width:50%}
.col-sw-7{width:58.33333333%}
.col-sw-8{width:66.66666667%}
.col-sw-9{width:75%}
.col-sw-10{width:83.33333333%}
.col-sw-11{width:91.66666667%}
.col-sw-12{width:100%}
.gap-5 .col-sw-1{width:calc(8.33333333% - 5px)}
.gap-5 .col-sw-2{width:calc(16.66666667% - 5px)}
.gap-5 .col-sw-3{width:calc(25% - 5px)}
.gap-5 .col-sw-4{width:calc(33.33333333% - 5px)}
.gap-5 .col-sw-5{width:calc(41.66666667% - 5px)}
.gap-5 .col-sw-6{width:calc(50% - 5px)}
.gap-5 .col-sw-7{width:calc(58.33333333% - 5px)}
.gap-5 .col-sw-8{width:calc(66.66666667% - 5px)}
.gap-5 .col-sw-9{width:calc(75% - 5px)}
.gap-5 .col-sw-10{width:calc(83.33333333% - 5px)}
.gap-5 .col-sw-11{width:calc(91.66666667% - 5px)}
.gap-5 .col-sw-12{width:calc(100% - 5px)}
.gap-10 .col-sw-1{width:calc(8.33333333% - 10px)}
.gap-10 .col-sw-2{width:calc(16.66666667% - 10px)}
.gap-10 .col-sw-3{width:calc(25% - 10px)}
.gap-10 .col-sw-4{width:calc(33.33333333% - 10px)}
.gap-10 .col-sw-5{width:calc(41.66666667% - 10px)}
.gap-10 .col-sw-6{width:calc(50% - 10px)}
.gap-10 .col-sw-7{width:calc(58.33333333% - 10px)}
.gap-10 .col-sw-8{width:calc(66.66666667% - 10px)}
.gap-10 .col-sw-9{width:calc(75% - 10px)}
.gap-10 .col-sw-10{width:calc(83.33333333% - 10px)}
.gap-10 .col-sw-11{width:calc(91.66666667% - 10px)}
.gap-10 .col-sw-12{width:calc(100% - 10px)}
.col-md-1{width:8.33333333%}
.col-md-2{width:16.66666667%}
.col-md-3{width:25%}
.col-md-4{width:33.33333333%}
.col-md-5{width:41.66666667%}
.col-md-6{width:50%}
.col-md-7{width:58.33333333%}
.col-md-8{width:66.66666667%}
.col-md-9{width:75%}
.col-md-10{width:83.33333333%}
.col-md-11{width:91.66666667%}
.col-md-12{width:100%}
.gap-5 .col-md-1{width:calc(8.33333333% - 5px)}
.gap-5 .col-md-2{width:calc(16.66666667% - 5px)}
.gap-5 .col-md-3{width:calc(25% - 5px)}
.gap-5 .col-md-4{width:calc(33.33333333% - 5px)}
.gap-5 .col-md-5{width:calc(41.66666667% - 5px)}
.gap-5 .col-md-6{width:calc(50% - 5px)}
.gap-5 .col-md-7{width:calc(58.33333333% - 5px)}
.gap-5 .col-md-8{width:calc(66.66666667% - 5px)}
.gap-5 .col-md-9{width:calc(75% - 5px)}
.gap-5 .col-md-10{width:calc(83.33333333% - 5px)}
.gap-5 .col-md-11{width:calc(91.66666667% - 5px)}
.gap-5 .col-md-12{width:calc(100% - 5px)}
.gap-10 .col-md-1{width:calc(8.33333333% - 10px)}
.gap-10 .col-md-2{width:calc(16.66666667% - 10px)}
.gap-10 .col-md-3{width:calc(25% - 10px)}
.gap-10 .col-md-4{width:calc(33.33333333% - 10px)}
.gap-10 .col-md-5{width:calc(41.66666667% - 10px)}
.gap-10 .col-md-6{width:calc(50% - 10px)}
.gap-10 .col-md-7{width:calc(58.33333333% - 10px)}
.gap-10 .col-md-8{width:calc(66.66666667% - 10px)}
.gap-10 .col-md-9{width:calc(75% - 10px)}
.gap-10 .col-md-10{width:calc(83.33333333% - 10px)}
.gap-10 .col-md-11{width:calc(91.66666667% - 10px)}
.gap-10 .col-md-12{width:calc(100% - 10px)}
.w-xl-1,.w-xl-2,.w-xl-3,.w-xl-4,.w-xl-5,.w-xl-6,.w-xl-7,.w-xl-8,.w-xl-9,.w-xl-10,.w-xl-11,.w-xl-12{width:100%}
.w-lg-1,.w-lg-2,.w-lg-3,.w-lg-4,.w-lg-5,.w-lg-6,.w-lg-7,.w-lg-8,.w-lg-9,.w-lg-10,.w-lg-11,.w-lg-12{width:100%}
.w-sw-100{width:100%}
.w-sw-95{width:95%}
.w-sw-90{width:90%}
.w-sw-85{width:85%}
.w-sw-80{width:80%}
.w-sw-75{width:75%}
.w-sw-70{width:70%}
.w-sw-65{width:65%}
.w-sw-60{width:60%}
.w-sw-55{width:55%}
.w-sw-50{width:50%}
.w-sw-45{width:45%}
.w-sw-40{width:40%}
.w-sw-35{width:35%}
.w-sw-30{width:30%}
.w-sw-25{width:25%}
.w-sw-20{width:20%}
.w-sw-15{width:15%}
.w-sw-10{width:10%}
.w-sw-5{width:5%}
.gap-5 .w-sw-100{width:calc(100% - 5px)}
.gap-5 .w-sw-95{width:calc(95% - 5px)}
.gap-5 .w-sw-90{width:calc(90% - 5px)}
.gap-5 .w-sw-85{width:calc(85% - 5px)}
.gap-5 .w-sw-80{width:calc(80% - 5px)}
.gap-5 .w-sw-75{width:calc(75% - 5px)}
.gap-5 .w-sw-70{width:calc(70% - 5px)}
.gap-5 .w-sw-65{width:calc(65% - 5px)}
.gap-5 .w-sw-60{width:calc(60% - 5px)}
.gap-5 .w-sw-55{width:calc(55% - 5px)}
.gap-5 .w-sw-50{width:calc(50% - 5px)}
.gap-5 .w-sw-45{width:calc(45% - 5px)}
.gap-5 .w-sw-40{width:calc(40% - 5px)}
.gap-5 .w-sw-35{width:calc(35% - 5px)}
.gap-5 .w-sw-30{width:calc(30% - 5px)}
.gap-5 .w-sw-25{width:calc(25% - 5px)}
.gap-5 .w-sw-20{width:calc(20% - 5px)}
.gap-5 .w-sw-15{width:calc(15% - 5px)}
.gap-5 .w-sw-10{width:calc(10% - 5px)}
.gap-5 .w-sw-5{width:calc(5% - 5px)}
.gap-10 .w-sw-100{width:calc(100% - 10px)}
.gap-10 .w-sw-95{width:calc(95% - 10px)}
.gap-10 .w-sw-90{width:calc(90% - 10px)}
.gap-10 .w-sw-85{width:calc(85% - 10px)}
.gap-10 .w-sw-80{width:calc(80% - 10px)}
.gap-10 .w-sw-75{width:calc(75% - 10px)}
.gap-10 .w-sw-70{width:calc(70% - 10px)}
.gap-10 .w-sw-65{width:calc(65% - 10px)}
.gap-10 .w-sw-60{width:calc(60% - 10px)}
.gap-10 .w-sw-55{width:calc(55% - 10px)}
.gap-10 .w-sw-50{width:calc(50% - 10px)}
.gap-10 .w-sw-45{width:calc(45% - 10px)}
.gap-10 .w-sw-40{width:calc(40% - 10px)}
.gap-10 .w-sw-35{width:calc(35% - 10px)}
.gap-10 .w-sw-30{width:calc(30% - 10px)}
.gap-10 .w-sw-25{width:calc(25% - 10px)}
.gap-10 .w-sw-20{width:calc(20% - 10px)}
.gap-10 .w-sw-15{width:calc(15% - 10px)}
.gap-10 .w-sw-10{width:calc(10% - 10px)}
.gap-10 .w-sw-5{width:calc(5% - 10px)}
.w-md-100{width:100%}
.w-md-95{width:95%}
.w-md-90{width:90%}
.w-md-85{width:85%}
.w-md-80{width:80%}
.w-md-75{width:75%}
.w-md-70{width:70%}
.w-md-65{width:65%}
.w-md-60{width:60%}
.w-md-55{width:55%}
.w-md-50{width:50%}
.w-md-45{width:45%}
.w-md-40{width:40%}
.w-md-35{width:35%}
.w-md-30{width:30%}
.w-md-25{width:25%}
.w-md-20{width:20%}
.w-md-15{width:15%}
.w-md-10{width:10%}
.w-md-5{width:5%}
.gap-5 .w-md-100{width:calc(100% - 5px)}
.gap-5 .w-md-95{width:calc(95% - 5px)}
.gap-5 .w-md-90{width:calc(90% - 5px)}
.gap-5 .w-md-85{width:calc(85% - 5px)}
.gap-5 .w-md-80{width:calc(80% - 5px)}
.gap-5 .w-md-75{width:calc(75% - 5px)}
.gap-5 .w-md-70{width:calc(70% - 5px)}
.gap-5 .w-md-65{width:calc(65% - 5px)}
.gap-5 .w-md-60{width:calc(60% - 5px)}
.gap-5 .w-md-55{width:calc(55% - 5px)}
.gap-5 .w-md-50{width:calc(50% - 5px)}
.gap-5 .w-md-45{width:calc(45% - 5px)}
.gap-5 .w-md-40{width:calc(40% - 5px)}
.gap-5 .w-md-35{width:calc(35% - 5px)}
.gap-5 .w-md-30{width:calc(30% - 5px)}
.gap-5 .w-md-25{width:calc(25% - 5px)}
.gap-5 .w-md-20{width:calc(20% - 5px)}
.gap-5 .w-md-15{width:calc(15% - 5px)}
.gap-5 .w-md-10{width:calc(10% - 5px)}
.gap-5 .w-md-5{width:calc(5% - 5px)}
.gap-10 .w-md-100{width:calc(100% - 10px)}
.gap-10 .w-md-95{width:calc(95% - 10px)}
.gap-10 .w-md-90{width:calc(90% - 10px)}
.gap-10 .w-md-85{width:calc(85% - 10px)}
.gap-10 .w-md-80{width:calc(80% - 10px)}
.gap-10 .w-md-75{width:calc(75% - 10px)}
.gap-10 .w-md-70{width:calc(70% - 10px)}
.gap-10 .w-md-65{width:calc(65% - 10px)}
.gap-10 .w-md-60{width:calc(60% - 10px)}
.gap-10 .w-md-55{width:calc(55% - 10px)}
.gap-10 .w-md-50{width:calc(50% - 10px)}
.gap-10 .w-md-45{width:calc(45% - 10px)}
.gap-10 .w-md-40{width:calc(40% - 10px)}
.gap-10 .w-md-35{width:calc(35% - 10px)}
.gap-10 .w-md-30{width:calc(30% - 10px)}
.gap-10 .w-md-25{width:calc(25% - 10px)}
.gap-10 .w-md-20{width:calc(20% - 10px)}
.gap-10 .w-md-15{width:calc(15% - 10px)}
.gap-10 .w-md-10{width:calc(10% - 10px)}
.gap-10 .w-md-5{width:calc(5% - 10px)}
.pad-lg-5,.pad-lg-10,.pad-lg-15,.pad-lg-20,.pad-lg-25,.pad-lg-30,.pad-lg-35,.pad-lg-40,.pad-lg-45,.pad-lg-50{padding:0}
.pad-lg-l-5,.pad-lg-l-10,.pad-lg-l-15,.pad-lg-l-20,.pad-lg-l-25,.pad-lg-l-30,.pad-lg-l-35,.pad-lg-l-40,.pad-lg-l-45,.pad-lg-l-50{padding:0}
.pad-lg-r-5,.pad-lg-r-10,.pad-lg-r-15,.pad-lg-r-20,.pad-lg-r-25,.pad-lg-r-30,.pad-lg-r-35,.pad-lg-r-40,.pad-lg-r-45,.pad-lg-r-50{padding:0}
.pad-lg-t-5,.pad-lg-t-10,.pad-lg-t-15,.pad-lg-t-20,.pad-lg-t-25,.pad-lg-t-30,.pad-lg-t-35,.pad-lg-t-40,.pad-lg-t-45,.pad-lg-t-50{padding:0} 
.pad-lg-b-5,.pad-lg-b-10,.pad-lg-b-15,.pad-lg-b-20,.pad-lg-b-25,.pad-lg-b-30,.pad-lg-b-35,.pad-lg-b-40,.pad-lg-b-45,.pad-lg-b-50{padding:0}
.pad-xl-5,.pad-xl-10,.pad-xl-15,.pad-xl-20,.pad-xl-25,.pad-xl-30,.pad-xl-35,.pad-xl-40,.pad-xl-45,.pad-xl-50{padding:0}
.pad-xl-l-5,.pad-xl-l-10,.pad-xl-l-15,.pad-xl-l-20,.pad-xl-l-25,.pad-xl-l-30,.pad-xl-l-35,.pad-xl-l-40,.pad-xl-l-45,.pad-xl-l-50{padding:0}
.pad-xl-r-5,.pad-xl-r-10,.pad-xl-r-15,.pad-xl-r-20,.pad-xl-r-25,.pad-xl-r-30,.pad-xl-r-35,.pad-xl-r-40,.pad-xl-r-45,.pad-xl-r-50{padding:0}
.pad-xl-t-5,.pad-xl-t-10,.pad-xl-t-15,.pad-xl-t-20,.pad-xl-t-25,.pad-xl-t-30,.pad-xl-t-35,.pad-xl-t-40,.pad-xl-t-45,.pad-xl-t-50{padding:0} 
.pad-xl-b-5,.pad-xl-b-10,.pad-xl-b-15,.pad-xl-b-20,.pad-xl-b-25,.pad-xl-b-30,.pad-xl-b-35,.pad-xl-b-40,.pad-xl-b-45,.pad-xl-b-50{padding:0}
.pad-sw-50{padding:50px}
.pad-sw-45{padding:45px}
.pad-sw-40{padding:40px}
.pad-sw-35{padding:35px}
.pad-sw-30{padding:30px}
.pad-sw-25{padding:25px}
.pad-sw-20{padding:20px}
.pad-sw-15{padding:15px}
.pad-sw-10{padding:10px}
.pad-sw-5{padding:5px}
.pad-md-50{padding:50px}
.pad-md-45{padding:45px}
.pad-md-40{padding:40px}
.pad-md-35{padding:35px}
.pad-md-30{padding:30px}
.pad-md-25{padding:25px}
.pad-md-20{padding:20px}
.pad-md-15{padding:15px}
.pad-md-10{padding:10px}
.pad-md-5{padding:5px}
.pad-l-sw-50{padding-left:50px}
.pad-l-sw-45{padding-left:45px}
.pad-l-sw-40{padding-left:40px}
.pad-l-sw-35{padding-left:35px}
.pad-l-sw-30{padding-left:30px}
.pad-l-sw-25{padding-left:25px}
.pad-l-sw-20{padding-left:20px}
.pad-l-sw-15{padding-left:15px}
.pad-l-sw-10{padding-left:10px}
.pad-l-sw-5{padding-left:5px}
.pad-l-md-50{padding-left:50px}
.pad-l-md-45{padding-left:45px}
.pad-l-md-40{padding-left:40px}
.pad-l-md-35{padding-left:35px}
.pad-l-md-30{padding-left:30px}
.pad-l-md-25{padding-left:25px}
.pad-l-md-20{padding-left:20px}
.pad-l-md-15{padding-left:15px}
.pad-l-md-10{padding-left:10px}
.pad-l-md-5{padding-left:5px}
.mar-lg-5,.mar-lg-10,.mar-lg-15,.mar-lg-20,.mar-lg-25,.mar-lg-30,.mar-lg-35,.mar-lg-40,.mar-lg-45,.mar-lg-50{margin:0}
.mar-lg-l-5,.mar-lg-l-10,.mar-lg-l-15,.mar-lg-l-20,.mar-lg-l-25,.mar-lg-l-30,.mar-lg-l-35,.mar-lg-l-40,.mar-lg-l-45,.mar-lg-l-50{margin:0}
.mar-lg-r-5,.mar-lg-r-10,.mar-lg-r-15,.mar-lg-r-20,.mar-lg-r-25,.mar-lg-r-30,.mar-lg-r-35,.mar-lg-r-40,.mar-lg-r-45,.mar-lg-r-50{margin:0}
.mar-lg-t-5,.mar-lg-t-10,.mar-lg-t-15,.mar-lg-t-20,.mar-lg-t-25,.mar-lg-t-30,.mar-lg-t-35,.mar-lg-t-40,.mar-lg-t-45,.mar-lg-t-50{margin:0} 
.mar-lg-b-5,.mar-lg-b-10,.mar-lg-b-15,.mar-lg-b-20,.mar-lg-b-25,.mar-lg-b-30,.mar-lg-b-35,.mar-lg-b-40,.mar-lg-b-45,.mar-lg-b-50{margin:0}
.mar-xl-5,.mar-xl-10,.mar-xl-15,.mar-xl-20,.mar-xl-25,.mar-xl-30,.mar-xl-35,.mar-xl-40,.mar-xl-45,.mar-xl-50{margin:0}
.mar-xl-l-5,.mar-xl-l-10,.mar-xl-l-15,.mar-xl-l-20,.mar-xl-l-25,.mar-xl-l-30,.mar-xl-l-35,.mar-xl-l-40,.mar-xl-l-45,.mar-xl-l-50{margin:0}
.mar-xl-r-5,.mar-xl-r-10,.mar-xl-r-15,.mar-xl-r-20,.mar-xl-r-25,.mar-xl-r-30,.mar-xl-r-35,.mar-xl-r-40,.mar-xl-r-45,.mar-xl-r-50{margin:0}
.mar-xl-t-5,.mar-xl-t-10,.mar-xl-t-15,.mar-xl-t-20,.mar-xl-t-25,.mar-xl-t-30,.mar-xl-t-35,.mar-xl-t-40,.mar-xl-t-45,.mar-xl-t-50{margin:0} 
.mar-xl-b-5,.mar-xl-b-10,.mar-xl-b-15,.mar-xl-b-20,.mar-xl-b-25,.mar-xl-b-30,.mar-xl-b-35,.mar-xl-b-40,.mar-xl-b-45,.mar-xl-b-50{margin:0}
.mar-sw-50{margin:50px}
.mar-sw-45{margin:45px}
.mar-sw-40{margin:40px}
.mar-sw-35{margin:35px}
.mar-sw-30{margin:30px}
.mar-sw-25{margin:25px}
.mar-sw-20{margin:20px}
.mar-sw-15{margin:15px}
.mar-sw-10{margin:10px}
.mar-sw-5{margin:5px}
.mar-l-sw-50{margin-left:50px}
.mar-l-sw-45{margin-left:45px}
.mar-l-sw-40{margin-left:40px}
.mar-l-sw-35{margin-left:35px}
.mar-l-sw-30{margin-left:30px}
.mar-l-sw-25{margin-left:25px}
.mar-l-sw-20{margin-left:20px}
.mar-l-sw-15{margin-left:15px}
.mar-l-sw-10{margin-left:10px}
.mar-l-sw-5{margin-left:5px}
.mar-r-sw-50{margin-right:50px}
.mar-r-sw-45{margin-right:45px}
.mar-r-sw-40{margin-right:40px}
.mar-r-sw-35{margin-right:35px}
.mar-r-sw-30{margin-right:30px}
.mar-r-sw-25{margin-right:25px}
.mar-r-sw-20{margin-right:20px}
.mar-r-sw-15{margin-right:15px}
.mar-r-sw-10{margin-right:10px}
.mar-r-sw-5{margin-right:5px}
.mar-t-sw-50{margin-top:50px}
.mar-t-sw-45{margin-top:45px}
.mar-t-sw-40{margin-top:40px}
.mar-t-sw-35{margin-top:35px}
.mar-t-sw-30{margin-top:30px}
.mar-t-sw-25{margin-top:25px}
.mar-t-sw-20{margin-top:20px}
.mar-t-sw-15{margin-top:15px}
.mar-t-sw-10{margin-top:10px}
.mar-t-sw-5{margin-top:5px}
.mar-b-sw-50{margin-bottom:50px}
.mar-b-sw-45{margin-bottom:45px}
.mar-b-sw-40{margin-bottom:40px}
.mar-b-sw-35{margin-bottom:35px}
.mar-b-sw-30{margin-bottom:30px}
.mar-b-sw-25{margin-bottom:25px}
.mar-b-sw-20{margin-bottom:20px}
.mar-b-sw-15{margin-bottom:15px}
.mar-b-sw-10{margin-bottom:10px}
.mar-b-sw-5{margin-bottom:5px}
.mar-md-50{margin:50px}
.mar-md-45{margin:45px}
.mar-md-40{margin:40px}
.mar-md-35{margin:35px}
.mar-md-30{margin:30px}
.mar-md-25{margin:25px}
.mar-md-20{margin:20px}
.mar-md-15{margin:15px}
.mar-md-10{margin:10px}
.mar-md-5{margin:5px}
.mar-l-md-50{margin-left:50px}
.mar-l-md-45{margin-left:45px}
.mar-l-md-40{margin-left:40px}
.mar-l-md-35{margin-left:35px}
.mar-l-md-30{margin-left:30px}
.mar-l-md-25{margin-left:25px}
.mar-l-md-20{margin-left:20px}
.mar-l-md-15{margin-left:15px}
.mar-l-md-10{margin-left:10px}
.mar-l-md-5{margin-left:5px}
.mar-r-md-50{margin-right:50px}
.mar-r-md-45{margin-right:45px}
.mar-r-md-40{margin-right:40px}
.mar-r-md-35{margin-right:35px}
.mar-r-md-30{margin-right:30px}
.mar-r-md-25{margin-right:25px}
.mar-r-md-20{margin-right:20px}
.mar-r-md-15{margin-right:15px}
.mar-r-md-10{margin-right:10px}
.mar-r-md-5{margin-right:5px}
.mar-t-md-50{margin-top:50px}
.mar-t-md-45{margin-top:45px}
.mar-t-md-40{margin-top:40px}
.mar-t-md-35{margin-top:35px}
.mar-t-md-30{margin-top:30px}
.mar-t-md-25{margin-top:25px}
.mar-t-md-20{margin-top:20px}
.mar-t-md-15{margin-top:15px}
.mar-t-md-10{margin-top:10px}
.mar-t-md-5{margin-top:5px}
.mar-b-md-50{margin-bottom:50px}
.mar-b-md-45{margin-bottom:45px}
.mar-b-md-40{margin-bottom:40px}
.mar-b-md-35{margin-bottom:35px}
.mar-b-md-30{margin-bottom:30px}
.mar-b-md-25{margin-bottom:25px}
.mar-b-md-20{margin-bottom:20px}
.mar-b-md-15{margin-bottom:15px}
.mar-b-md-10{margin-bottom:10px}
.mar-b-md-5{margin-bottom:5px}
.container{
width:min(100% - 16vw);
margin-inline:auto;
}
.invisible-sw{display:none}
.invisible-md{display:none}
.rounded-sw{border-radius:4px}
.rounded-md{border-radius:4px}
.rounded-xl{border-radius:0px}
}
@media only screen and (min-width:920px){
.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12{width:100%}
.col-lg-1{width:8.33333333%}
.col-lg-2{width:16.66666667%}
.col-lg-3{width:25%}
.col-lg-4{width:33.33333333%}
.col-lg-5{width:41.66666667%}
.col-lg-6{width:50%}
.col-lg-7{width:58.33333333%}
.col-lg-8{width:66.66666667%}
.col-lg-9{width:75%}
.col-lg-10{width:83.33333333%}
.col-lg-11{width:91.66666667%}
.col-lg-12{width:100%}
.gap-5 .col-lg-1{width:calc(8.33333333% - 5px)}
.gap-5 .col-lg-2{width:calc(16.66666667% - 5px)}
.gap-5 .col-lg-3{width:calc(25% - 5px)}
.gap-5 .col-lg-4{width:calc(33.33333333% - 5px)}
.gap-5 .col-lg-5{width:calc(41.66666667% - 5px)}
.gap-5 .col-lg-6{width:calc(50% - 5px)}
.gap-5 .col-lg-7{width:calc(58.33333333% - 5px)}
.gap-5 .col-lg-8{width:calc(66.66666667% - 5px)}
.gap-5 .col-lg-9{width:calc(75% - 5px)}
.gap-5 .col-lg-10{width:calc(83.33333333% - 5px)}
.gap-5 .col-lg-11{width:calc(91.66666667% - 5px)}
.gap-5 .col-lg-12{width:calc(100% - 5px)}
.gap-10 .col-lg-1{width:calc(8.33333333% - 10px)}
.gap-10 .col-lg-2{width:calc(16.66666667% - 10px)}
.gap-10 .col-lg-3{width:calc(25% - 10px)}
.gap-10 .col-lg-4{width:calc(33.33333333% - 10px)}
.gap-10 .col-lg-5{width:calc(41.66666667% - 10px)}
.gap-10 .col-lg-6{width:calc(50% - 10px)}
.gap-10 .col-lg-7{width:calc(58.33333333% - 10px)}
.gap-10 .col-lg-8{width:calc(66.66666667% - 10px)}
.gap-10 .col-lg-9{width:calc(75% - 10px)}
.gap-10 .col-lg-10{width:calc(83.33333333% - 10px)}
.gap-10 .col-lg-11{width:calc(91.66666667% - 10px)}
.gap-10 .col-lg-12{width:calc(100% - 10px)}
.w-xl-5,.w-xl-10,.w-xl-15,.w-xl-20,.w-xl-25,.w-xl-30,.w-xl-35,.w-xl-40,.w-xl-45,.w-xl-50,.w-xl-55,.w-xl-60,.w-xl-65,.w-xl-70,.w-xl-75,.w-xl-80,.w-xl-85,.w-xl-90,.w-xl-95,.w-xl-100{width:100%}
.w-lg-100{width:100%}
.w-lg-95{width:95%}
.w-lg-90{width:90%}
.w-lg-85{width:85%}
.w-lg-80{width:80%}
.w-lg-75{width:75%}
.w-lg-70{width:70%}
.w-lg-65{width:65%}
.w-lg-60{width:60%}
.w-lg-55{width:55%}
.w-lg-50{width:50%}
.w-lg-45{width:45%}
.w-lg-40{width:40%}
.w-lg-35{width:35%}
.w-lg-30{width:30%}
.w-lg-25{width:25%}
.w-lg-20{width:20%}
.w-lg-15{width:15%}
.w-lg-10{width:10%}
.w-lg-5{width:5%}
.gap-5 .w-lg-100{width:calc(100% - 5px)}
.gap-5 .w-lg-95{width:calc(95% - 5px)}
.gap-5 .w-lg-90{width:calc(90% - 5px)}
.gap-5 .w-lg-85{width:calc(85% - 5px)}
.gap-5 .w-lg-80{width:calc(80% - 5px)}
.gap-5 .w-lg-75{width:calc(75% - 5px)}
.gap-5 .w-lg-70{width:calc(70% - 5px)}
.gap-5 .w-lg-65{width:calc(65% - 5px)}
.gap-5 .w-lg-60{width:calc(60% - 5px)}
.gap-5 .w-lg-55{width:calc(55% - 5px)}
.gap-5 .w-lg-50{width:calc(50% - 5px)}
.gap-5 .w-lg-45{width:calc(45% - 5px)}
.gap-5 .w-lg-40{width:calc(40% - 5px)}
.gap-5 .w-lg-35{width:calc(35% - 5px)}
.gap-5 .w-lg-30{width:calc(30% - 5px)}
.gap-5 .w-lg-25{width:calc(25% - 5px)}
.gap-5 .w-lg-20{width:calc(20% - 5px)}
.gap-5 .w-lg-15{width:calc(15% - 5px)}
.gap-5 .w-lg-10{width:calc(10% - 5px)}
.gap-5 .w-lg-5{width:calc(5% - 5px)}
.gap-10 .w-lg-100{width:calc(100% - 10px)}
.gap-10 .w-lg-95{width:calc(95% - 10px)}
.gap-10 .w-lg-90{width:calc(90% - 10px)}
.gap-10 .w-lg-85{width:calc(85% - 10px)}
.gap-10 .w-lg-80{width:calc(80% - 10px)}
.gap-10 .w-lg-75{width:calc(75% - 10px)}
.gap-10 .w-lg-70{width:calc(70% - 10px)}
.gap-10 .w-lg-65{width:calc(65% - 10px)}
.gap-10 .w-lg-60{width:calc(60% - 10px)}
.gap-10 .w-lg-55{width:calc(55% - 10px)}
.gap-10 .w-lg-50{width:calc(50% - 10px)}
.gap-10 .w-lg-45{width:calc(45% - 10px)}
.gap-10 .w-lg-40{width:calc(40% - 10px)}
.gap-10 .w-lg-35{width:calc(35% - 10px)}
.gap-10 .w-lg-30{width:calc(30% - 10px)}
.gap-10 .w-lg-25{width:calc(25% - 10px)}
.gap-10 .w-lg-20{width:calc(20% - 10px)}
.gap-10 .w-lg-15{width:calc(15% - 10px)}
.gap-10 .w-lg-10{width:calc(10% - 10px)}
.gap-10 .w-lg-5{width:calc(5% - 10px)}
.pad-xl-5,.pad-xl-10,.pad-xl-15,.pad-xl-20,.pad-xl-25,.pad-xl-30,.pad-xl-35,.pad-xl-40,.pad-xl-45,.pad-xl-50{padding:0}
.pad-xl-l-5,.pad-xl-l-10,.pad-xl-l-15,.pad-xl-l-20,.pad-xl-l-25,.pad-xl-l-30,.pad-xl-l-35,.pad-xl-l-40,.pad-xl-l-45,.pad-xl-l-50{padding:0}
.pad-xl-r-5,.pad-xl-r-10,.pad-xl-r-15,.pad-xl-r-20,.pad-xl-r-25,.pad-xl-r-30,.pad-xl-r-35,.pad-xl-r-40,.pad-xl-r-45,.pad-xl-r-50{padding:0}
.pad-xl-t-5,.pad-xl-t-10,.pad-xl-t-15,.pad-xl-t-20,.pad-xl-t-25,.pad-xl-t-30,.pad-xl-t-35,.pad-xl-t-40,.pad-xl-t-45,.pad-xl-t-50{padding:0} 
.pad-xl-b-5,.pad-xl-b-10,.pad-xl-b-15,.pad-xl-b-20,.pad-xl-b-25,.pad-xl-b-30,.pad-xl-b-35,.pad-xl-b-40,.pad-xl-b-45,.pad-xl-b-50{padding:0}
.pad-lg-50{padding:50px}
.pad-lg-45{padding:45px}
.pad-lg-40{padding:40px}
.pad-lg-35{padding:35px}
.pad-lg-30{padding:30px}
.pad-lg-25{padding:25px}
.pad-lg-20{padding:20px}
.pad-lg-15{padding:15px}
.pad-lg-10{padding:10px}
.pad-lg-5{padding:5px}
.pad-l-lg-50{padding-left:50px}
.pad-l-lg-45{padding-left:45px}
.pad-l-lg-40{padding-left:40px}
.pad-l-lg-35{padding-left:35px}
.pad-l-lg-30{padding-left:30px}
.pad-l-lg-25{padding-left:25px}
.pad-l-lg-20{padding-left:20px}
.pad-l-lg-15{padding-left:15px}
.pad-l-lg-10{padding-left:10px}
.pad-l-lg-5{padding-left:5px}
.pad-r-lg-50{padding-right:50px}
.pad-r-lg-45{padding-right:45px}
.pad-r-lg-40{padding-right:40px}
.pad-r-lg-35{padding-right:35px}
.pad-r-lg-30{padding-right:30px}
.pad-r-lg-25{padding-right:25px}
.pad-r-lg-20{padding-right:20px}
.pad-r-lg-15{padding-right:15px}
.pad-r-lg-10{padding-right:10px}
.pad-r-lg-5{padding-right:5px}
.pad-t-lg-50{padding-top:50px}
.pad-t-lg-45{padding-top:45px}
.pad-t-lg-40{padding-top:40px}
.pad-t-lg-35{padding-top:35px}
.pad-t-lg-30{padding-top:30px}
.pad-t-lg-25{padding-top:25px}
.pad-t-lg-20{padding-top:20px}
.pad-t-lg-15{padding-top:15px}
.pad-t-lg-10{padding-top:10px}
.pad-t-lg-5{padding-top:5px}
.pad-b-lg-50{padding-bottom:50px}
.pad-b-lg-45{padding-bottom:45px}
.pad-b-lg-40{padding-bottom:40px}
.pad-b-lg-35{padding-bottom:35px}
.pad-b-lg-30{padding-bottom:30px}
.pad-b-lg-25{padding-bottom:25px}
.pad-b-lg-20{padding-bottom:20px}
.pad-b-lg-15{padding-bottom:15px}
.pad-b-lg-10{padding-bottom:10px}
.pad-b-lg-5{padding-bottom:5px}
.rounded-lg{border-radius:4px}
.rounded-xl{border-radius:1px}
.mar-xl-5,.mar-xl-10,.mar-xl-15,.mar-xl-20,.mar-xl-25,.mar-xl-30,.mar-xl-35,.mar-xl-40,.mar-xl-45,.mar-xl-50{margin:0}
.mar-xl-l-5,.mar-xl-l-10,.mar-xl-l-15,.mar-xl-l-20,.mar-xl-l-25,.mar-xl-l-30,.mar-xl-l-35,.mar-xl-l-40,.mar-xl-l-45,.mar-xl-l-50{margin:0}
.mar-xl-r-5,.mar-xl-r-10,.mar-xl-r-15,.mar-xl-r-20,.mar-xl-r-25,.mar-xl-r-30,.mar-xl-r-35,.mar-xl-r-40,.mar-xl-r-45,.mar-xl-r-50{margin:0}
.mar-xl-t-5,.mar-xl-t-10,.mar-xl-t-15,.mar-xl-t-20,.mar-xl-t-25,.mar-xl-t-30,.mar-xl-t-35,.mar-xl-t-40,.mar-xl-t-45,.mar-xl-t-50{margin:0} 
.mar-xl-b-5,.mar-xl-b-10,.mar-xl-b-15,.mar-xl-b-20,.mar-xl-b-25,.mar-xl-b-30,.mar-xl-b-35,.mar-xl-b-40,.mar-xl-b-45,.mar-xl-b-50{margin:0}
.mar-lg-50{margin:50px}
.mar-lg-45{margin:45px}
.mar-lg-40{margin:40px}
.mar-lg-35{margin:35px}
.mar-lg-30{margin:30px}
.mar-lg-25{margin:25px}
.mar-lg-20{margin:20px}
.mar-lg-15{margin:15px}
.mar-lg-10{margin:10px}
.mar-lg-5{margin:5px}
.mar-l-lg-50{margin-left:50px}
.mar-l-lg-45{margin-left:45px}
.mar-l-lg-40{margin-left:40px}
.mar-l-lg-35{margin-left:35px}
.mar-l-lg-30{margin-left:30px}
.mar-l-lg-25{margin-left:25px}
.mar-l-lg-20{margin-left:20px}
.mar-l-lg-15{margin-left:15px}
.mar-l-lg-10{margin-left:10px}
.mar-l-lg-5{margin-left:5px}
.mar-r-lg-50{margin-right:50px}
.mar-r-lg-45{margin-right:45px}
.mar-r-lg-40{margin-right:40px}
.mar-r-lg-35{margin-right:35px}
.mar-r-lg-30{margin-right:30px}
.mar-r-lg-25{margin-right:25px}
.mar-r-lg-20{margin-right:20px}
.mar-r-lg-15{margin-right:15px}
.mar-r-lg-10{margin-right:10px}
.mar-r-lg-5{margin-right:5px}
.mar-t-lg-50{margin-top:50px}
.mar-t-lg-45{margin-top:45px}
.mar-t-lg-40{margin-top:40px}
.mar-t-lg-35{margin-top:35px}
.mar-t-lg-30{margin-top:30px}
.mar-t-lg-25{margin-top:25px}
.mar-t-lg-20{margin-top:20px}
.mar-t-lg-15{margin-top:15px}
.mar-t-lg-10{margin-top:10px}
.mar-t-lg-5{margin-top:5px}
.mar-b-lg-50{margin-bottom:50px}
.mar-b-lg-45{margin-bottom:45px}
.mar-b-lg-40{margin-bottom:40px}
.mar-b-lg-35{margin-bottom:35px}
.mar-b-lg-30{margin-bottom:30px}
.mar-b-lg-25{margin-bottom:25px}
.mar-b-lg-20{margin-bottom:20px}
.mar-b-lg-15{margin-bottom:15px}
.mar-b-lg-10{margin-bottom:10px}
.mar-b-lg-5{margin-bottom:5px}
.invisible-lg{display:none}
}
@media only screen and (min-width:1200px){
.col-xl-1{width:8.33333333%}
.col-xl-2{width:16.66666667%}
.col-xl-3{width:25%}
.col-xl-4{width:33.33333333%}
.col-xl-5{width:41.66666667%}
.col-xl-6{width:50%}
.col-xl-7{width:58.33333333%}
.col-xl-8{width:66.66666667%}
.col-xl-9{width:75%}
.col-xl-10{width:83.33333333%}
.col-xl-11{width:91.66666667%}
.col-xl-12{width:100%}
.gap-5 .col-xl-1{width:calc(8.33333333% - 5px)}
.gap-5 .col-xl-2{width:calc(16.66666667% - 5px)}
.gap-5 .col-xl-3{width:calc(25% - 5px)}
.gap-5 .col-xl-4{width:calc(33.33333333% - 5px)}
.gap-5 .col-xl-5{width:calc(41.66666667% - 5px)}
.gap-5 .col-xl-6{width:calc(50% - 5px)}
.gap-5 .col-xl-7{width:calc(58.33333333% - 5px)}
.gap-5 .col-xl-8{width:calc(66.66666667% - 5px)}
.gap-5 .col-xl-9{width:calc(75% - 5px)}
.gap-5 .col-xl-10{width:calc(83.33333333% - 5px)}
.gap-5 .col-xl-11{width:calc(91.66666667% - 5px)}
.gap-5 .col-xl-12{width:calc(100% - 5px)}
.gap-10 .col-xl-1{width:calc(8.33333333% - 10px)}
.gap-10 .col-xl-2{width:calc(16.66666667% - 10px)}
.gap-10 .col-xl-3{width:calc(25% - 10px)}
.gap-10 .col-xl-4{width:calc(33.33333333% - 10px)}
.gap-10 .col-xl-5{width:calc(41.66666667% - 10px)}
.gap-10 .col-xl-6{width:calc(50% - 10px)}
.gap-10 .col-xl-7{width:calc(58.33333333% - 10px)}
.gap-10 .col-xl-8{width:calc(66.66666667% - 10px)}
.gap-10 .col-xl-9{width:calc(75% - 10px)}
.gap-10 .col-xl-10{width:calc(83.33333333% - 10px)}
.gap-10 .col-xl-11{width:calc(91.66666667% - 10px)}
.gap-10 .col-xl-12{width:calc(100% - 10px)}
.w-xl-100{width:100%}
.w-xl-95{width:95%}
.w-xl-90{width:90%}
.w-xl-85{width:85%}
.w-xl-80{width:80%}
.w-xl-75{width:75%}
.w-xl-70{width:70%}
.w-xl-65{width:65%}
.w-xl-60{width:60%}
.w-xl-55{width:55%}
.w-xl-50{width:50%}
.w-xl-45{width:45%}
.w-xl-40{width:40%}
.w-xl-35{width:35%}
.w-xl-30{width:30%}
.w-xl-25{width:25%}
.w-xl-20{width:20%}
.w-xl-15{width:15%}
.w-xl-10{width:10%}
.w-xl-5{width:5%}
.gap-5 .w-xl-100{width:calc(100% - 5px)}
.gap-5 .w-xl-95{width:calc(95% - 5px)}
.gap-5 .w-xl-90{width:calc(90% - 5px)}
.gap-5 .w-xl-85{width:calc(85% - 5px)}
.gap-5 .w-xl-80{width:calc(80% - 5px)}
.gap-5 .w-xl-75{width:calc(75% - 5px)}
.gap-5 .w-xl-70{width:calc(70% - 5px)}
.gap-5 .w-xl-65{width:calc(65% - 5px)}
.gap-5 .w-xl-60{width:calc(60% - 5px)}
.gap-5 .w-xl-55{width:calc(55% - 5px)}
.gap-5 .w-xl-50{width:calc(50% - 5px)}
.gap-5 .w-xl-45{width:calc(45% - 5px)}
.gap-5 .w-xl-40{width:calc(40% - 5px)}
.gap-5 .w-xl-35{width:calc(35% - 5px)}
.gap-5 .w-xl-30{width:calc(30% - 5px)}
.gap-5 .w-xl-25{width:calc(25% - 5px)}
.gap-5 .w-xl-20{width:calc(20% - 5px)}
.gap-5 .w-xl-15{width:calc(15% - 5px)}
.gap-5 .w-xl-10{width:calc(10% - 5px)}
.gap-5 .w-xl-5{width:calc(5% - 5px)}
.gap-10 .w-xl-100{width:calc(100% - 10px)}
.gap-10 .w-xl-95{width:calc(95% - 10px)}
.gap-10 .w-xl-90{width:calc(90% - 10px)}
.gap-10 .w-xl-85{width:calc(85% - 10px)}
.gap-10 .w-xl-80{width:calc(80% - 10px)}
.gap-10 .w-xl-75{width:calc(75% - 10px)}
.gap-10 .w-xl-70{width:calc(70% - 10px)}
.gap-10 .w-xl-65{width:calc(65% - 10px)}
.gap-10 .w-xl-60{width:calc(60% - 10px)}
.gap-10 .w-xl-55{width:calc(55% - 10px)}
.gap-10 .w-xl-50{width:calc(50% - 10px)}
.gap-10 .w-xl-45{width:calc(45% - 10px)}
.gap-10 .w-xl-40{width:calc(40% - 10px)}
.gap-10 .w-xl-35{width:calc(35% - 10px)}
.gap-10 .w-xl-30{width:calc(30% - 10px)}
.gap-10 .w-xl-25{width:calc(25% - 10px)}
.gap-10 .w-xl-20{width:calc(20% - 10px)}
.gap-10 .w-xl-15{width:calc(15% - 10px)}
.gap-10 .w-xl-10{width:calc(10% - 10px)}
.gap-10 .w-xl-5{width:calc(5% - 10px)}
.pad-xl-50{padding:50px}
.pad-xl-45{padding:45px}
.pad-xl-40{padding:40px}
.pad-xl-35{padding:35px}
.pad-xl-30{padding:30px}
.pad-xl-25{padding:25px}
.pad-xl-20{padding:20px}
.pad-xl-15{padding:15px}
.pad-xl-10{padding:10px}
.pad-xl-5{padding:5px}
.pad-l-xl-50{padding-left:50px}
.pad-l-xl-45{padding-left:45px}
.pad-l-xl-40{padding-left:40px}
.pad-l-xl-35{padding-left:35px}
.pad-l-xl-30{padding-left:30px}
.pad-l-xl-25{padding-left:25px}
.pad-l-xl-20{padding-left:20px}
.pad-l-xl-15{padding-left:15px}
.pad-l-xl-10{padding-left:10px}
.pad-l-xl-5{padding-left:5px}  
.pad-r-xl-50{padding-right:50px}
.pad-r-xl-45{padding-right:45px}
.pad-r-xl-40{padding-right:40px}
.pad-r-xl-35{padding-right:35px}
.pad-r-xl-30{padding-right:30px}
.pad-r-xl-25{padding-right:25px}
.pad-r-xl-20{padding-right:20px}
.pad-r-xl-15{padding-right:15px}
.pad-r-xl-10{padding-right:10px}
.pad-r-xl-5{padding-right:5px}
.pad-t-xl-50{padding-top:50px}
.pad-t-xl-45{padding-top:45px}
.pad-t-xl-40{padding-top:40px}
.pad-t-xl-35{padding-top:35px}
.pad-t-xl-30{padding-top:30px}
.pad-t-xl-25{padding-top:25px}
.pad-t-xl-20{padding-top:20px}
.pad-t-xl-15{padding-top:15px}
.pad-t-xl-10{padding-top:10px}
.pad-t-xl-5{padding-top:5px}
.pad-b-xl-50{padding-bottom:50px}
.pad-b-xl-45{padding-bottom:45px}
.pad-b-xl-40{padding-bottom:40px}
.pad-b-xl-35{padding-bottom:35px}
.pad-b-xl-30{padding-bottom:30px}
.pad-b-xl-25{padding-bottom:25px}
.pad-b-xl-20{padding-bottom:20px}
.pad-b-xl-15{padding-bottom:15px}
.pad-b-xl-10{padding-bottom:10px}
.pad-b-xl-5{padding-bottom:5px}
.mar-xl-50{margin:50px}
.mar-xl-45{margin:45px}
.mar-xl-40{margin:40px}
.mar-xl-35{margin:35px}
.mar-xl-30{margin:30px}
.mar-xl-25{margin:25px}
.mar-xl-20{margin:20px}
.mar-xl-15{margin:15px}
.mar-xl-10{margin:10px}
.mar-xl-5{margin:5px}
.mar-l-xl-50{margin-left:50px}
.mar-l-xl-45{margin-left:45px}
.mar-l-xl-40{margin-left:40px}
.mar-l-xl-35{margin-left:35px}
.mar-l-xl-30{margin-left:30px}
.mar-l-xl-25{margin-left:25px}
.mar-l-xl-20{margin-left:20px}
.mar-l-xl-15{margin-left:15px}
.mar-l-xl-10{margin-left:10px}
.mar-l-xl-5{margin-left:5px}
.mar-r-xl-50{margin-right:50px}
.mar-r-xl-45{margin-right:45px}
.mar-r-xl-40{margin-right:40px}
.mar-r-xl-35{margin-right:35px}
.mar-r-xl-30{margin-right:30px}
.mar-r-xl-25{margin-right:25px}
.mar-r-xl-20{margin-right:20px}
.mar-r-xl-15{margin-right:15px}
.mar-r-xl-10{margin-right:10px}
.mar-r-xl-5{margin-right:5px}
.mar-t-xl-50{margin-top:50px}
.mar-t-xl-45{margin-top:45px}
.mar-t-xl-40{margin-top:40px}
.mar-t-xl-35{margin-top:35px}
.mar-t-xl-30{margin-top:30px}
.mar-t-xl-25{margin-top:25px}
.mar-t-xl-20{margin-top:20px}
.mar-t-xl-15{margin-top:15px}
.mar-t-xl-10{margin-top:10px}
.mar-t-xl-5{margin-top:5px}
.mar-b-xl-50{margin-bottom:50px}
.mar-b-xl-45{margin-bottom:45px}
.mar-b-xl-40{margin-bottom:40px}
.mar-b-xl-35{margin-bottom:35px}
.mar-b-xl-30{margin-bottom:30px}
.mar-b-xl-25{margin-bottom:25px}
.mar-b-xl-20{margin-bottom:20px}
.mar-b-xl-15{margin-bottom:15px}
.mar-b-xl-10{margin-bottom:10px}
.mar-b-xl-5{margin-bottom:5px}
.rounded-xl{border-radius:4px}
.invisible-xl{display:none}
}
/**Grid end**/
/**Paddings**/
/**All**/
.pad-50{padding:50px}
.pad-45{padding:45px}
.pad-40{padding:40px}
.pad-35{padding:35px}
.pad-30{padding:30px}
.pad-25{padding:25px}
.pad-20{padding:20px}
.pad-15{padding:15px}
.pad-10{padding:10px}
.pad-5{padding:5px}
/**Left**/
.pad-l-50{padding-left:50px}
.pad-l-45{padding-left:45px}
.pad-l-40{padding-left:40px}
.pad-l-35{padding-left:35px}
.pad-l-30{padding-left:30px}
.pad-l-25{padding-left:25px}
.pad-l-20{padding-left:20px}
.pad-l-15{padding-left:15px}
.pad-l-10{padding-left:10px}
.pad-l-5{padding-left:5px}
/**Right**/
.pad-r-50{padding-right:50px}
.pad-r-45{padding-right:45px}
.pad-r-40{padding-right:40px}
.pad-r-35{padding-right:35px}
.pad-r-30{padding-right:30px}
.pad-r-25{padding-right:25px}
.pad-r-20{padding-right:20px}
.pad-r-15{padding-right:15px}
.pad-r-10{padding-right:10px}
.pad-r-5{padding-right:5px}
/**Top**/
.pad-t-50{padding-top:50px}
.pad-t-45{padding-top:45px}
.pad-t-40{padding-top:40px}
.pad-t-35{padding-top:35px}
.pad-t-30{padding-top:30px}
.pad-t-25{padding-top:25px}
.pad-t-20{padding-top:20px}
.pad-t-15{padding-top:15px}
.pad-t-10{padding-top:10px}
.pad-t-5{padding-top:5px}
/**Bottom**/
.pad-b-50{padding-bottom:50px}
.pad-b-45{padding-bottom:45px}
.pad-b-40{padding-bottom:40px}
.pad-b-35{padding-bottom:35px}
.pad-b-30{padding-bottom:30px}
.pad-b-25{padding-bottom:25px}
.pad-b-20{padding-bottom:20px}
.pad-b-15{padding-bottom:15px}
.pad-b-10{padding-bottom:10px}
.pad-b-5{padding-bottom:5px}
/**Padding end**/
/**Margin**/
/**All**/
.mar-50{margin:50px}
.mar-45{margin:45px}
.mar-40{margin:40px}
.mar-35{margin:35px}
.mar-30{margin:30px}
.mar-25{margin:25px}
.mar-20{margin:20px}
.mar-15{margin:15px}
.mar-10{margin:10px}
.mar-5{margin:5px}
/**Very Small**/
/**Left**/
.mar-l-50{margin-left:50px}
.mar-l-45{margin-left:45px}
.mar-l-40{margin-left:40px}
.mar-l-35{margin-left:35px}
.mar-l-30{margin-left:30px}
.mar-l-25{margin-left:25px}
.mar-l-20{margin-left:20px}
.mar-l-15{margin-left:15px}
.mar-l-10{margin-left:10px}
.mar-l-5{margin-left:5px}
/**Very Small**/
.mar-l-sm-50{margin-left:50px}
.mar-l-sm-45{margin-left:45px}
.mar-l-sm-40{margin-left:40px}
.mar-l-sm-35{margin-left:35px}
.mar-l-sm-30{margin-left:30px}
.mar-l-sm-25{margin-left:25px}
.mar-l-sm-20{margin-left:20px}
.mar-l-sm-15{margin-left:15px}
.mar-l-sm-10{margin-left:10px}
.mar-l-sm-5{margin-left:5px}
/**Small**/
.mar-l-sw-50{margin-left:50px}
.mar-l-sw-45{margin-left:45px}
.mar-l-sw-40{margin-left:40px}
.mar-l-sw-35{margin-left:35px}
.mar-l-sw-30{margin-left:30px}
.mar-l-sw-25{margin-left:25px}
.mar-l-sw-20{margin-left:20px}
.mar-l-sw-15{margin-left:15px}
.mar-l-sw-10{margin-left:10px}
.mar-l-sw-5{margin-left:5px}
/**Medium**/
.mar-l-md-50{margin-left:50px}
.mar-l-md-45{margin-left:45px}
.mar-l-md-40{margin-left:40px}
.mar-l-md-35{margin-left:35px}
.mar-l-md-30{margin-left:30px}
.mar-l-md-25{margin-left:25px}
.mar-l-md-20{margin-left:20px}
.mar-l-md-15{margin-left:15px}
.mar-l-md-10{margin-left:10px}
.mar-l-md-5{margin-left:5px}
/**Large**/
.mar-l-lg-50{margin-left:50px}
.mar-l-lg-45{margin-left:45px}
.mar-l-lg-40{margin-left:40px}
.mar-l-lg-35{margin-left:35px}
.mar-l-lg-30{margin-left:30px}
.mar-l-lg-25{margin-left:25px}
.mar-l-lg-20{margin-left:20px}
.mar-l-lg-15{margin-left:15px}
.mar-l-lg-10{margin-left:10px}
.mar-l-lg-5{margin-left:5px}
/**Very Large**/
.mar-l-xl-50{margin-left:50px}
.mar-l-xl-45{margin-left:45px}
.mar-l-xl-40{margin-left:40px}
.mar-l-xl-35{margin-left:35px}
.mar-l-xl-30{margin-left:30px}
.mar-l-xl-25{margin-left:25px}
.mar-l-xl-20{margin-left:20px}
.mar-l-xl-15{margin-left:15px}
.mar-l-xl-10{margin-left:10px}
.mar-l-xl-5{margin-left:5px}
/**Right**/
.mar-r-50{margin-right:50px}
.mar-r-45{margin-right:45px}
.mar-r-40{margin-right:40px}
.mar-r-35{margin-right:35px}
.mar-r-30{margin-right:30px}
.mar-r-25{margin-right:25px}
.mar-r-20{margin-right:20px}
.mar-r-15{margin-right:15px}
.mar-r-10{margin-right:10px}
.mar-r-5{margin-right:5px}
/**Very Small**/
.mar-r-sm-50{margin-left:50px}
.mar-r-sm-45{margin-left:45px}
.mar-r-sm-40{margin-left:40px}
.mar-r-sm-35{margin-left:35px}
.mar-r-sm-30{margin-left:30px}
.mar-r-sm-25{margin-left:25px}
.mar-r-sm-20{margin-left:20px}
.mar-r-sm-15{margin-left:15px}
.mar-r-sm-10{margin-left:10px}
.mar-r-sm-5{margin-left:5px}
/**Small**/
.mar-r-sw-50{margin-left:50px}
.mar-r-sw-45{margin-left:45px}
.mar-r-sw-40{margin-left:40px}
.mar-r-sw-35{margin-left:35px}
.mar-r-sw-30{margin-left:30px}
.mar-r-sw-25{margin-left:25px}
.mar-r-sw-20{margin-left:20px}
.mar-r-sw-15{margin-left:15px}
.mar-r-sw-10{margin-left:10px}
.mar-r-sw-5{margin-left:5px}
/**Medium**/
.mar-r-md-50{margin-left:50px}
.mar-r-md-45{margin-left:45px}
.mar-r-md-40{margin-left:40px}
.mar-r-md-35{margin-left:35px}
.mar-r-md-30{margin-left:30px}
.mar-r-md-25{margin-left:25px}
.mar-r-md-20{margin-left:20px}
.mar-r-md-15{margin-left:15px}
.mar-r-md-10{margin-left:10px}
.mar-r-md-5{margin-left:5px}
/**Large**/
.mar-r-lg-50{margin-left:50px}
.mar-r-lg-45{margin-left:45px}
.mar-r-lg-40{margin-left:40px}
.mar-r-lg-35{margin-left:35px}
.mar-r-lg-30{margin-left:30px}
.mar-r-lg-25{margin-left:25px}
.mar-r-lg-20{margin-left:20px}
.mar-r-lg-15{margin-left:15px}
.mar-r-lg-10{margin-left:10px}
.mar-r-lg-5{margin-left:5px}
/**Very Large**/
.mar-r-xl-50{margin-left:50px}
.mar-r-xl-45{margin-left:45px}
.mar-r-xl-40{margin-left:40px}
.mar-r-xl-35{margin-left:35px}
.mar-r-xl-30{margin-left:30px}
.mar-r-xl-25{margin-left:25px}
.mar-r-xl-20{margin-left:20px}
.mar-r-xl-15{margin-left:15px}
.mar-r-xl-10{margin-left:10px}
.mar-r-xl-5{margin-left:5px}
/**Top**/
.mar-t-50{margin-top:50px}
.mar-t-45{margin-top:45px}
.mar-t-40{margin-top:40px}
.mar-t-35{margin-top:35px}
.mar-t-30{margin-top:30px}
.mar-t-25{margin-top:25px}
.mar-t-20{margin-top:20px}
.mar-t-15{margin-top:15px}
.mar-t-10{margin-top:10px}
.mar-t-5{margin-top:5px}
/**Very Small**/
.mar-t-sm-50{margin-left:50px}
.mar-t-sm-45{margin-left:45px}
.mar-t-sm-40{margin-left:40px}
.mar-t-sm-35{margin-left:35px}
.mar-t-sm-30{margin-left:30px}
.mar-t-sm-25{margin-left:25px}
.mar-t-sm-20{margin-left:20px}
.mar-t-sm-15{margin-left:15px}
.mar-t-sm-10{margin-left:10px}
.mar-t-sm-5{margin-left:5px}
/**Small**/
.mar-t-sw-50{margin-left:50px}
.mar-t-sw-45{margin-left:45px}
.mar-t-sw-40{margin-left:40px}
.mar-t-sw-35{margin-left:35px}
.mar-t-sw-30{margin-left:30px}
.mar-t-sw-25{margin-left:25px}
.mar-t-sw-20{margin-left:20px}
.mar-t-sw-15{margin-left:15px}
.mar-t-sw-10{margin-left:10px}
.mar-t-sw-5{margin-left:5px}
/**Medium**/
.mar-t-md-50{margin-left:50px}
.mar-t-md-45{margin-left:45px}
.mar-t-md-40{margin-left:40px}
.mar-t-md-35{margin-left:35px}
.mar-t-md-30{margin-left:30px}
.mar-t-md-25{margin-left:25px}
.mar-t-md-20{margin-left:20px}
.mar-t-md-15{margin-left:15px}
.mar-t-md-10{margin-left:10px}
.mar-t-md-5{margin-left:5px}
/**Large**/
.mar-t-lg-50{margin-left:50px}
.mar-t-lg-45{margin-left:45px}
.mar-t-lg-40{margin-left:40px}
.mar-t-lg-35{margin-left:35px}
.mar-t-lg-30{margin-left:30px}
.mar-t-lg-25{margin-left:25px}
.mar-t-lg-20{margin-left:20px}
.mar-t-lg-15{margin-left:15px}
.mar-t-lg-10{margin-left:10px}
.mar-t-lg-5{margin-left:5px}
/**Very Large**/
.mar-t-xl-50{margin-left:50px}
.mar-t-xl-45{margin-left:45px}
.mar-t-xl-40{margin-left:40px}
.mar-t-xl-35{margin-left:35px}
.mar-t-xl-30{margin-left:30px}
.mar-t-xl-25{margin-left:25px}
.mar-t-xl-20{margin-left:20px}
.mar-t-xl-15{margin-left:15px}
.mar-t-xl-10{margin-left:10px}
.mar-t-xl-5{margin-left:5px}
/**Bottom**/
.mar-b-50{margin-bottom:50px}
.mar-b-45{margin-bottom:45px}
.mar-b-40{margin-bottom:40px}
.mar-b-35{margin-bottom:35px}
.mar-b-30{margin-bottom:30px}
.mar-b-25{margin-bottom:25px}
.mar-b-20{margin-bottom:20px}
.mar-b-15{margin-bottom:15px}
.mar-b-10{margin-bottom:10px}
.mar-b-5{margin-bottom:5px}
/**Very Small**/
.mar-b-sm-50{margin-left:50px}
.mar-b-sm-45{margin-left:45px}
.mar-b-sm-40{margin-left:40px}
.mar-b-sm-35{margin-left:35px}
.mar-b-sm-30{margin-left:30px}
.mar-b-sm-25{margin-left:25px}
.mar-b-sm-20{margin-left:20px}
.mar-b-sm-15{margin-left:15px}
.mar-b-sm-10{margin-left:10px}
.mar-b-sm-5{margin-left:5px}
/**Small**/
.mar-b-sw-50{margin-left:50px}
.mar-b-sw-45{margin-left:45px}
.mar-b-sw-40{margin-left:40px}
.mar-b-sw-35{margin-left:35px}
.mar-b-sw-30{margin-left:30px}
.mar-b-sw-25{margin-left:25px}
.mar-b-sw-20{margin-left:20px}
.mar-b-sw-15{margin-left:15px}
.mar-b-sw-10{margin-left:10px}
.mar-b-sw-5{margin-left:5px}
/**Medium**/
.mar-b-md-50{margin-left:50px}
.mar-b-md-45{margin-left:45px}
.mar-b-md-40{margin-left:40px}
.mar-b-md-35{margin-left:35px}
.mar-b-md-30{margin-left:30px}
.mar-b-md-25{margin-left:25px}
.mar-b-md-20{margin-left:20px}
.mar-b-md-15{margin-left:15px}
.mar-b-md-10{margin-left:10px}
.mar-b-md-5{margin-left:5px}
/**Large**/
.mar-b-lg-50{margin-left:50px}
.mar-b-lg-45{margin-left:45px}
.mar-b-lg-40{margin-left:40px}
.mar-b-lg-35{margin-left:35px}
.mar-b-lg-30{margin-left:30px}
.mar-b-lg-25{margin-left:25px}
.mar-b-lg-20{margin-left:20px}
.mar-b-lg-15{margin-left:15px}
.mar-b-lg-10{margin-left:10px}
.mar-b-lg-5{margin-left:5px}
/**Very Large**/
.mar-b-xl-50{margin-left:50px}
.mar-b-xl-45{margin-left:45px}
.mar-b-xl-40{margin-left:40px}
.mar-b-xl-35{margin-left:35px}
.mar-b-xl-30{margin-left:30px}
.mar-b-xl-25{margin-left:25px}
.mar-b-xl-20{margin-left:20px}
.mar-b-xl-15{margin-left:15px}
.mar-b-xl-10{margin-left:10px}
.mar-b-xl-5{margin-left:5px}
`;
  document.body.innerHTML += `<style>${css}</style>`;
}
