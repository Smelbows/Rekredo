import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
    border: black solid 1px;
    width: 400px;
`;

export const StyledInput = styled.input`
padding: 8px;
font-size: 16px;
border: none;
border-radius: 3px;
margin-bottom: 20px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`;

export const FormBox = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		height: 60vh;
		width: 60vw;
	}
`;