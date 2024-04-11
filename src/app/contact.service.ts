import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactModel } from './contact-model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private api = 'http://localhost/shakib-php-site/index.php';
  // private api = 'http://localhost/api/send_email/index.php';
  // private api = 'https://api.shakibsmall.com/send_email/index.php';
  private api = 'https://api.shakibsmall.com/api/send_email/index.php';
  // private api = 'https://b8mgq5itta.execute-api.us-east-1.amazonaws.com';
  // private api = 'http://52.6.239.63/api/send_email/index.php';

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }else{ return null }
        },
          (error: any) => {
            return error;
          }
        )
    )
  }

}
