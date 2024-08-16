import React from 'react';
import { createPortal } from 'react-dom';

import { getClassNames } from '@/functions/getClassNames';
import NoSsr from '@/components/NoSsr/NoSsr';

interface Props {
	state: boolean;
	setState?: () => void;

	stateContent?: boolean;
	setStateContent?: () => void;

	children: React.ReactNode;

	center?: boolean;

	borderBlack?: boolean
}

const PopupContent: React.FC<Props> = ({ state, setState, stateContent, children, center = false, borderBlack = false }) => {
	const PopupRefWrapper = React.useRef<HTMLDivElement>(null);
	const PopupRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (state) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}, [state]);

	React.useEffect(() => {
		if (state) {
			document.addEventListener('mousedown', togglePopup);
			document.addEventListener('touchstart', togglePopup);
		}

		return () => {
			document.removeEventListener('mousedown', togglePopup);
			document.removeEventListener('touchstart', togglePopup);
		};
	}, [PopupRef, state]);

	const togglePopup = (e: any) => {
		if (PopupRef.current && !PopupRef.current.contains(e.target)) {
			if (setState) setState();
		}
	};

	return createPortal(
		<div
			className={getClassNames('popup', {
				active: state,
				'popup--center': center,
			})}
			ref={PopupRefWrapper}
		>
			<div
				// className={getClassNames('popup-content', {
				//     active: state && !!stateContent,
				//     close: state && !stateContent,
				// })}
				className={`popup-content ${borderBlack ? "border-black" : ""} ${state ? (stateContent !== undefined ? (stateContent ? 'active' : 'close') : 'active') : ''
					}`}
				ref={PopupRef}
			>
				<div className="popup-content-close" onClick={setState}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18.4375 5.85156L6.4375 17.8516"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.4375 5.85156L18.4375 17.8516"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>

				{children}
			</div>
		</div>,
		document.body,
	);
};

const Popup: React.FC<Props> = (props) => (
	<NoSsr>
		<PopupContent {...props} />
	</NoSsr>
);

export default Popup;
