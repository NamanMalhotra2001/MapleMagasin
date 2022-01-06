import styled from 'styled-components';

// Icons
import {
	BsFacebook,
	BsInstagram,
	BsMailbox,
	BsPhone,
	BsPinterest,
	BsPinMap,
	BsTwitter,
} from 'react-icons/bs';
import maple from '../Pictures/maple-leaf.png';

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo src={maple} alt='maple' />
				<Desc>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</Desc>
				<SocialContainer>
					<SocialIcon color='3B5999'>
						<BsFacebook />
					</SocialIcon>
					<SocialIcon color='E4405F'>
						<BsInstagram />
					</SocialIcon>
					<SocialIcon color='55ACEE'>
						<BsTwitter />
					</SocialIcon>
					<SocialIcon color='E60023'>
						<BsPinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Men's Fashion</ListItem>
					<ListItem>Women's Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<BsPinMap style={{ marginRight: '10px' }} /> 622 Dixie
					Path , South Tobinchester 98336
				</ContactItem>
				<ContactItem>
					<BsPhone style={{ marginRight: '10px' }} /> +1 234 56
					78
				</ContactItem>
				<ContactItem>
					<BsMailbox style={{ marginRight: '10px' }} />{' '}
					contact-us@gmail.com
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	user-select: none;
	display: flex;
	background-color: black;
	color: white;
	min-height: 30vh;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.img`
	object-fit: contain;
	width: 3rem;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	font-family: var(--font5);
	margin-bottom: 1rem;
	font-size: 1.5rem;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;
