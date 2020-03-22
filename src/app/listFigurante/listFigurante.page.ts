import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Task } from '../interface/task';
import { TaskService } from '../Services/task.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listFigurante',
  templateUrl: 'listFigurante.page.html',
  styleUrls: ['listFigurante.page.scss']
})
export class ListFigurantePage implements OnInit{

  tasks: Task[] = [];

  constructor(
    private taskService : TaskService,
    private router: Router,
    private afAuth: AngularFireAuth,
    public navCtrl:NavController) {}

  ngOnInit(){
    this.taskService.getAllTasks()
    .subscribe(tasks =>{
      this.tasks = tasks;
    });

  }
  
  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login')
  }

  goBack():void{
    this.navCtrl.pop()
  }

}
