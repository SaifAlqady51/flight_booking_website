import styled from 'styled-components';

export const NavContainer = styled.div`
    background-color:${(props) => props.theme.navColor};
    height: 80px;
    display: flex;
    align-items: center;
	justify-content: space-between;
    position:fixed;
    width: 100%;
    top:0;
	z-index: 10;



`

export const LeftNavbar = styled.div`
    height: inherit;
    width:20%;
    display: flex;
    align-items: center;
	justify-content: start;
	margin-left:100px;

	@media (max-width:1500px){
		margin-left:50px;
	}
    @media (max-width:750px) {
        width:100%;
        justify-content: center;
    }

    
`

export const RightNavbar = styled.div`
    height:inherit;
    width:40%;
    display: flex;
    align-items: center;
    justify-content: end;
	flex-shrink:0;
	margin-right:100px;


	@media (max-width:1150px){
		width:55%;
	}


    @media (max-width:750px) {
        width:10%;
        display:flex;
		align-items: center;
		justify-content: end;
		margin-right:0;

	
`
