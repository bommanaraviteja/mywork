import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'author',
    template: `
                 <h2> New Author Component</h2>   
                 {{ title }}

                 <ul *ngFor = "#author of authors">
                 <li>
                 {{ author }}
                 </li>
                 </ul>    
              `,
              providers: [AuthorService]

})
export class AuthorComponent{

    title: String = "Welcome to author component";
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
    
}