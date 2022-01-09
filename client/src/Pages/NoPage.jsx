import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NoPage() {
	let navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(-1);
		}, 7000);
	}, [navigate]);

	return (
		<NoPageWrapper>
			<Header>404: Not Found</Header>
			<Text>Seems like you wandered off 🚀</Text>
			<p className='smltxt'>
				returning to previous page in 5 seconds
			</p>
		</NoPageWrapper>
	);
}

export default NoPage;

export const NoPageWrapper = styled.div`
	display: flex;
	height: var(--minHeight);
	flex-direction: column;
	align-items: center;
	user-select: none;

	.smltxt{
		font-size: 1.4rem;
		font-weight: bold;
		color: #ff7d7d;
		margin-top: 3rem;
	}
`;

export const Header = styled.h1`
	padding-top: 4rem;
	font-size: 5rem;
`;

export const Text = styled.h2`
	font-size: 2rem;
	text-align: center;
`;
