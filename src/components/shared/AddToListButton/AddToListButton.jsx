import styled from 'styled-components';
import BootstrapTooltip from '../Tooltip/BootstrapTooltip';

const Div = styled.div`
  min-width: 32px;
  min-height: 32px;
  max-width: 42px;
  max-height: 42px;
  z-index: 1;
  border-width: 2px;
  background-color: rgba(42, 42, 42, 0.6);

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);

  &:hover {
    transition: all 0.1s ease-in;
    border: 1px solid white;
  }

  -webkit-box-align: center;
  align-items: center;
  appearance: none;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  opacity: 1;
  position: relative;
  will-change: background-color, color;
  word-break: break-word;
  white-space: nowrap;
  border-radius: 50%;

  svg {
    width: 1em;
  }
`;

const TooltipNest = ({ tooltip, children, title }) =>
  tooltip ? (
    <BootstrapTooltip placement="top" title={title}>
      {children}
    </BootstrapTooltip>
  ) : (
    <>{children}</>
  );

export const AddToListButtonVariationOne = ({ tooltip, onClick }) => (
  <TooltipNest tooltip={tooltip} title="Add to My List">
    <Div className="icon" onClick={onClick || ''}>
      <svg viewBox="0 0 24 24">
        <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor" />
      </svg>
    </Div>
  </TooltipNest>
);

export const RemoveFromListButton = ({ tooltip, onClick }) => (
  <TooltipNest tooltip={tooltip} title="Remove from My List">
    <Div className="icon" onClick={onClick || ''}>
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
        />
      </svg>
    </Div>
  </TooltipNest>
);
