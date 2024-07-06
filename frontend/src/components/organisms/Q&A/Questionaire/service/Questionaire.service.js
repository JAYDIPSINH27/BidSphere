import { quesnAnsService } from '@services/urls';
import { http } from '@services/http';

export const getAllQuestions = () => http.get(quesnAnsService.questionaireService.getAllQuestions);
export const postQuestion = payload => http.post(quesnAnsService.questionaireService.postQuestion, payload);
