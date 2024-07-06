import { http } from '../../../../../services/http';
import { quesnAnsService } from '../../../../../services/urls';

export const getAllQuestions = () => http.get(quesnAnsService.questionaireService.getAllQuestions);
export const postQuestion = payload => http.post(quesnAnsService.questionaireService.postQuestion, payload);
