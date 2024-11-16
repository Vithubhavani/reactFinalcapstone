/* eslint-disable react/prop-types */

import styles from './Form.module.css'


export default function Form({
  // eslint-disable-next-line react/prop-types
  name,
  username,
  email,
  mobile,
  setName,
  setEmail,
  setUsername,
  setMobile,
  error,
  setError,
  submitHandler
  }) {

  return (
    <div className={styles.container}>

      <div className={styles.name}>
      <input type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e)=>setName(e.target.value)} 
        className={styles.names}
        />
        {error?.name&& <p className={styles.error}>Name is required</p>}
        </div>

        <div className={styles.name}>
        <input type="text" 
        value={username}
        placeholder="Enter your name"
        onChange={(e)=>setUsername(e.target.value)}
        className={styles.names}
        />
        {error?.username && <p className={styles.error}>Username is required</p>}
        </div>

        <div className={styles.name}>
        <input type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e)=>setEmail(e.target.value)}
        className={styles.names}
         />
        {error?.email && <p className={styles.error}>Email is required</p>}
        </div>

        <div className={styles.name}>
        <input type="text"
        value={mobile}
        placeholder="Enter your mobile number"
        onChange={(e)=>setMobile(e.target.value)}
        className={styles.names}
        />
        {error?.mobile && (<p className={styles.error}>Mobile is required</p>)}
</div>
        <div >
        <button onClick={submitHandler} className={styles.btn}>Sign Up</button>
        </div>
    </div>
  )
}
