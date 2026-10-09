export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#000"
        d="M0 3h5v5H0zm5 5h5v5H5zm0 5h5v5H5zm10 5h5v5h-5zM5 3h5v5H5zm5 0h5v5h-5zm0 10h5v5h-5zm0-5h5v5h-5zm0 10h5v5h-5zM20 3h5v5h-5zm5 0h5v5h-5zM10 23h5v5h-5z"
      />
    </svg>
  )
}
