import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {}

  //Hook - append modal relative to body element
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  //Hook - remove modal relative to body element
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }
}
