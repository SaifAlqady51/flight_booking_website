'use client'
import { FC } from 'react'
import { FlightPageContainer } from '@/styles/FlightStyles/FlightPageContainer.styles'
import {FlightCard} from '@components/Flights/FlightCard'
interface pageProps {

  
}

const page: FC<pageProps> = ({}) => {
  return (
	<FlightPageContainer>
		<FlightCard></FlightCard>
	</FlightPageContainer>
  )
}

export default page
