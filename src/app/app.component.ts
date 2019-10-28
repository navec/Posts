import { Component } from '@angular/core';
import { Post } from './app-type.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de',
      loveIts: 0,
      created_at: new Date()
    },
  ]
}
