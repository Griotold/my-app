import logo from './logo.svg';
import './App.css';

// 1. return 시에 하나의 Dom만 리턴 가능
// 2. 변수 선언은 let 혹은 const로만!
// 3. if 사용 불가 -> 삼항 연산자는 사용 가능
// 4. 조건부 렌더링 -> (조건 && 값(true))
// 5. css디자인

let a = 10;
const b = 20;

function App() {
    let c;
    // console.log(1, c);

    const mystyle = {
        color: 'magenta',
    };

    return (
        <div>
            <div style={mystyle}>
                안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
            </div>
            <h1 className="box-style">헤딩태그 {b === 20 && '20입니다.'}</h1>
            <hr />
        </div>
    );
}

export default App;
