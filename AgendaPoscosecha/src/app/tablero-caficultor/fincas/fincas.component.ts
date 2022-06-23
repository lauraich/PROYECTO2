import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fincas',
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css']
})
export class FincasComponent implements OnInit {

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  enFinca(idFinca: string){
    this.router.navigate(['../finca', idFinca], { relativeTo: this.route });
  }

}
