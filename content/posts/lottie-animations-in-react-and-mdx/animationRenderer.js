/** @jsx jsx */
import React from "react"
import Lottie from "react-lottie"
import { jsx, IconButton } from "theme-ui"
import { IoIosPlay, IoIosPause } from "react-icons/io"
import { motion } from "framer-motion"
import { createfetchUnlessCached } from "fetch-unless-cached"

const cachedFetch = createfetchUnlessCached(1440) // minutes

export default function AnimationRenderer(props) {
  const [isPaused, setPaused] = React.useState(false)
  const [animation, setAnimation] = React.useState()

  React.useEffect(() => {
    cachedFetch("/.netlify/functions/lottie-animation", {
      headers: { accept: "Accept: application/json" },
    })
      .then((response) => response)
      .then(({ lottieAnimation }) => setAnimation(lottieAnimation))
  }, [])

  const defaultOptions = {
    loop: props.loop || true,
    autoplay: props.autoplay || true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return animation ? (
    <div sx={{ display: "flex", alignItems: "flex-end", marginBottom: 40 }}>
      <Lottie
        options={defaultOptions}
        width={props.width || "100%"}
        height={props.height || "100%"}
        isPaused={isPaused}
        isClickToPauseDisabled={true}
      />
      <IconButton
        opacity={0.6}
        aria-label={`${isPaused ? "Play" : "Stop"} animation`}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
          borderColor: "rgba(0,0,0,0.3)",
          borderRadius: "50%",
        }}
        onClick={() => setPaused(!isPaused)}
      >
        {isPaused ? <IoIosPlay sx={{ ml: "2px" }} /> : <IoIosPause />}
      </IconButton>
    </div>
  ) : (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: [473, 518],
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: [0, 360] }}
        transition={{
          loop: Infinity,
          duration: 1,
        }}
        sx={{ width: 36, height: 36 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="36"
          height="36"
          viewBox="0 0 46 46"
        >
          <defs>
            <circle id="spinner-a" cx="23" cy="23" r="23" />
            <mask
              id="spinner-b"
              width="46"
              height="46"
              x="0"
              y="0"
              fill="#fff"
              maskContentUnits="userSpaceOnUse"
              maskUnits="objectBoundingBox"
            >
              <use xlinkHref="#spinner-a" />
            </mask>
          </defs>
          <use
            fill="none"
            fillRule="evenodd"
            stroke="#000"
            strokeDasharray="80 20"
            strokeWidth="5"
            mask="url(#spinner-b)"
            xlinkHref="#spinner-a"
          />
        </svg>
      </motion.div>
    </div>
  )
}
