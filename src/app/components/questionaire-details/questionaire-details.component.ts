import { Questionaire } from './../../models/questionaire.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-questionaire-details',
  templateUrl: './questionaire-details.component.html',
  styleUrls: ['./questionaire-details.component.css']
})
export class QuestionaireDetailsComponent implements OnInit {

  questionaire: Questionaire;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(res => {
      if (res.data) {
        this.questionaire = res.data;
      }
    });
  }

  onStartClick(): void {
    this.router.navigate(['questions']);
  }


}
