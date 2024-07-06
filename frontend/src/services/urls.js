export const baseURL = import.meta.env.VITE_BACKEND_URL;

const questionAndAnswer = `${baseURL}/questionAndAnswer`;
const commentURL = `${baseURL}/comments`;

export const quesnAnsService = {
  questionaireService: {
    getAllQuestions: `${questionAndAnswer}/getAllQuestions`,
    postQuestion: `${questionAndAnswer}/postQuestion`,
  },
  nestedCommentService: {
    getCommentsByQid: commentURL,
    getQuestionById: `${questionAndAnswer}/getQuestionById`,
    postReplyToComment: `${commentURL}/replyToComment`,
  },
};
