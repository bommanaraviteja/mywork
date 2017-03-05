import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
                <h2>New Courses Component</h2>
                {{ title }} <input type="text" autoGrow/>
                <ul *ngFor = "#course of courses">
                <li>{{ course }}</li>
                </ul>
              `,
              providers: [CoursesService],
              directives: [AutoGrowDirective]
})
export class CouresComponent{
    title: String = "Computer Science of Engineering";
    courses;
    constructor(courseService : CoursesService){
        this.courses = courseService.getCourses();
    }

}