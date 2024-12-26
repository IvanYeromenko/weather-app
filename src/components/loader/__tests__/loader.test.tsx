import React from 'react';

import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {Loader} from '@/components';
import {COLORS} from '@/constants';

describe('Loader', () => {
  it('should render the loader', () => {
    const {getByTestId} = render(<Loader testID={'test-activity-indicator'} />);
    const loader = getByTestId('test-activity-indicator');
    expect(loader).toBeTruthy();
  });

  it('should apply default size and color', () => {
    const {getByTestId} = render(<Loader testID={'test-activity-indicator'} />);
    const loader = getByTestId('test-activity-indicator');
    expect(loader.props.size).toBe('large');
    expect(loader.props.color).toBe(COLORS.primary);
  });

  it('should apply custom styles', () => {
    const customStyle = {margin: 10};
    const {getByTestId} = render(<Loader style={customStyle} testID={'test-activity-indicator'} />);
    const loader = getByTestId('test-activity-indicator');
    expect(loader.props.style).toContainEqual(customStyle);
  });

  it('should pass additional props', () => {
    const {getByTestId} = render(
      <Loader accessibilityLabel={'loading-indicator'} testID={'test-activity-indicator'} />,
    );
    const loader = getByTestId('test-activity-indicator');
    expect(loader.props.accessibilityLabel).toBe('loading-indicator');
  });
});
