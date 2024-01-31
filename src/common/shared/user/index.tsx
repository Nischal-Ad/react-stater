import { Link } from 'react-router-dom'

const UserMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto">
      <div>
        <Link to="/home">home</Link>
      </div>
      {children}
      <div>footer</div>
    </section>
  )
}

export default UserMenu
