import * as React from 'react';
import { SVGProps } from 'react';

const ProfileUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 .001a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2.392a2.646 2.646 0 1 1 0 5.292 2.646 2.646 0 0 1 0-5.292Zm-.002 11.516a5.87 5.87 0 0 1-3.823-1.41 1.128 1.128 0 0 1-.396-.857c0-1.482 1.2-2.668 2.682-2.668H9.54a2.665 2.665 0 0 1 2.677 2.668c0 .33-.144.643-.395.857a5.869 5.869 0 0 1-3.824 1.41Z"
      fill="#fff"
    />
  </svg>
);

export default ProfileUserIcon;
