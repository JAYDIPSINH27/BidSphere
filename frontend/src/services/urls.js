export const baseURL = import.meta.env.VITE_BACKEND_URL;

const questionAndAnswerURL = `${baseURL}/q&a`;

const questionaireURL = `${questionAndAnswerURL}/questionaire`;
const nestedCommentURL = `${questionAndAnswerURL}/nested-comments`;

export const quesnAnsService = {
  questionaireService: {
    getAllQuestions: `${questionaireURL}/getAllQuestions`,
    postQuestion: `${questionaireURL}/postQuestion`,
  },
  nestedCommentService: {
    getQuestionById: `${questionaireURL}/getQuestionById`,
    getCommentsByQid: nestedCommentURL,
    postReplyToComment: `${nestedCommentURL}/replyToComment`,
  },
};
