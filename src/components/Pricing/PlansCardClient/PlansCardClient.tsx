'use client'

import styles from './styles.module.css'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function PlansCardClient({ plans }: any) {
  return (
    <ul className={styles.plansContainer}>
      {plans.map((plan: any) => (
        <li key={plan.id} className={styles.planCardContainer}>
          <h2>{plan.name}</h2>
          <span>{plan.price} USD</span>
          <PayPalScriptProvider
            options={{
              clientId:
                'AVChxnuzIw1Et90hOzl29JiwOUnPL1hBDZBXOKbVgBK3hC-QwdLIWy0_c3DcncK3a6esv0sTvRW9GeWT'
            }}
          >
            <PayPalButtons
              style={{
                color: 'silver',
                layout: 'vertical',
                label: 'pay',
                shape: 'pill'
              }}
              createOrder={async () => {
                try {
                  const res = await fetch('/api/checkout', {
                    method: 'POST'
                  })
                  const order = await res.json()
                  console.log(order)
                  return order.id
                } catch (error) {
                  console.error(error)
                  alert('Error creating order')
                }
              }}
            />
          </PayPalScriptProvider>
        </li>
      ))}
    </ul>
  )
}

/*
createOrder={() => {}}
onCancel={() => {}}
onApprove={() => {}}
*/
