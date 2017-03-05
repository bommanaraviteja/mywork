import {Component} from 'angular2/core';
import {CouresComponent} from './courses.component';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: '<h1>Hello World!!!!!</h1><courses></courses> <author></author>',
    directives:[CouresComponent, AuthorComponent]
})
export class AppComponent { }