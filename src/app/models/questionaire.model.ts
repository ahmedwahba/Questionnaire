export interface Questionaire {
  id: number;
  identifier: string;
  name: string;
  description: string;
  questions: Question[];
  category_name_hyphenated: string;
}

export interface Question {
  question_type: QuestionType;
  identifier: string;
  headline: string;
  description: string;
  required: boolean;
  multiple: string;
  choices: Choice[];
  jumps: Jump[];
  isAnswered?: boolean;
  isViewed?: boolean;
}

export interface Choice {
  label: string;
  value: string;
  selected: boolean;
}

export interface Jump {
  conditions: Condition[];
  destination: Destination;
}

export interface Condition {
  field: string;
  value: string;
}

export interface Destination {
  id: string;
}

export enum QuestionType {
  multipleChoice = 'multiple-choice',
  text = 'text'
}
