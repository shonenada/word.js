words = [
    {
        'word': 'republican',
        'options': ['a.共和国的', 'a.确定的;肯定的',
                    'a.透明的;易识破的', 'a.清白的;幼稚的'],
        'answer': 0
    },
    {
        'word': 'rose',
        'options': ['n.手指;指状物', 'n.蔷薇花',
                    'n.咖啡馆;小餐厅', 'n.透视;远景'],
        'answer': 1
    },
    {
        'word': 'mode',
        'options': ['n.家庭教师;导师', 'n.领导',
                    'n.方式，样式', 'n.俘虏'],
        'answer': 2
    },
    {
        'word': 'submerge',
        'options': ['vt.使更新', 'vt.浸没',
                    'vt.转', 'vt.完成'],
        'answer': 2
    },
    {
        'word': 'owner',
        'options': ['n.结果,后果,成果', 'n.潮湿,湿气;湿度',
                    'n.典礼,仪式', 'n.物主'],
        'answer': 3
    }
]

var randomInt = function(upper, lower) {
    return parseInt(Math.random() * (upper - lower + 1) + lower); 
}

function WordController ($scope) {

    $scope.init = function () {
        $scope.total = 0;
        $scope.right = 0;
        $scope.wrong = 0;
        $scope.current = 0;
        $scope.word = words[$scope.current];
    }

    $scope.randomWord = function () {
        $scope.current = randomInt(0, 4);
        $scope.word = words[$scope.current];
    }

    $scope.nextWord = function () {
        $scope.current += 1;
        if ($scope.current >= words.length) {
            alert("Finished");
        }
        $scope.word = words[$scope.current];
    }

    $scope.check = function (index) {
        if (index == $scope.word.answer) {
            $scope.right += 1;
            $scope.nextWord();
        }else {
            $scope.wrong += 1;
        }
    }
}