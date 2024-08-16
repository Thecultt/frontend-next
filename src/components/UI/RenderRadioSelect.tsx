import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface RenderRadioSelectProps extends WrappedFieldProps {
	label: string;
	description: string;
	onClickInfoTag?: () => void | null
}

const RenderRadioSelect: React.FC<RenderRadioSelectProps> = ({ input, label, description, onClickInfoTag }) => {
	return (
		<div className="radio-wrapper">
			<div className="radio">
				<input {...input} id={`${input.name}-${label}`} className="radio__field" type="radio" />

				<label htmlFor={`${input.name}-${label}`} className="radio__label">
					<p className="radio__label__text">{label}</p>
				</label>

				{onClickInfoTag && (
					<svg width="22" height="22" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClickInfoTag}>
						<path d="M7.2395 9.82789V7.50006M7.2395 5.17223H7.2429M13.0591 7.50006C13.0591 10.7141 10.4536 13.3196 7.2395 13.3196C4.02544 13.3196 1.41992 10.7141 1.41992 7.50006C1.41992 4.28599 4.02544 1.68048 7.2395 1.68048C10.4536 1.68048 13.0591 4.28599 13.0591 7.50006Z" stroke="#070707" strokeWidth="0.872937" strokeLinecap="round" strokeLinejoin="round"></path>
					</svg>
				)}
			</div>

			{input.checked && description !== '' && description ? (
				<p className="radio__description" dangerouslySetInnerHTML={{ __html: description }}></p>
			) : null}
		</div>
	);
};

export default RenderRadioSelect;
