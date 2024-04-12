import AnimatedCursor from 'react-animated-cursor';

export const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color='186, 255, 73'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={4}
      clickables={[
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
