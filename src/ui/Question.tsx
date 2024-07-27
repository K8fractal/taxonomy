import { Organism } from "../organisms/organism";
import { Answer, generateAnswerOptions } from "../domain/generateAnswerOptions";
type QuestionProps = {
  a: Organism;
  b: Organism;
};

export function Question(props: QuestionProps) {
  const { a, b } = props;
  const answers = generateAnswerOptions(a, b, 4);

  const checkAnswer = (e: React.MouseEvent, answer: Answer): void => {
    e.preventDefault();
    alert(answer.matches + "_" + answer.best);
  };

  return (
    <div>
      <p>
        {a.name}
        <span> </span>
        {b.name}
      </p>
      <div>
        {answers.map((answer) => (
          <p>
            <button onClick={(event) => checkAnswer(event, answer)}>
              {`${answer.clade.level}: ${answer.clade.value}`}
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}
