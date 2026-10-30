const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Oak & Ink. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer