import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})

export class CadastroUsuarioComponent implements OnInit {
  step = 0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/cadastro/criar-usuario'])
  }

}
