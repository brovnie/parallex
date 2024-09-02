import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { MultiLayerParallax } from './components/MultiLayerParallax ';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MultiLayerParallax />
      <div className="max-w-lg space-y-4 mx-auto py-24 text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
          earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
          dolores odio excepturi facilis laboriosam officiis dolorem, nobis
          reprehenderit molestiae.
        </p>
      </div>
    </div>
  );
}

export default App;
