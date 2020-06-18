import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import logo from './assets/logo.png';
import { Container, Header, Body, Description, Message, CardsWrapper, LeftMessage, RightMessage, ButtonWrapper, SubmitBtn } from './App.styles';
import Card from './Card';

function App() {

	const [points, setPoints] = useState(null);
	const wrapperRef = useRef();
	const message = 'How likely are you to recommend Upwardly to a friend or colleague?';
	const description = 'We\'re All Ears! Tell Us How We Did With Your Order';
	const leftMsg = 'Very likely';
	const rightMsg = 'Not at all';
	const buttonText = 'Submit';
	const count = 11;

	useEffect(() => {
		const browserName = getBrowserName()
		alert('You are using ' + browserName);
		if (browserName === 'Google Chrome') {
			const point = getQueryString('ayush');
			setPoints(point);
			if (point != null) wrapperRef.current.querySelectorAll('input')[count - point - 1].checked = true;
		};
	}, []);

	function getBrowserName() {
		const userAgentString = navigator.userAgent;
		if (userAgentString.indexOf("Chrome") > -1) return 'Google Chrome';
		else if (userAgentString.indexOf("Firefox") > -1) return 'Mozilla Firefox';
		else if (userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1) return 'Internet Explorer';
		else if (userAgentString.indexOf("Safari") > -1 && !userAgentString.indexOf("Chrome") > -1) return 'Apple Safari';
		else if (userAgentString.indexOf("OP") > -1 && !userAgentString.indexOf("Chrome") > -1) return 'Opera';
	}

	function getQueryString(field) {
		const result = new RegExp('[?&]' + field + '=([0-9]+)', 'i').exec(window.location.href);
		return result && +result[1] < 11 ? +result[1] : null;
	}

	function getCards() {
		const green = '#57c177';
		const orange = '#f7b64b';
		const red = '#ed6f67';
		return new Array(count).fill(0).map((item, index) => <Card key={index} text={count - index - 1} dontSelected={points != null} bgColor={index < 2 ? green : index < 4 ? orange : red} />);
	}

	return (
		<Container>
			<Header logo={logo} />
			<Body>
				<Description>{description}</Description>
				<Message>{message}</Message>
				<CardsWrapper ref={wrapperRef}>{getCards()}</CardsWrapper>
				<LeftMessage>{leftMsg}</LeftMessage>
				<RightMessage>{rightMsg}</RightMessage>
			</Body>
			<ButtonWrapper>
				<SubmitBtn>{buttonText}</SubmitBtn>
			</ButtonWrapper>
		</Container>
	);
}

export default App;
