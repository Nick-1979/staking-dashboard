// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonHelp } from '@polkagate/cloud-react';
import type { FunctionComponent } from 'react';
import React from 'react';
import { useHelp } from 'contexts/Help';
import CrossSVG from 'img/cross.svg?react';
import { useOverlay } from '@polkagate/cloud-react/hooks';
import { TitleWrapper } from './Wrappers';
import type { AnyJson } from 'types';

interface TitleProps {
  title: string;
  icon?: IconProp;
  Svg?: FunctionComponent<React.SVGProps<AnyJson>>;
  fixed?: boolean;
  helpKey?: string;
  style?: React.CSSProperties;
}

export const Title = ({
  helpKey,
  title,
  icon,
  fixed,
  Svg,
  style,
}: TitleProps) => {
  const { setModalStatus } = useOverlay().modal;
  const { openHelp } = useHelp();

  const graphic = Svg ? (
    <Svg style={{ width: '1.5rem', height: '1.5rem' }} />
  ) : icon ? (
    <FontAwesomeIcon transform="grow-3" icon={icon} />
  ) : null;

  return (
    <TitleWrapper $fixed={fixed || false} style={{ ...style }}>
      <div>
        {graphic}
        <h2>
          {title}
          {helpKey ? (
            <ButtonHelp marginLeft onClick={() => openHelp(helpKey)} />
          ) : null}
        </h2>
      </div>
      <div>
        <button type="button" onClick={() => setModalStatus('closing')}>
          <CrossSVG style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>
      </div>
    </TitleWrapper>
  );
};
