import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any = null;

  constructor(private _http: Http) {
    this.getMyBlog();
  }

  private getMyBlog() {
    return this._http.get('http://localhost:8080/api/notes/1')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                });
  }

}
