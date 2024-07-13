import { getPlansData } from '@/lib/loadData'
import PlansCardClient from '../../components/Pricing/PlansCardClient/PlansCardClient'

export default async function SuscriptionPage() {
  const resJSON = await getPlansData()
  const plans = JSON.parse(resJSON)

  return (
    <main>
      <PlansCardClient plans={plans} />
    </main>
  )
}
