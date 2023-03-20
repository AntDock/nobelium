import { useRouter } from 'next/router'
import useAckee from 'use-ackee'

const Ackee = ({ ackeeServerUrl, ackeeDomainId }) => {
  const router = useRouter()
  useAckee(
    router.asPath,
    { server: ackeeServerUrl, domainId: ackeeDomainId },
    { detailed: true, ignoreLocalhost: true }
  )
  return null
}

export default Ackee
