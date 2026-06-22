import React from 'react';
import type { ComponentProps } from 'react';

import Flex from './Flex';

type ColumnProps = Omit<ComponentProps<typeof Flex>, 'direction'>;

const Column: React.FC<ColumnProps> = (props) => {
  return <Flex direction="column" {...props} />;
};

export default Column;
