import { Organism } from "../organisms/organism";

type OrganismDisplayProps = {
  organism: Organism;
  includeLinks?: boolean;
};

export function OrganismDisplay(props: OrganismDisplayProps) {
  const { organism: o, includeLinks = false } = props;

  return (
    <div className="organismDisplay">
      <h2>{o.name}</h2>
      <img src={o.imageSource} />
      {includeLinks && <a href={o.sourcePage}>Learn more</a>}
    </div>
  );
}
