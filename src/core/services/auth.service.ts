// services/auth.service.ts
import { inject, injectable } from 'inversify';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MockApiService } from '@services/mock-api.service';
import 'reflect-metadata';
import { SERVICE } from '@core/types/services';

@injectable()
export class AuthService {
  private authStatusSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(
    @inject(SERVICE.MockApiService) private mockApiService: MockApiService
  ) {}

  get authStatus$(): Observable<boolean> {
    return this.authStatusSubject.asObservable();
  }

  login(username: string, password: string): Observable<string> {
    return this.mockApiService.login(username, password).pipe(
      switchMap(response => {
        if (response === 'mock-token') {
          localStorage.setItem('auth-token', response);
          this.authStatusSubject.next(true);
          return of(response);
        } else {
          return of('Invalid credentials');
        }
      }),
      catchError(() => of('An error occurred during authentication'))
    );
  }

  logout(): void {
    localStorage.removeItem('auth-token');
    this.authStatusSubject.next(false);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth-token');
  }
}
