import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ name: string, status: string }>();
  isServerCreated: boolean = false;
  @ViewChild('inputServerName', { static: true }) inputElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  createServer(nameInput:HTMLInputElement) {
    this.isServerCreated = true;
    console.log(this.inputElement.nativeElement.value);
    this.serverCreated.emit({
      name: nameInput.value,
      status: Math.random() > 0.5 ? 'online' : 'offline'
    });
  }


}
