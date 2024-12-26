import React from 'react';
import {describe, expect, it, jest} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import {SearchField} from '@/components';

describe('SearchField', () => {
  it('should render the label if provided', () => {
    const {getByText} = render(<SearchField lable={'Search'} />);
    expect(getByText('Search')).toBeTruthy();
  });

  it('should render the clear icon when value is provided', () => {
    const {getByTestId} = render(<SearchField value={'Test'} />);
    const clearIcon = getByTestId('test-clear-icon');
    expect(clearIcon).toBeTruthy();
  });

  it('should call onChangeText with an empty string when clear icon is pressed', () => {
    const onChangeTextMock = jest.fn();
    const {getByTestId} = render(<SearchField value={'Test'} onChangeText={onChangeTextMock} />);
    const clearIcon = getByTestId('test-clear-icon');
    fireEvent.press(clearIcon);
    expect(onChangeTextMock).toHaveBeenCalledWith('');
  });

  it('should call onEndIconPress when clear icon is pressed', () => {
    const onEndIconPressMock = jest.fn();
    const {getByTestId} = render(
      <SearchField value={'Test'} onEndIconPress={onEndIconPressMock} />,
    );
    const clearIcon = getByTestId('test-clear-icon');
    fireEvent.press(clearIcon);
    expect(onEndIconPressMock).toHaveBeenCalled();
  });

  it('should update the input value when text changes', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchField value={''} onChangeText={onChangeTextMock} placeholder={'Search here'} />,
    );
    const input = getByPlaceholderText('Search here');
    fireEvent.changeText(input, 'New text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New text');
  });
});
