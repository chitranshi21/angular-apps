import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  
  @ViewChild('name', {static:true}) elementRef: ElementRef;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: "name"
    }
  }
  onClickCall() {
    const value = this.elementRef.nativeElement.value;
    console.log(value);
    this.http.get<{user: number}>("https://run.mocky.io/v3/b51e4d48-287c-4c06-96ce-08b5b91f02da")
      .subscribe((data) => {
        console.log(data.user);
      });
  }

}
