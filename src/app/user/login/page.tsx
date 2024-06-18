import styles from './styles.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <main>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1>Inicia Sesión</h1>
          <p>Llena el siguiente formulario para poder iniciar sesión.</p>

          <input type='email' name='email' placeholder='Correo electrónico' />
          <input type='password' name='password' placeholder='Contraseña' />

          <button className='primaryButton fullWidth'>Iniciar Sesión</button>
          <span>
            No tienes una cuenta? <Link href='/user/register'>Regístrate</Link>
          </span>
        </form>
      </div>
    </main>
  )
}
