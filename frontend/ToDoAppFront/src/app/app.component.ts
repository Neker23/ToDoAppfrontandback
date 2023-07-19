import { Component, OnInit } from '@angular/core';
import { TaskService } from '../app/task.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks: any;
  currentTask: any = {}

  editMode = false;
  
  getAll(){
    this.tastService.getAll().subscribe((data) => {
      this.tasks = data;
    });
  }

  constructor(private tastService: TaskService) {}

  ngOnInit(): void {
    this.getAll()
  }

  formulario = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  formularioEdit = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
      this.tastService.postTask(this.formulario.value).subscribe(() => {
      this.getAll()
      this.formulario.reset();
      //this.formulario.get('description')?.patchValue('Nuevo valor analuz si era un gay tú')
    });
  }

  onSubmitEdit(){
    let taskEdited = {
      name : this.formularioEdit.value.name,
      description : this.formularioEdit.value.description,
      completed: this.currentTask.completed
    }
    this.tastService.editTask(this.currentTask.id, taskEdited).subscribe(()=> {
      this.formularioEdit.reset();
      this.getAll();
    })
    this.editMode = false;
  }

  onClick(id:string){
    this.tastService.deleteTask(id).subscribe(()=>{
      this.getAll()
    })
  }

  onEdit(task: any){
    this.formularioEdit.setValue({
      name: task.name,
      description: task.description
    });
    this.currentTask = task;
    this.editMode = !this.editMode;
  }

  onComplet(task:any){
    let taskEdited = {
      name : task.name,
      description : task.description,
      completed: !task.completed
    }
    this.tastService.editTask(task.id, taskEdited).subscribe(()=> {
      this.formularioEdit.reset();
      this.getAll();
    })
  }
}
