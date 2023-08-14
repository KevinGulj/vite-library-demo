
import {VisuallyHidden} from '@react-aria/visually-hidden';
import {useFocusRing} from '@react-aria/focus';
import { useRef } from 'react';
import {ColorWheelProps, useColorWheelState} from '@react-stately/color';
import {useColorWheel} from '@react-aria/color';

const RADIUS = 100;
const TRACK_THICKNESS = 28;
const THUMB_SIZE = 20;
 
export function ColorWheel(props: ColorWheelProps) {
  const state = useColorWheelState(props);
  const inputRef = useRef(null);
  const {trackProps, inputProps, thumbProps} = useColorWheel({
    ...props,
    outerRadius: RADIUS,
    innerRadius: RADIUS - TRACK_THICKNESS
  }, state, inputRef);

  const {focusProps, isFocusVisible} = useFocusRing();

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      <div {...trackProps} />
      <div
        {...thumbProps}
        style={{
          ...thumbProps.style,
          border: '2px solid white',
          boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
          width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
          height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
          borderRadius: '50%',
          boxSizing: 'border-box'
        }}>
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={inputRef} />
        </VisuallyHidden>
      </div>
    </div>
  );
}