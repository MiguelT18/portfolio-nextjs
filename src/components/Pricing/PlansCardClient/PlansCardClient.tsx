'use client'

import PrimaryButton from '@/components/UI/Buttons/PrimaryButton'
import styles from './styles.module.css'

export default function PlansCardClient({ plans }: any) {
  const handlePay = async (plan: any) => {
    const response = await fetch('/api/checkout', {
      method: 'POST'
    })
    const data = await response.json()

    console.log(data)
  }

  return (
    <ul className={styles.plansContainer}>
      {plans.map((plan: any) => (
        <li key={plan.id}>
          <div className={styles.planCardContainer}>
            <h2>{plan.name}</h2>
            <span>{plan.price}</span>
            <PrimaryButton onClick={() => handlePay(plan)}>Pagar</PrimaryButton>
          </div>
        </li>
      ))}
    </ul>
  )
}
