import {LoadingStyles, AirPlaneEngineImage, AirPlaneImageContainer} from '@styles/LoadingPage-styles'
import AirPlaneEngine  from '../../../public/static/images/PlaneEngine.jpeg'
const Page = () => {

	return(
		<>
			<LoadingStyles>
				<AirPlaneImageContainer animate={{rotate:360}} transition={{repeat:Infinity}}>
					<AirPlaneEngineImage src={AirPlaneEngine} alt='air_plane_engine' />
				</AirPlaneImageContainer>	
			</LoadingStyles>
		</>
	)
}

export default Page
