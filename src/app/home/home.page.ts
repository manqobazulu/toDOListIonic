import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTodoPage } from '../pages/add-todo/add-todo.page';
import * as firebase from 'firebase/app';

require('firebase/firestore');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  toDoList = [];
  newItem: any;
  imgUrl =[];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    firebase.firestore().collection('toDo').onSnapshot(res => {
      res.forEach(element => {
        this.toDoList.push(element.data());
      });
      console.log('Successful!!!');
    });
    
  
  }
  async presentAddTodoModal() {
    const modal = await this.modalController.create({
      component: AddTodoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
    


// addPic(event:any)
// {
//  let reader=new FileReader();
//  reader.onload=(event:any) =>{
//    this.DownloadUrl= event.target.result;}
// reader.readAsDataURL(event.target.files[0]);
 
// }
// addToList(){
// this.toDoList =this.newItem
// this.newItem="";

// firebase.firestore().collection('toDo').add(Object.assign({url:this.imgUrl},{item:this.newItem.toDoList}))
// .then((res)=>{
//   console.log("Documents written successfully");
// }).catch((error)=>{
//   console.log("Error written documents",error)
// });

// }
async delTodo(){
    
  firebase.firestore().collection("toDo").doc("https://console.firebase.google.com/project/shoppinlist-2597c/firestore/data/toDo/CFZ38ExFErEBKKalj3Nb").delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
});
firebase.firestore().collection("toDo").doc("https://console.firebase.google.com/project/shoppinlist-2597c/firestore/data/toDo/CFZ38ExFErEBKKalj3Nb").delete().then(function() {
  console.log("Document successfully deleted!");
}).catch(function(error) {
  console.error("Error removing document: ", error);
});
firebase.firestore().collection("toDo").doc("https://console.firebase.google.com/project/shoppinlist-2597c/firestore/data/toDo/Y8Vb5nBvA5CA433ybgoO").delete().then(function() {
console.log("Document successfully deleted!");
}).catch(function(error) {
console.error("Error removing document: ", error);
});
firebase.firestore().collection("toDo").doc("i1VrWfkg6M0Yn5fIZIx9").delete().then(function() {
console.log("Document successfully deleted!");
}).catch(function(error) {
console.error("Error removing document: ", error);
});
firebase.firestore().collection("toDo").doc("jWa7qnCedeXJ4EGvn8KJ").delete().then(function() {
console.log("Document successfully deleted!");
}).catch(function(error) {
console.error("Error removing document: ", error);
});

firebase.firestore().collection("toDo").doc("n7NN1YG4pnC75hb47SBD").delete().then(function() {
console.log("Document successfully deleted!");
}).catch(function(error) {
console.error("Error removing document: ", error);
});

firebase.firestore().collection("toDo").doc("nhSL5LcwduKOJnZwxSuV").delete().then(function() {
console.log("Document successfully deleted!");
}).catch(function(error) {
console.error("Error removing document: ", error);
});

firebase.firestore().collection("toDo").doc("j4Ofxq1TOIPSMxzt3luD").delete().then(function() {
console.log("Document successfully deleted!");
}).catch(function(error) {
console.error("Error removing document: ", error);
});


}





 
}
