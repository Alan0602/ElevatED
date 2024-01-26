
type Props = {
    color:string
}

export const ArrowRightsvg = ({color}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.645917 0.757598C0.739721 0.665206 0.86709 0.613281 0.999917 0.613281C1.13274 0.613281 1.26011 0.665206 1.35392 0.757598L7.35392 6.65233C7.44796 6.74449 7.50081 6.86963 7.50081 7.00013C7.50081 7.13062 7.44796 7.25576 7.35392 7.34791L1.35392 13.2427C1.15843 13.4347 0.841497 13.4347 0.645978 13.2427C0.450459 13.0507 0.450377 12.7393 0.645795 12.5472L6.29292 7.00013L0.645917 1.45318C0.551876 1.36102 0.499023 1.23588 0.499023 1.10539C0.499023 0.974891 0.551876 0.849757 0.645917 0.757598H0.645917Z"
        fill={color}
      />
    </svg>
  );
}


export const Notificationsvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
    >
      <path
        d="M18 4.50001C18 6.43001 16.43 8.00001 14.5 8.00001C12.57 8.00001 11 6.43001 11 4.50001C11 2.57001 12.57 1.00001 14.5 1.00001C16.43 1.00001 18 2.57001 18 4.50001ZM16 9.79001C15.5 9.92001 15 10 14.5 10C13.0421 9.99736 11.6447 9.41705 10.6138 8.38617C9.58295 7.3553 9.00264 5.95788 9 4.50001C9 3.03001 9.58 1.70001 10.5 0.710005C10.3185 0.487546 10.0897 0.308375 9.83021 0.185549C9.57072 0.0627231 9.28709 -0.000664505 9 5.25269e-06C7.9 5.25269e-06 7 0.900005 7 2.00001V2.29001C4.03 3.17001 2 5.90001 2 9.00001V15L0 17V18H18V17L16 15V9.79001ZM9 21C10.11 21 11 20.11 11 19H7C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21Z"
        fill="#4820FF"
      />
    </svg>
  );
};