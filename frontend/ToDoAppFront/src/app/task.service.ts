import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get("http://localhost:3001/app/tasks")
  }

  postTask (task: any) {
    return this.http.post("http://localhost:3001/app/tasks", task )
  }

  deleteTask (id: any) {
    return this.http.delete("http://localhost:3001/app/tasks/" + id)
  }

  editTask (id:string, task:any) {
    return this.http.put("http://localhost:3001/app/tasks/" + id, task)
  }

}
