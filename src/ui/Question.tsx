import { Organism } from "../organisms/organism";
import { generateAnswerOptions } from "../domain/generateAnswerOptions";
type QuestionProps = {
  a: Organism;
  b: Organism;
};

export function Question(props: QuestionProps) {
  const { a, b } = props;
  const answers = generateAnswerOptions(a, b, 4);
  return (
    <div>
      <p>{a.name}</p>
      <p>{b.name}</p>
      <div>
        {answers.map((answer) => (
          <button>{answer.clade.value}</button>
        ))}
      </div>
    </div>
  );
}
