let users = {
  sarahedo: {
    id: 'sarahedo',
    password:'password123',
    name: 'Sarah Edo',
    avatarURL: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1657795176~exp=1657795776~hmac=6042db2b97f05e44e5e14a3ab210cd1685d929777cf37a3a4aa25fcc3cbacf33&w=826',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password:'abc321',
    name: 'Tyler McGinnis',
    avatarURL: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1657799167~exp=1657799767~hmac=c1cbdd88932e07e6fcc74ea2b439f3753450185c273062f3647a9e37472d2579',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  mtsamis: {
    id: 'mtsamis',
    password:'xyz123',
    name: 'Mike Tsamis',
    avatarURL: 'https://cdn-icons-png.flaticon.com/512/906/906517.png?w=826&t=st=1657799200~exp=1657799800~hmac=20bd50505bd74d5b031492d5ec069dde6ccab1df5dc68780fff92f18e077fb39',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  zoshikanlu: {
    id: 'zoshikanlu',
    password:'pass246',
    name: 'Zenobia Oshikanlu',
    avatarURL: 'https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?t=st=1657795176~exp=1657795776~hmac=12fb67b105b3b9ea13ce5e3629fa50d19910431e3a3ec685c00d21f173b7d738&w=826',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
    },
    questions: [],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'Build our new application with Javascript',
    },
    optionTwo: {
      votes: [],
      text: 'Build our new application with Typescript'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'mtsamis',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'hire more frontend developers',
    },
    optionTwo: {
      votes: ['mtsamis', 'sarahedo'],
      text: 'hire more backend developers'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'conduct a release retrospective 1 week after a release',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'conduct release retrospectives quarterly'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'have code reviews conducted by peers',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'have code reviews conducted by managers'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'take a course on ReactJS',
    },
    optionTwo: {
      votes: ['mtsamis'],
      text: 'take a course on unit testing with Jest'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'mtsamis',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['mtsamis', 'zoshikanlu'],
      text: 'deploy to production once every two weeks',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'deploy to production once every month'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((resolve) => {
    setTimeout(() => resolve({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((resolve) => {
    setTimeout(() => resolve({...questions}), 1000)
  })
}

export function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((resolve, reject) => {
    if (!question.optionOneText || !question.optionTwoText || !question.author) {
      reject("Please provide optionOneText, optionTwoText, and author");
    }

    const formattedQuestion = formatQuestion(question)
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      resolve(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer (answer) {
  return new Promise((resolve, reject) => {
    if (!answer.authedUser || !answer.qid || !answer.answer) {
      reject("Please provide authedUser, qid, and answer");
    }

    setTimeout(() => {
      users = {
        ...users,
        [answer.authedUser]: {
          ...users[answer.authedUser],
          answers: {
            ...users[answer.authedUser].answers,
            [answer.qid]: answer.answer
          }
        }
      }

      questions = {
        ...questions,
        [answer.qid]: {
          ...questions[answer.qid],
          [answer.answer]: {
            ...questions[answer.qid][answer.answer],
            votes: questions[answer.qid][answer.answer].votes.concat([answer.authedUser])
          }
        }
      }

      resolve(true)
    }, 500)
  })
}
export const userstate=users
export const questionstate=questions