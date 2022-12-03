import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regitserMode = false;
  users:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getusers();
  }

  registerToggle(){
    this.regitserMode = !this.regitserMode;
  }

  getusers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
   });
  }

  cancelRegisterMode(event: boolean){
    this.regitserMode = event;
  }
}
