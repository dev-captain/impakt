import { SVGProps } from 'react';

function AddMemberIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 14C12.83 14 7.5 15.33 7.5 18V20H23.5V18C23.5 15.33 18.17 14 15.5 14ZM6.5 10V7H4.5V10H1.5V12H4.5V15H6.5V12H9.5V10H6.5ZM15.5 12C16.5609 12 17.5783 11.5786 18.3284 10.8284C19.0786 10.0783 19.5 9.06087 19.5 8C19.5 6.93913 19.0786 5.92172 18.3284 5.17157C17.5783 4.42143 16.5609 4 15.5 4C14.4391 4 13.4217 4.42143 12.6716 5.17157C11.9214 5.92172 11.5 6.93913 11.5 8C11.5 9.06087 11.9214 10.0783 12.6716 10.8284C13.4217 11.5786 14.4391 12 15.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default AddMemberIcon;
