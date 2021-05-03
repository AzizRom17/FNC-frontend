import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChienchasseService } from '../services/chienchasse.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  opened=true;
  constructor(
    public authService: AuthService,
    public chienService:ChienchasseService
    ) { }

  ngOnInit(): void {
    this.chienService.getchien();
    this.chienService.isAuthorized();
  }

}
