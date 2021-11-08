type PremiumBlockProps = {
  isPropertyDetail?: boolean,
};

export default function PremiumBlock({isPropertyDetail}: PremiumBlockProps): JSX.Element {
  const divClass = isPropertyDetail ? 'property__mark' : 'place-card__mark';

  return (
    <div className={divClass}>
      <span>Premium</span>
    </div>
  );
}
