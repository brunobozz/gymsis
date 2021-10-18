import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-page-exercicios',
  templateUrl: './page-exercicios.component.html',
  styleUrls: ['./page-exercicios.component.scss'],
})
export class PageExerciciosComponent implements OnInit {
  public exercicios: any = [];
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getExercicios();
  }

  private getExercicios() {
    this.apiService.getData('exercicios').subscribe((data) => {
      this.exercicios = data;
    });
  }

  public deleteExercicio(id: number, nome: string) {
    if (confirm('Tem certeza que deseja apagar o exercício ' + nome + '?')) {
      this.apiService.deleteData(id, 'exercicios/').subscribe(() => {
        this.getExercicios();
        this.toastr.error('Excluído com sucesso!', nome);
      });
    }
  }
}
