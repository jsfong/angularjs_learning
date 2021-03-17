import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1615910388452-fdad95ebb038?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, 
    {
      title: 'Women',
      url: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, 
    {
      title: 'Road',
      url: 'https://images.unsplash.com/photo-1615726244940-a923cec9a0f5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1615910388452-fdad95ebb038?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, 
    {
      title: 'Women',
      url: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }, 
    {
      title: 'Road',
      url: 'https://images.unsplash.com/photo-1615726244940-a923cec9a0f5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }
  ];
  

  checkWindowIndex (index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
