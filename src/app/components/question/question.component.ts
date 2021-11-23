import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Question, QuestionType } from './../../models/questionaire.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('0.9s ease-in-out')]),
    ]),
  ],
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  currentIndex = 0;
  quizFinished: boolean;
  questionType = QuestionType;
  requiredCount: number;
  answeredCount = 0;
  viewedCount = 0;

  constructor(public route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe((res) => {
      if (res.data) {
        this.questions = res.data.questions;
        this.requiredCount = this.questions.filter(
          (question) => question.required === true
        ).length;
      }
    });
  }

  onSelectOption(optionIndex: number): void {
    if (this.questions[this.currentIndex]) {
      const validChoice =
        this.questions[this.currentIndex].choices[optionIndex];
      if (validChoice) {
        this.questions[this.currentIndex].choices[optionIndex].selected =
          !validChoice.selected;
        this.markQuestionAsAnswered();
      }
    }
  }

  onTextInputChange(description: string): void {
    if (description && description.length > 0) {
      this.markQuestionAsAnswered();
    }
  }

  markQuestionAsAnswered(): void {
    if (this.questions[this.currentIndex].required) {
      if (!this.questions[this.currentIndex].isAnswered) {
        this.answeredCount += 1;
      }
      this.questions[this.currentIndex].isAnswered = true;
    }
  }

  markQuestionAsViewed(): void {
    if (!this.questions[this.currentIndex].isViewed) {
      this.viewedCount += 1;
    }
    this.questions[this.currentIndex].isViewed = true;
  }

  onNextClick(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.markQuestionAsViewed();
      this.checkNextQuestionOrder(this.questions[this.currentIndex]);
      this.currentIndex += 1;
    }
    this.isQuizCompeleted();
  }

  onPreviousClick(): void {
    if (this.currentIndex >= 1) {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  isQuizCompeleted(): void {
    this.quizFinished =
      this.viewedCount === this.questions.length - 1 &&
      this.requiredCount <= this.answeredCount;
  }

  /**
   * @param question: current question
   * @description this function used to check if next question is pre-determinded &
   *  force display this one on the right order up on jumps array and chosen answer
   */
  checkNextQuestionOrder(question: Question): void {
    const questionIndex = this.questions.findIndex(
      (q) => q.identifier === this.getNextQuestionIdentifier(question)
    );
    if (questionIndex !== -1 && questionIndex > this.currentIndex + 1) {
      this.swapNextQuestionOrder(questionIndex);
    }
  }

  /**
   *
   * @param question: current question
   * @returns next question identifier
   * @description function used to search for destination identifier
   */
  getNextQuestionIdentifier(question: Question): string {
    let targetId = '';
    const chosenOption = question.choices.find((choice) => choice.selected);
    if (chosenOption) {
      question.jumps.forEach((item) => {
        if (item.conditions[0].value === chosenOption.value) {
          targetId = item.destination.id;
        }
      });
    }
    return targetId;
  }

  /**
   *
   * @param targetQuestionIndex next question index
   * @description swap next question to the right order
   */
  swapNextQuestionOrder(targetQuestionIndex: number): void {
    const targetQuestion = this.questions[targetQuestionIndex];
    this.questions = this.questions.filter(
      (question, index) => index !== targetQuestionIndex
    );
    this.questions.splice(this.currentIndex + 1, 0, targetQuestion);
  }

  finishQuiz(): void {
    void this.location.back();
  }
}
