import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  url = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<Alunos[]> {
    return this.http.get<Alunos[]>(this.url);
  }

  getAluno(id: number): Observable<Alunos> {
    return this.http.get<Alunos>(`${this.url}/${id}`);
  }

  save(alunos: Alunos): Observable<Alunos> {
    return this.http.post<Alunos>(this.url, alunos);
  }

  update(alunos: Alunos): Observable<Alunos> {
    return this.http.put<Alunos>(`${this.url}/${alunos.id}`, alunos);
  }

  delete(alunos: Alunos): Observable<void> {
    return this.http.delete<void>(`${this.url}/${alunos.id}`);
  }
}
