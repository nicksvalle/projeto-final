import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professores } from './professores';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  url = 'http://localhost:3000/professores';

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<Professores[]> {
    return this.http.get<Professores[]>(this.url);
  }

  getProfessor(id: number): Observable<Professores> {
    return this.http.get<Professores>(`${this.url}/${id}`);
  }

  save(professores: Professores): Observable<Professores> {
    return this.http.post<Professores>(this.url, professores);
  }

  update(professores: Professores): Observable<Professores> {
    return this.http.put<Professores>(`${this.url}/${professores.id}`, professores);
  }

  delete(professores: Professores): Observable<void> {
    return this.http.delete<void>(`${this.url}/${professores.id}`);
  }
}
