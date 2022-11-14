import {RenderedComponent} from '../../models/RenderedComponent';

export interface CustomizationFlowNavigationProps {
  previousText?: string;
  nextText?: string;
  showPreviousButton?: boolean;
  showNextButton?: boolean;
  onPreviousCallback: () => void;
  onNextCallback: () => void;
}

export default function CustomizationFlowNavigation({
  previousText = 'Previous',
  nextText = 'Next',
  showPreviousButton = true,
  showNextButton = true,
  onPreviousCallback,
  onNextCallback,
  renderComponent,
}: CustomizationFlowNavigationProps & RenderedComponent<CustomizationFlowNavigationProps>) {
  return renderComponent({
    previousText,
    nextText,
    showPreviousButton,
    showNextButton,
    onPreviousCallback,
    onNextCallback,
  });
}
