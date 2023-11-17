import { FC } from "react"

interface LayoutChild {
  children?: React.ReactNode
}

const Layout: FC<LayoutChild> = ({ children }) => {
  return (
    <div
      className="container-fluid vh-100 text-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(220,248,198,1) 0%, rgba(7,94,84,1) 100%)",
      }}
    >
      {children}
    </div>
  )
}

export default Layout
