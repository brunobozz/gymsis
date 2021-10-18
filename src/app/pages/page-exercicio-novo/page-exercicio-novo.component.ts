import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-exercicio-novo',
  templateUrl: './page-exercicio-novo.component.html',
  styleUrls: ['./page-exercicio-novo.component.scss'],
})
export class PageExercicioNovoComponent implements OnInit {
  public exercicioForm: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3)]],
    tipo: [null, [Validators.required, Validators.minLength(3)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitExercicio() {
    if (this.exercicioForm.valid) {
      this.postExercicio();
    } else {
      this.toastr.error('Preencha todos os campos obrigatórios');
    }
  }

  private postExercicio() {
    this.apiService
      .postData('exercicios', this.exercicioForm.value)
      .subscribe(() => {
        this.toastr.success('Participante adicionado', 'Feito!!');
        this.router.navigate(['/exercicios']);
      });
  }

  public validaCampo(campo: any) {
    return (
      this.exercicioForm.get(campo)?.invalid &&
      this.exercicioForm.get(campo)?.touched
    );
  }
}
