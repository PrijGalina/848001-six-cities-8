type PremiumBlockProps = {
  isPropertyDetail?: boolean,
};

export default function PremiumBlock({isPropertyDetail}: PremiumBlockProps): JSX.Element {
  return (
    <div className={isPropertyDetail ? 'property__mark' : 'place-card__mark'}>
      <span>Premium</span>
    </div>
  );
}
