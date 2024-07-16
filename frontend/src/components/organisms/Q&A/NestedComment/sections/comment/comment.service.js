import { http } from '@services/http';
import { quesnAnsService } from '@services/urls';

export const getCommentByQid = payload => http.post(quesnAnsService.nestedCommentService.getCommentsByQid, payload);
export const replyToComment = payload => http.post(quesnAnsService.nestedCommentService.postReplyToComment, payload);
