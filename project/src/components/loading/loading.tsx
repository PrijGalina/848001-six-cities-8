export default function Loading(): JSX.Element {
  return (
    <svg width="240" height="300" fill="#a30808" className="loading">
      <rect width="10%"  x="5%" rx="5%" ry="5%">
        <animate attributeName= "height" values="20%; 70%; 20%" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName= "y" values="40%; 15%; 40%;" dur="0.7s" repeatCount="indefinite"/>
      </rect>
      <rect width="10%"  x="25%" rx="5%" ry="5%">
        <animate attributeName= "height" values="20%; 70%; 20%" dur="0.7s" begin="0.15s" repeatCount="indefinite"/>
        <animate attributeName= "y" values="40%; 15%; 40%;" dur="0.7s" begin="0.15s" repeatCount="indefinite"/>
      </rect>
      <rect width="10%"  x="45%" rx="5%" ry="5%">
        <animate attributeName= "height" values="20%; 70%; 20%" dur="0.7s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName= "y" values="40%; 15%; 40%;" dur="0.7s" begin="0.3s" repeatCount="indefinite"/>
      </rect>
      <rect width="10%"  x="65%" rx="5%" ry="5%">
        <animate attributeName= "height" values="20%; 70%; 20%" dur="0.7s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName= "y" values="40%; 15%; 40%;" dur="0.7s" begin="0.45s" repeatCount="indefinite"/>
      </rect>
      <rect width="10%"  x="85%" rx="5%" ry="5%">
        <animate attributeName= "height" values="20%; 70%; 20%" dur="0.7s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName= "y" values="40%; 15%; 40%;" dur="0.7s" begin="0.6s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}
