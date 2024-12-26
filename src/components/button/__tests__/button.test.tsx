import React from 'react';
import {describe, expect, it, jest} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from '@/components';
import {COLORS} from '@/constants';

describe('Button', () => {
  it('should render the button text', () => {
    const {getByText} = render(<Button text={'Click me'} />);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should apply the correct style when disabled', () => {
    const {getByText} = render(<Button text={'Click me'} disabled />);
    const buttonText = getByText('Click me');
    expect(buttonText.props.style[1].color).toBe(COLORS.lightGrey);
  });

  it('should apply the correct style when active', () => {
    const {getByText} = render(<Button text={'Click me'} />);
    const buttonText = getByText('Click me');
    expect(buttonText.props.style[1].color).toBe(COLORS.white);
  });

  it('should call the provided onPress handler', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<Button text={'Click me'} onPress={onPressMock} />);
    fireEvent.press(getByText('Click me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should not trigger onPress when disabled', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<Button text={'Click me'} disabled onPress={onPressMock} />);
    fireEvent.press(getByText('Click me'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
