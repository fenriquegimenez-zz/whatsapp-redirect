interface LayoutChild {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutChild) => {
  return <div className="container vh-100 text-center">{children}</div>
}

export default Layout
