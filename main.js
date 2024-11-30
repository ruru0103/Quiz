const quiz = [
    {
    question: 'Q1. 貯金をする主な目的は何ですか？',
    choices: [
    'お菓子を買うため',
    '将来のための備え',
    '毎日の支出を増やすため'
    ],
    correct: '将来のための備え'
    },
    {
    question: 'Q2. 利子とは何ですか？',
    choices: [
    'お金を借りるときに支払うお金',
    'お金を貯めたときに得られるお金',
    '買い物で得られる割引'
    ],
    correct: 'お金を貯めたときに支払うお金'
    },
    {
    question: 'Q3. 投資をすることのメリットは何ですか？',
    choices: [
    'すぐにお金が返ってくる',
    'お金が増える可能性がある',
    '無駄遣いができる'
    ],
    correct: 'お金が増える可能性がある'
    },
    {
    question: 'Q4. 予算を立てる理由は何ですか？',
    choices: [
    'お金を使わないため',
    'お金の使い道を計画するため',
    '借金を増やすため'
    ],
    correct: 'お金の使い道を計画するため'
    },
    {
    question: 'Q5. クレジットカードを使うときの特徴は何ですか？',
    choices: [
    '必ず使わなければならない',
    'いつでも使えるが、必ず返さないといけない',
    '自分のお金ではないお金を使える'
    ],
    correct: 'いつでも使えるが、必ず返さないといけない'
    },
    {
    question: 'Q6. 次のうち、必要な支出はどれですか？',
    choices: [
    '食費',
    '趣味の本',
    '新しいゲーム'
    ],
    correct: '食費'
    },
    {
    question: 'Q7. お金を上手に管理するために必要なことは何ですか？',
    choices: [
    '無駄に使うこと',
    '収入と支出を記録すること',
    '使いたいだけ使うこと'
    ],
    correct: '収入と支出を記録すること'
    },
    {
    question: 'Q8. 貯金箱の利点は何ですか？',
    choices: [
    'お金を簡単に使える',
    'お金を視覚的に見ることで貯金が楽しくなる',
    'お金が増えることはない'
    ],
    correct: 'お金を視覚的に見ることで貯金が楽しくなる'
    },
    {
    question: 'Q9. サステイナブルなお金の使い方は何ですか？',
    choices: [
    '浪費をすること',
    '必要なものを選び、無駄を減らすこと',
    'いつでも買い物をすること'
    ],
    correct: '必要なものを選び、無駄を減らすこと'
    },
    {
    question: 'Q10. お金の価値が下がることを何と言いますか？',
    choices: [
    'インフレーション',
    'デフレーション',
    'マネーゲーム'
    ],
    correct: 'インフレーション'
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}