import React from 'react';
import type { ComponentProps } from 'react';

import Flex from './Flex';

type RowProps = Omit<ComponentProps<typeof Flex>, 'direction'>;

const Row: React.FC<RowProps> = (props) => {
  return <Flex direction="row" {...props} />;
};

export default Row;
