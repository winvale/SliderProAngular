import { Component, Input, OnInit } from '@angular/core';
//https://www.youtube.com/watch?v=lBH1Th8h4Ok
interface caruselImagen {
imagenSrc: string;
imagenAlt: string;
}

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
})
export class CaruselComponent implements OnInit {

@Input() imagenes: caruselImagen[] = []
@Input() indicators =true;
@Input() controls =true;
@Input() auntoSlide =false;
@Input() sliderIntervalos=5000;


selectedIndex = 0;

  ngOnInit(): void {
    if(this.auntoSlide){
      this.auntoSlideImagenes();
    }
  }
  auntoSlideImagenes(): void{
    setInterval(()=> {
      this.onNextClick();
    },this.sliderIntervalos);
  }
  selectedImagen(index:number):void{
    this.selectedIndex=index;
  }

  onPrevClick(): void{
  if(this.selectedIndex===0){
    this.selectedIndex=this.imagenes.length -1;

  }else{
    this.selectedIndex--;
  }
  }
  onNextClick():void{
    if(this.selectedIndex===this.imagenes.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
