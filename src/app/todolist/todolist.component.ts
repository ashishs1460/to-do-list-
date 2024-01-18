import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {

  taskArray = [{taskName:'Brush teeth', isCompleted:false}]
  
  onSubmit(formdata : NgForm){

    this.taskArray.push({
      taskName:formdata.controls['task'].value,
      isCompleted:false
    })

    formdata.reset()

  }
  onDelete(index:number){
   this.taskArray.splice(index, 1)
  }
  onCheck(index:number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }

  ngOnInit(): void {
    
  }

}
