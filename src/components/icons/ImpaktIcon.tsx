import { SVGProps } from 'react';

type ImpaktIconPropsType = SVGProps<SVGSVGElement> & { isblack?: string };

const ImpaktIcon = (props: ImpaktIconPropsType) => (
  <svg
    width="111"
    height="32"
    viewBox="0 0 111 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94.9472 2.61567C94.7717 2.6656 94.4892 2.78999 94.3192 2.8921C94.1442 2.99725 91.3307 5.79394 87.8317 9.34101C81.84 15.415 81.6456 15.6203 81.403 16.1332C80.942 17.1075 80.9191 17.3385 80.942 20.7874L80.9625 23.855L81.1586 24.2586C81.9143 25.814 84.0147 25.7222 84.749 24.1018C84.8407 23.8997 84.8694 23.4461 84.9078 21.5984C84.9558 19.2921 84.9806 19.0788 85.2693 18.4956C85.6315 17.7637 86.1849 17.5162 86.8404 17.793C87.0137 17.8662 88.2322 19.0437 90.5885 21.4151C94.4335 25.2845 94.4423 25.2919 95.311 25.3552C96.2143 25.421 97.0242 24.9626 97.4497 24.1447C97.6126 23.8316 97.6372 23.7013 97.6378 23.1498C97.6383 22.5768 97.618 22.4775 97.4291 22.1287C97.2727 21.8401 96.2505 20.756 93.3867 17.8416L89.5538 13.9408L93.429 10.0126C96.4314 6.96912 97.3398 6.00789 97.4623 5.74486C97.8112 4.99525 97.6997 4.03612 97.1877 3.38136C96.6879 2.74225 95.6947 2.40292 94.9472 2.61567ZM82.5184 5.49769C81.7208 5.60156 80.9457 6.18616 80.5906 6.95199C80.4297 7.29894 80.4043 7.44491 80.4043 8.02359C80.4043 8.60007 80.43 8.7488 80.5882 9.08982C80.8345 9.62076 81.1898 10.003 81.6764 10.2606C82.1796 10.5271 82.3798 10.5753 82.9609 10.5701C83.5888 10.5645 84.1134 10.3562 84.576 9.92892C86.4526 8.19558 85.047 5.16851 82.5184 5.49769Z"
      fill="#F04153"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.59518 0.0981242C0.549965 0.481603 -0.067811 1.43402 0.00593976 2.54807C0.0473853 3.17322 0.256218 3.64308 0.685536 4.07698C1.17988 4.5766 1.57529 4.73654 2.32745 4.74098C2.88452 4.74423 3.00237 4.72138 3.37106 4.53838C3.8631 4.29425 4.30407 3.8583 4.53265 3.39013C4.67101 3.10665 4.69759 2.94432 4.69759 2.38228C4.69759 1.81398 4.67164 1.65884 4.52644 1.35977C4.30505 0.903514 3.77393 0.368069 3.35557 0.179361C2.91201 -0.0207698 2.03014 -0.0614589 1.59518 0.0981242ZM104.825 3.08472L103.011 3.62623L102.992 5.54292L102.974 7.45961H101.37H99.7664V9.25783V11.056H101.371H102.976V15.6574C102.977 20.6258 103.006 21.1261 103.351 22.1295C103.58 22.7959 103.833 23.2121 104.32 23.7259C104.827 24.2617 105.458 24.6092 106.378 24.8594C107.021 25.0341 107.151 25.0444 108.767 25.0491C109.707 25.0518 110.594 25.0287 110.738 24.9979L111 24.9417V23.2602V21.5787L109.727 21.5868C108.316 21.5959 107.918 21.5314 107.421 21.2127C107.028 20.9606 106.819 20.536 106.734 19.8149C106.699 19.516 106.679 17.4309 106.69 15.1814L106.709 11.0913L108.854 11.0727L111 11.054V9.25783V7.46165L108.854 7.44297L106.709 7.42435L106.674 4.98378L106.639 2.54321L104.825 3.08472ZM16.4566 7.01471C14.8293 7.18875 13.3234 8.07241 12.4626 9.35817C12.3442 9.53489 12.3409 9.51141 12.3405 8.49975L12.34 7.45961H10.4561H8.5722V16.2039V24.9482H10.4533H12.3344L12.358 19.3948C12.3797 14.3125 12.3922 13.8056 12.5062 13.4184C12.7119 12.7194 13.0228 12.1381 13.4268 11.6971C14.1898 10.8642 14.9339 10.5462 16.1426 10.5366C16.7654 10.5317 16.9957 10.5602 17.3637 10.6879C18.4696 11.0713 19.1582 12.0004 19.3876 13.4184C19.4282 13.6695 19.4563 16.1003 19.4565 19.3948L19.4569 24.9482H21.3408H23.2247V19.5505C23.2247 13.483 23.2225 13.5142 23.7206 12.4803C24.4173 11.0339 25.878 10.3007 27.5546 10.5558C28.6335 10.72 29.4936 11.3488 29.9349 12.2963C30.3378 13.1613 30.3391 13.1838 30.3404 19.3243L30.3416 24.9482H32.2255H34.1094V19.3847C34.1094 13.6716 34.0778 12.8196 33.8291 11.8301C33.3386 9.87782 32.1462 8.38128 30.4262 7.55883C30.2162 7.45848 29.7424 7.29544 29.3732 7.1965C28.7928 7.04108 28.5509 7.01612 27.5855 7.0121C25.79 7.00469 24.6891 7.34241 23.5377 8.25371C23.1169 8.58677 22.901 8.82266 22.3157 9.58856C22.2132 9.72275 22.2001 9.71373 21.9712 9.3519C21.6288 8.81067 20.8773 8.08588 20.3134 7.75303C19.2594 7.13092 17.8652 6.86401 16.4566 7.01471ZM46.8431 7.03368C45.0489 7.24812 43.3635 8.13447 42.2958 9.42495L41.8891 9.9164L41.8701 8.68804L41.851 7.45961H40.0036H38.1562V19.7298V32H40.0048H41.8533L41.8712 27.2433L41.8891 22.4866L42.2671 22.9508C43.076 23.9443 44.4144 24.79 45.699 25.1192C49.0836 25.9866 52.4292 24.8604 54.5867 22.1274C56.0109 20.3234 56.6634 18.2083 56.5554 15.7455C56.4446 13.2193 55.5972 11.2446 53.8922 9.5399C52.5748 8.22276 51.2775 7.49733 49.5991 7.13938C48.9788 7.00709 47.5302 6.95152 46.8431 7.03368ZM66.8681 7.00589C64.6839 7.30834 63.2949 7.96431 61.8314 9.38441C60.427 10.747 59.5368 12.4144 59.1746 14.3606C58.9984 15.3077 59.0202 17.2985 59.2171 18.2302C59.8208 21.0865 61.6585 23.4624 64.192 24.6623C66.4569 25.735 69.5913 25.6258 71.6392 24.403C72.2219 24.055 72.9991 23.3789 73.392 22.8781L73.706 22.4778L73.725 23.713L73.744 24.9482H75.6263H77.5086V16.2039V7.45961H75.6247H73.7408V8.6525V9.84531L72.9908 9.08872C71.9262 8.01487 70.9982 7.49635 69.5619 7.17267C68.986 7.04291 67.3377 6.94087 66.8681 7.00589ZM0.478447 16.2039V24.9482H2.36234H4.24623V16.2039V7.45961H2.36234H0.478447V16.2039ZM48.8516 10.7701C50.3852 11.1666 51.8276 12.4479 52.4315 13.95C53.0065 15.3802 52.9453 17.4082 52.2857 18.775C51.633 20.1276 50.5081 21.1053 49.0758 21.5651C48.382 21.7878 46.8378 21.842 46.0652 21.6707C44.2181 21.2615 42.7118 19.8664 42.1421 18.0374C41.6996 16.6165 41.8157 14.8624 42.4346 13.6204C43.2409 12.002 44.7155 10.9108 46.462 10.6401C47.091 10.5425 48.2066 10.6032 48.8516 10.7701ZM69.0435 10.636C70.1003 10.7783 70.9237 11.1288 71.7077 11.7699C72.5968 12.4971 73.2965 13.5847 73.5619 14.6525C73.7252 15.3094 73.7765 16.421 73.6757 17.1181C73.5729 17.8283 73.2905 18.6602 72.968 19.2032C72.4331 20.1037 71.4015 21.0079 70.4807 21.3835C69.7068 21.6992 69.0732 21.7951 67.9949 21.7601C67.1221 21.7317 66.9369 21.703 66.3964 21.5127C65.6086 21.2353 65.1112 20.9331 64.5066 20.3645C63.6644 19.5723 63.1236 18.5837 62.887 17.4037C62.7452 16.6964 62.779 15.266 62.9529 14.6172C63.1549 13.8635 63.646 12.9584 64.1541 12.4039C65.463 10.9749 67.1181 10.3765 69.0435 10.636Z"
      fill={props.isblack === 'true' ? '#000' : 'white'}
    />
  </svg>
);

export default ImpaktIcon;
