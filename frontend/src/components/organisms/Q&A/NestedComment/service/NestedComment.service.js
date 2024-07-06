import { quesnAnsService } from '@services/urls';
import { http } from '@services/http';

export const getQuestionById = payload => http.post(quesnAnsService.nestedCommentService.getQuestionById, payload);
