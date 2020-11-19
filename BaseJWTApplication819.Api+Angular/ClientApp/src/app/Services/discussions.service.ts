import { DiscussionModel } from '../Models/discussion.model';
import { ApiResponse } from '../Models/api-response';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscussionsService {

  baseURL = '/api/question';
  refreshProducts = new EventEmitter<DiscussionModel[]>();
  refreshDiscussion = new EventEmitter<DiscussionModel>();
  constructor(private httpClient: HttpClient) { }



  getDiscussions(): Observable<DiscussionModel[]> {
    const url = `${this.baseURL}`;
    const discussions = this.httpClient.get<DiscussionModel[]>(url);
    return discussions;
  }



  getDiscussion(id: number) {
    return this.httpClient.get(this.baseURL + '/' + id);
  }

  selectAnswer(id: number): Observable<DiscussionModel> {
    // const response = this.httpClient.post<ApiResponse>(`${this.baseURL}/selectAnswer`, { id: id });

    // return response;

    const data = this.httpClient.post<DiscussionModel>(`${this.baseURL}` + '/selectAnswer', {id: id});
    return data;
  }


  addDiscussion(discussion: DiscussionModel): Observable<ApiResponse> {
    const response = this.getPostResponse('add', discussion);
    return response;
  }


  deleteProduct(id: number): Observable<DiscussionModel[]> {
    const response = this.httpClient.post<DiscussionModel[]>(`${this.baseURL}/delete`, { id: id });
    return response;
  }

  editProduct(discussion: DiscussionModel): Observable<ApiResponse> {
    const response = this.getPostResponse('edit', discussion);
    return response;
  }

  searchProduct(search: string): Observable<DiscussionModel[]> {
    const params = new HttpParams().set('search', search);
    const response = this.httpClient.get<DiscussionModel[]>(`${this.baseURL}/search`, {
      params: params
    });
    return response;
  }

  private getPostResponse(urlTail: string, data: any): Observable<ApiResponse> {
    const url = `${this.baseURL}/${urlTail}`;
    const response = this.httpClient.post<ApiResponse>(url, data);
    return response;
  }

}
