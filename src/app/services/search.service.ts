import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // Backend Endpoints
  //url = 'http://127.0.0.1:5000';
  url = 'https://tweets-search-backend-xgmsewclfa-uc.a.run.app'
  tweetscountEndpoint = '/tweetscount'
  tweetssearchEndpoint = '/tweetssearch'


  constructor(private httclient: HttpClient) {}

  public sendRequest(data: any, endpoint:String ): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httclient.post(
      this.url + '/'+ endpoint,
      data,
      { responseType: 'blob' as 'json', headers }
    );
  }
}
