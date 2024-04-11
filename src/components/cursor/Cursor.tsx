import AnimatedCursor from 'react-animated-cursor';
import { Simulate } from 'react-dom/test-utils';
import blur = Simulate.blur;

export const Cursor = () => {

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color="76, 201, 240"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2} clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
    ]}
    />

  );
};


