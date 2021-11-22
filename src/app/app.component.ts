import { Questionaire } from './models/questionaire.model';
import { Component, OnInit } from '@angular/core';
import { QuestionaireService } from './components/services/questionaire.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;

  constructor(
    public questionaireService: QuestionaireService
  ) {}

  ngOnInit(): void {
    this.questionaireService.loadQuestionaireData().subscribe( data =>{
      if (data) {
        const questionaire: Questionaire = data.questionnaire;
        this.title = questionaire.name;
      }
    })
  }

}
