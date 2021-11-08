type FeaturesProps = {
  features?: string[],
}

export default function Features({features}: FeaturesProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features && features.map((feature) =>  (
          <li key ={feature} className="property__inside-item">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
