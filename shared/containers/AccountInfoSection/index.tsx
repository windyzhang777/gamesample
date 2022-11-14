import {RenderedComponent} from '../../models/RenderedComponent';

export interface AccountInfoSectionProps {
  profileImageSource: any;
  username: string;
}

export default function AccountInfoSection({
  profileImageSource,
  username,
  renderComponent,
}: AccountInfoSectionProps & RenderedComponent<AccountInfoSectionProps>) {
  const renderProps: AccountInfoSectionProps = {
    profileImageSource,
    username: username,
  };
  return renderComponent(renderProps);
}
