import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private testService: TestService) { }
  title = 'BlogFront';
  text = ""
   ngOnInit() {
    this.testService.getData().subscribe(
      (data: any) => {
        this.text= data.text;
      }
    );

  }
}
